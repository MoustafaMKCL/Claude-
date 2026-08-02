import type { AdminConfig } from "@/lib/admin-auth";

/**
 * Écriture de fichiers dans le dépôt GitHub.
 *
 * C'est le cœur du fonctionnement de l'admin en production : l'hébergement
 * (Vercel, Netlify…) sert un système de fichiers en lecture seule et remis à
 * zéro à chaque déploiement. Écrire dans `public/` depuis le serveur serait
 * donc sans effet. On envoie plutôt le fichier au dépôt Git, ce qui déclenche
 * un redéploiement — la photo devient la nouvelle source de vérité, versionnée
 * et restaurable.
 */

const API = "https://api.github.com";

function headers(config: AdminConfig): HeadersInit {
  return {
    Authorization: `Bearer ${config.githubToken}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "pws-admin",
  };
}

/** Erreur portant le code HTTP renvoyé par GitHub, pour un message utile. */
export class GitHubError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "GitHubError";
  }
}

/**
 * Récupère l'empreinte Git du fichier existant.
 *
 * GitHub exige ce `sha` pour remplacer un fichier : c'est ce qui empêche
 * d'écraser sans le savoir une version plus récente. `null` si le fichier
 * n'existe pas encore.
 */
async function getFileSha(config: AdminConfig, filePath: string): Promise<string | null> {
  const url = `${API}/repos/${config.repository}/contents/${encodeURI(filePath)}?ref=${encodeURIComponent(config.branch)}`;
  const response = await fetch(url, { headers: headers(config), cache: "no-store" });

  if (response.status === 404) return null;

  // 401/403 signifient presque toujours un jeton absent, expiré ou dépourvu de
  // l'autorisation « Contents ». On le dit, plutôt que d'afficher un code brut.
  if (response.status === 401 || response.status === 403) {
    throw new GitHubError(
      "Jeton GitHub refusé. Vérifiez GITHUB_TOKEN et son autorisation « Contents : Read and write » sur le dépôt.",
      response.status,
    );
  }

  if (!response.ok) {
    throw new GitHubError(
      `Lecture de ${filePath} impossible (${response.status}).`,
      response.status,
    );
  }

  const data = (await response.json()) as { sha?: string };
  return data.sha ?? null;
}

/** Crée ou remplace un fichier, et renvoie l'URL du commit produit. */
export async function commitFile(
  config: AdminConfig,
  { filePath, content, message }: { filePath: string; content: Buffer; message: string },
): Promise<{ commitUrl: string }> {
  const sha = await getFileSha(config, filePath);

  const response = await fetch(
    `${API}/repos/${config.repository}/contents/${encodeURI(filePath)}`,
    {
      method: "PUT",
      headers: { ...headers(config), "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        content: content.toString("base64"),
        branch: config.branch,
        ...(sha ? { sha } : {}),
      }),
    },
  );

  if (!response.ok) {
    const detail = await response.text();
    throw new GitHubError(
      `Envoi de ${filePath} refusé par GitHub (${response.status}). ${detail.slice(0, 300)}`,
      response.status,
    );
  }

  const data = (await response.json()) as { commit?: { html_url?: string } };
  return { commitUrl: data.commit?.html_url ?? "" };
}

/** Vérifie que le jeton donne bien accès au dépôt et à la branche visés. */
export async function checkRepositoryAccess(config: AdminConfig): Promise<void> {
  const response = await fetch(
    `${API}/repos/${config.repository}/branches/${encodeURIComponent(config.branch)}`,
    { headers: headers(config), cache: "no-store" },
  );

  if (response.status === 404) {
    throw new GitHubError(
      `Dépôt ou branche introuvable : ${config.repository} / ${config.branch}. Vérifiez GITHUB_REPOSITORY et GITHUB_BRANCH.`,
      404,
    );
  }
  if (response.status === 401 || response.status === 403) {
    throw new GitHubError(
      "Jeton GitHub refusé. Vérifiez GITHUB_TOKEN et ses autorisations en écriture sur le dépôt.",
      response.status,
    );
  }
  if (!response.ok) {
    throw new GitHubError(`GitHub a répondu ${response.status}.`, response.status);
  }
}
