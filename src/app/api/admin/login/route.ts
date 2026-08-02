import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  SESSION_DURATION,
  createSessionToken,
  readAdminConfig,
  verifyPassword,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

/**
 * Fenêtre anti-force brute, en mémoire du serveur.
 *
 * Volontairement simple : elle survit le temps d'une instance, ce qui suffit à
 * casser une attaque automatisée. Pour un verrouillage réellement persistant,
 * il faudrait un stockage partagé (Redis, KV) — inutile ici pour un site à un
 * seul administrateur.
 */
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 8;
const WINDOW_MS = 10 * 60 * 1000;

function tooManyAttempts(key: string): boolean {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || entry.resetAt < now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

export async function POST(request: Request) {
  const config = readAdminConfig();
  if (!config) {
    return NextResponse.json(
      { error: "L'administration n'est pas configurée sur ce serveur." },
      { status: 503 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "inconnu";
  if (tooManyAttempts(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans dix minutes." },
      { status: 429 },
    );
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  if (!body?.password) {
    return NextResponse.json({ error: "Mot de passe manquant." }, { status: 400 });
  }

  if (!verifyPassword(body.password, config.password)) {
    return NextResponse.json({ error: "Mot de passe incorrect." }, { status: 401 });
  }

  // Connexion réussie : on remet le compteur de tentatives à zéro.
  attempts.delete(ip);

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, createSessionToken(config.password), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DURATION,
  });

  return response;
}
