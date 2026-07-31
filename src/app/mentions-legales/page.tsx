import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales de ${site.meta.name} : éditeur, hébergement, propriété intellectuelle et droit applicable.`,
  robots: { index: false, follow: true },
};

const { meta, contact } = site;

/**
 * Gabarit de mentions légales.
 *
 * ⚠️ À compléter avec vos données réelles (numéro d'entreprise, TVA, hébergeur)
 * avant la mise en ligne : les champs entre crochets sont des emplacements.
 */
export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updatedAt="1ᵉʳ janvier 2026">
      <h2>Éditeur du site</h2>
      <p>
        <strong>{meta.name}</strong>
        <br />
        {contact.street}, {contact.postalCode} {contact.city}, {contact.country}
        <br />
        Numéro d&apos;entreprise (BCE) : [à compléter]
        <br />
        Numéro de TVA : [à compléter]
        <br />
        Courriel : <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <br />
        Téléphone : <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
      </p>

      <h2>Directeur de la publication</h2>
      <p>[Nom du représentant légal]</p>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par [nom de l&apos;hébergeur], [adresse de
        l&apos;hébergeur].
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site — textes, photographies,
        identité visuelle et code source — est protégé par le droit
        d&apos;auteur. Toute reproduction ou représentation, totale ou
        partielle, sans autorisation écrite préalable est interdite.
      </p>

      <h2>Limitation de responsabilité</h2>
      <p>
        Les informations publiées sur ce site sont fournies à titre indicatif et
        peuvent évoluer. {meta.name} met tout en œuvre pour en assurer
        l&apos;exactitude mais ne saurait être tenu responsable des erreurs,
        omissions ou indisponibilités temporaires du service.
      </p>

      <h2>Tarifs</h2>
      <p>
        Les tarifs affichés s&apos;entendent hors taxes et par mois. Ils ne
        constituent pas une offre contractuelle : seul le contrat signé entre
        les parties fait foi.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Le présent site est soumis au droit belge. Tout litige relève de la
        compétence exclusive des tribunaux de l&apos;arrondissement judiciaire
        de Bruxelles.
      </p>
    </LegalPage>
  );
}
