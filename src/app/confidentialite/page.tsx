import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Comment ${site.meta.name} collecte, utilise et protège vos données personnelles, conformément au RGPD.`,
  robots: { index: false, follow: true },
};

const { meta, contact } = site;

/**
 * Gabarit de politique de confidentialité (RGPD).
 *
 * ⚠️ À faire relire par un juriste et à compléter selon les outils réellement
 * utilisés (analytique, formulaires, newsletter) avant la mise en ligne.
 */
export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updatedAt="1ᵉʳ janvier 2026">
      <p>
        {meta.name} attache une grande importance à la protection de votre vie
        privée. Cette page explique quelles données nous traitons, pourquoi, et
        quels sont vos droits au titre du Règlement général sur la protection
        des données (RGPD).
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        {meta.name} — {contact.street}, {contact.postalCode} {contact.city}.
        <br />
        Pour toute question :{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>

      <h2>Données collectées</h2>
      <ul>
        <li>
          <strong>Données de contact</strong> — nom, adresse électronique,
          numéro de téléphone et message, lorsque vous nous écrivez ou demandez
          une visite.
        </li>
        <li>
          <strong>Données contractuelles</strong> — informations nécessaires à
          l&apos;établissement d&apos;un contrat de domiciliation ou de
          coworking, y compris les documents exigés par la loi.
        </li>
        <li>
          <strong>Données techniques</strong> — les journaux du serveur
          (adresse IP, navigateur, pages consultées), conservés à des fins de
          sécurité et de diagnostic.
        </li>
      </ul>

      <h2>Finalités et bases légales</h2>
      <ul>
        <li>Répondre à vos demandes — intérêt légitime et mesures précontractuelles.</li>
        <li>Exécuter et gérer votre contrat — exécution du contrat.</li>
        <li>Respecter nos obligations légales et comptables — obligation légale.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Ce site ne dépose aucun cookie publicitaire ni traceur analytique. La
        carte de la page « Localisation » est fournie par Google Maps : son
        chargement peut entraîner le dépôt de cookies par Google, sur lesquels
        nous n&apos;avons pas la main. Vous pouvez les bloquer via les réglages
        de votre navigateur.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les demandes de contact sont conservées trois ans à compter du dernier
        échange. Les documents contractuels et comptables sont conservés
        pendant la durée légale applicable en Belgique.
      </p>

      <h2>Destinataires</h2>
      <p>
        Vos données ne sont ni vendues ni louées. Elles peuvent être
        communiquées à nos sous-traitants techniques (hébergement, messagerie),
        liés par une obligation de confidentialité, ainsi qu&apos;aux autorités
        lorsque la loi l&apos;exige.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification,
        d&apos;effacement, de limitation, d&apos;opposition et de portabilité.
        Pour l&apos;exercer, écrivez à{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>. Vous pouvez
        également introduire une réclamation auprès de l&apos;Autorité de
        protection des données (autoriteprotectiondonnees.be).
      </p>
    </LegalPage>
  );
}
