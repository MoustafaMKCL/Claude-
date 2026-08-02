/**
 * Génère les visuels de remplacement de `public/images/`.
 *
 *   npm run images:placeholders
 *
 * Ces images sont des GABARITS : elles respectent les dimensions et le cadrage
 * attendus par le site pour que la mise en page soit juste dès le premier
 * chargement. Remplacez-les par vos photos réelles en conservant le même nom
 * de fichier — aucune modification de code n'est alors nécessaire.
 *
 * La liste des emplacements vient de `src/content/image-slots.json`, partagée
 * avec la page d'administration : les dimensions annoncées dans l'admin sont
 * donc toujours celles réellement produites ici.
 *
 * PROTECTION DES VRAIES PHOTOS — le script note l'empreinte SHA-256 de chaque
 * gabarit qu'il écrit. À l'exécution suivante, un fichier dont l'empreinte ne
 * correspond plus est considéré comme une photo déposée par vos soins et n'est
 * jamais écrasé. Peu importe qu'elle ait été déposée à la main ou via l'admin.
 */

import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, "public", "images");
const SLOTS_FILE = path.join(ROOT, "src", "content", "image-slots.json");
const MANIFEST = path.join(OUTPUT_DIR, ".placeholder-manifest.json");

/** Empreinte d'un contenu, pour distinguer gabarit et photo réelle. */
const sha256 = (buffer) => createHash("sha256").update(buffer).digest("hex");

/** Échappe le texte inséré dans le SVG. */
const escapeXml = (value) =>
  value.replace(/[<>&'"]/g, (char) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[char],
  );

/**
 * Compose un dégradé sombre traversé de lignes fines — évoque une perspective
 * architecturale sans imiter une photo, ce qui rend le gabarit lisible.
 */
function buildSvg({ width, height, hue, label, shade = 1 }) {
  const unit = Math.min(width, height);
  const cx = width / 2;
  const cy = height / 2;

  // Lignes de fuite partant du centre optique.
  const rays = Array.from({ length: 14 }, (_, index) => {
    const angle = (index / 14) * Math.PI * 2 + 0.35;
    const x2 = cx + Math.cos(angle) * width;
    const y2 = cy + Math.sin(angle) * height;
    return `<line x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="url(#ray)" stroke-width="1" />`;
  }).join("");

  // Rectangles concentriques : profondeur de champ suggérée.
  const frames = Array.from({ length: 5 }, (_, index) => {
    const inset = unit * (0.1 + index * 0.075);
    const w = width - inset * 2;
    const h = height - inset * 2;
    if (w <= 0 || h <= 0) return "";
    const opacity = (0.16 - index * 0.026).toFixed(3);
    return `<rect x="${inset.toFixed(1)}" y="${inset.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="${(unit * 0.02).toFixed(1)}" fill="none" stroke="#ffffff" stroke-opacity="${opacity}" stroke-width="1.5" />`;
  }).join("");

  const fontSize = Math.round(unit * 0.045);

  // Un libellé vide produit un gabarit purement graphique (cas des bannières,
  // où un texte transparaîtrait derrière le titre de la page).
  const caption = label
    ? `<text x="${cx}" y="${(cy + fontSize * 0.36).toFixed(1)}"
        font-family="Inter, Helvetica, Arial, sans-serif" font-size="${fontSize}"
        font-weight="600" letter-spacing="${(fontSize * 0.06).toFixed(2)}"
        fill="#ffffff" fill-opacity="0.82" text-anchor="middle">${escapeXml(label)}</text>
  <text x="${cx}" y="${(cy + fontSize * 2).toFixed(1)}"
        font-family="Inter, Helvetica, Arial, sans-serif" font-size="${Math.round(fontSize * 0.42)}"
        font-weight="500" letter-spacing="${(fontSize * 0.12).toFixed(2)}"
        fill="#ffffff" fill-opacity="0.42" text-anchor="middle">${width} × ${height}</text>`
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl(${hue} 42% ${(13 * shade).toFixed(1)}%)" />
      <stop offset="55%" stop-color="hsl(${hue} 38% ${(19 * shade).toFixed(1)}%)" />
      <stop offset="100%" stop-color="hsl(${hue - 12} 30% ${(9 * shade).toFixed(1)}%)" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="42%" r="62%">
      <stop offset="0%" stop-color="hsl(${hue} 72% 52%)" stop-opacity="0.34" />
      <stop offset="100%" stop-color="hsl(${hue} 72% 52%)" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="ray" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.13" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000000" stop-opacity="0" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.45" />
    </linearGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <rect width="${width}" height="${height}" fill="url(#glow)" />
  <g>${rays}</g>
  <g>${frames}</g>
  <rect y="${(height * 0.62).toFixed(1)}" width="${width}" height="${(height * 0.38).toFixed(1)}" fill="url(#floor)" />

  ${caption}
</svg>`;
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const slots = JSON.parse(await readFile(SLOTS_FILE, "utf8"));

  /** Empreintes des gabarits écrits lors des exécutions précédentes. */
  let fingerprints = {};
  if (existsSync(MANIFEST)) {
    try {
      fingerprints = JSON.parse(await readFile(MANIFEST, "utf8")).fingerprints ?? {};
    } catch {
      fingerprints = {};
    }
  }

  const written = [];
  const preserved = [];
  const nextFingerprints = {};

  for (const slot of slots) {
    const target = path.join(OUTPUT_DIR, slot.file);

    if (existsSync(target)) {
      const current = sha256(await readFile(target));

      // Empreinte inconnue ou différente : c'est une vraie photo, on n'y touche pas.
      if (current !== fingerprints[slot.file]) {
        preserved.push(slot.file);
        continue;
      }
    }

    const buffer = await sharp(
      Buffer.from(
        buildSvg({
          width: slot.width,
          height: slot.height,
          hue: slot.hue,
          label: slot.placeholderLabel,
          shade: slot.shade,
        }),
      ),
    )
      .jpeg({ quality: 82, chromaSubsampling: "4:4:4", mozjpeg: true })
      .toBuffer();

    await writeFile(target, buffer);
    nextFingerprints[slot.file] = sha256(buffer);
    written.push(slot.file);
  }

  await writeFile(
    MANIFEST,
    `${JSON.stringify({ fingerprints: nextFingerprints }, null, 2)}\n`,
    "utf8",
  );

  console.log(`✓ ${written.length} gabarit(s) écrit(s) dans public/images/`);
  if (preserved.length > 0) {
    console.log(`↷ ${preserved.length} photo(s) réelle(s) conservée(s) : ${preserved.join(", ")}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
