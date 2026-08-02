import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import sharp from "sharp";
import { ADMIN_COOKIE, readAdminConfig, verifySessionToken } from "@/lib/admin-auth";
import { GitHubError, commitFile } from "@/lib/github";
import { findSlot } from "@/lib/image-slots";

export const runtime = "nodejs";
/** L'envoi passe par GitHub : rien ne doit être mis en cache. */
export const dynamic = "force-dynamic";

/** Taille maximale acceptée en entrée, avant redimensionnement. */
const MAX_UPLOAD_BYTES = 20 * 1024 * 1024;

const ACCEPTED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/tiff",
]);

/**
 * Reçoit une photo, la normalise et la publie dans le dépôt.
 *
 * Trois garde-fous se succèdent :
 *
 *  1. session valide — le cookie signé, sinon 401 ;
 *  2. emplacement connu — le nom de fichier doit figurer dans
 *     `image-slots.json`. C'est ce qui empêche d'écrire ailleurs que dans
 *     `public/images/` en manipulant le champ ;
 *  3. contenu réellement image — `sharp` décode le fichier ; s'il échoue,
 *     rien n'est publié.
 *
 * La photo est ensuite recadrée aux dimensions exactes de l'emplacement, ce
 * qui garantit que la mise en page reste juste quelle que soit l'image
 * envoyée, et ré-encodée en JPEG pour maîtriser le poids.
 */
export async function POST(request: Request) {
  const config = readAdminConfig();
  if (!config) {
    return NextResponse.json(
      { error: "L'administration n'est pas configurée sur ce serveur." },
      { status: 503 },
    );
  }

  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!verifySessionToken(token, config.password)) {
    return NextResponse.json({ error: "Session expirée. Reconnectez-vous." }, { status: 401 });
  }

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  const slotId = form?.get("slot");

  if (!(file instanceof File) || typeof slotId !== "string") {
    return NextResponse.json({ error: "Requête incomplète." }, { status: 400 });
  }

  const slot = findSlot(slotId);
  if (!slot) {
    return NextResponse.json({ error: "Emplacement inconnu." }, { status: 400 });
  }

  if (file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json(
      { error: "Fichier trop lourd (20 Mo maximum)." },
      { status: 413 },
    );
  }

  if (file.type && !ACCEPTED_TYPES.has(file.type)) {
    return NextResponse.json(
      { error: "Format non pris en charge. Utilisez JPEG, PNG, WebP ou AVIF." },
      { status: 415 },
    );
  }

  const input = Buffer.from(await file.arrayBuffer());

  let output: Buffer;
  try {
    output = await sharp(input)
      // `rotate()` sans argument applique l'orientation EXIF : sans lui, les
      // photos prises au téléphone arrivent parfois couchées.
      .rotate()
      .resize(slot.width, slot.height, { fit: "cover", position: "attention" })
      .jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: "4:2:0" })
      .toBuffer();
  } catch {
    return NextResponse.json(
      { error: "Ce fichier n'est pas une image lisible." },
      { status: 422 },
    );
  }

  try {
    const { commitUrl } = await commitFile(config, {
      filePath: `public/images/${slot.file}`,
      content: output,
      message: `Mettre à jour la photo « ${slot.label} » (${slot.file})`,
    });

    return NextResponse.json({
      ok: true,
      file: slot.file,
      bytes: output.byteLength,
      commitUrl,
    });
  } catch (error) {
    if (error instanceof GitHubError) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }
    return NextResponse.json(
      { error: "Publication impossible. Réessayez dans un instant." },
      { status: 500 },
    );
  }
}
