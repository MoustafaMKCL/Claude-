import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Authentification de la page d'administration.
 *
 * Volontairement minimaliste : un mot de passe unique, comparé en temps
 * constant, qui donne un cookie de session signé. Pas de base de données ni de
 * comptes utilisateurs — le site n'a qu'un administrateur, et toute
 * complexité supplémentaire serait une surface d'attaque de plus.
 *
 * Le secret de signature est dérivé du mot de passe : changer le mot de passe
 * invalide donc immédiatement toutes les sessions ouvertes.
 */

export const ADMIN_COOKIE = "pws_admin";

/** Durée de validité d'une session, en secondes (8 heures). */
export const SESSION_DURATION = 8 * 60 * 60;

/** Variables d'environnement nécessaires au fonctionnement de l'admin. */
export interface AdminConfig {
  password: string;
  githubToken: string;
  /** Dépôt au format `proprietaire/depot`. */
  repository: string;
  branch: string;
}

/**
 * Lit la configuration. Renvoie `null` si une variable manque — l'admin
 * affiche alors la marche à suivre au lieu de planter.
 */
export function readAdminConfig(): AdminConfig | null {
  const password = process.env.ADMIN_PASSWORD;
  const githubToken = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;
  const branch = process.env.GITHUB_BRANCH;

  if (!password || !githubToken || !repository || !branch) return null;
  return { password, githubToken, repository, branch };
}

/** Liste les variables manquantes, pour un message d'erreur exploitable. */
export function missingAdminEnvVars(): string[] {
  return (
    ["ADMIN_PASSWORD", "GITHUB_TOKEN", "GITHUB_REPOSITORY", "GITHUB_BRANCH"] as const
  ).filter((name) => !process.env[name]);
}

/** Comparaison en temps constant : ne fuit pas la longueur du mot de passe. */
export function verifyPassword(input: string, expected: string): boolean {
  const a = Buffer.from(input, "utf8");
  const b = Buffer.from(expected, "utf8");
  // `timingSafeEqual` exige des longueurs égales : on compare des empreintes,
  // de taille fixe, plutôt que les chaînes elles-mêmes.
  const ha = createHmac("sha256", "pws").update(a).digest();
  const hb = createHmac("sha256", "pws").update(b).digest();
  return timingSafeEqual(ha, hb);
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

/** Fabrique un jeton `expiration.signature`. */
export function createSessionToken(secret: string): string {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION;
  return `${expiresAt}.${sign(String(expiresAt), secret)}`;
}

/** Vérifie la signature et la date d'expiration d'un jeton. */
export function verifySessionToken(token: string | undefined, secret: string): boolean {
  if (!token) return false;

  const [expiresAt, signature] = token.split(".");
  if (!expiresAt || !signature) return false;

  const expiry = Number(expiresAt);
  if (!Number.isFinite(expiry) || expiry * 1000 < Date.now()) return false;

  const expected = sign(expiresAt, secret);
  if (expected.length !== signature.length) return false;

  return timingSafeEqual(Buffer.from(expected, "hex"), Buffer.from(signature, "hex"));
}
