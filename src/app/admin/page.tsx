import type { Metadata } from "next";
import { cookies } from "next/headers";
import { AdminClient } from "@/app/admin/AdminClient";
import { AdminSetup } from "@/app/admin/AdminSetup";
import {
  ADMIN_COOKIE,
  missingAdminEnvVars,
  readAdminConfig,
  verifySessionToken,
} from "@/lib/admin-auth";
import { groupSlotsBySection } from "@/lib/image-slots";

export const metadata: Metadata = {
  title: "Administration",
  // Cette page ne doit jamais apparaître dans un moteur de recherche.
  robots: { index: false, follow: false, nocache: true },
};

/** L'état dépend du cookie de session : rien ne peut être pré-rendu. */
export const dynamic = "force-dynamic";

/**
 * Page d'administration des photos.
 *
 * Trois états possibles, décidés côté serveur pour qu'aucun secret ne
 * transite vers le navigateur :
 *
 *  • non configurée — il manque des variables d'environnement ;
 *  • non connectée  — formulaire de mot de passe ;
 *  • connectée      — la grille des emplacements d'images.
 */
export default async function AdminPage() {
  const config = readAdminConfig();

  if (!config) {
    return <AdminSetup missing={missingAdminEnvVars()} />;
  }

  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  const isAuthenticated = verifySessionToken(token, config.password);

  return (
    <AdminClient
      authenticated={isAuthenticated}
      groups={groupSlotsBySection()}
      repository={config.repository}
      branch={config.branch}
    />
  );
}
