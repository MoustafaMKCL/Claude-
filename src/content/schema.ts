/**
 * Schéma de contenu du site.
 *
 * Ce fichier décrit *la forme* des données — il n'y a aucun texte ici.
 * Tout le contenu réel (textes, images, tarifs, coordonnées) se trouve dans
 * `src/content/site.ts`, qui est le seul fichier à éditer au quotidien.
 *
 * TypeScript vérifie la cohérence des deux : si vous oubliez un champ ou
 * utilisez un nom d'icône inexistant, `npm run typecheck` vous le signale.
 */

import type { IconName } from "@/components/ui/Icon";

/** Un visuel du site. `src` pointe vers un fichier de `public/`. */
export interface ImageAsset {
  /** Chemin public, ex. `/images/hero.jpg` (le dossier `public/` est la racine). */
  src: string;
  /** Description pour les lecteurs d'écran et le SEO. Jamais vide. */
  alt: string;
}

/** Un lien d'action (bouton, entrée de menu, lien de pied de page). */
export interface LinkItem {
  label: string;
  /** Ancre interne (`#tarifs`), page interne (`/mentions-legales`) ou URL. */
  href: string;
  /** Ouvre dans un nouvel onglet. */
  external?: boolean;
}

/** Le triptyque « sur-titre / titre / description » commun à chaque section. */
export interface SectionIntro {
  /** Petit label en capitales au-dessus du titre, ex. « NOS SERVICES ». */
  eyebrow: string;
  /** Titre principal. Utilisez `\n` pour forcer un retour à la ligne. */
  title: string;
  /** Accroche optionnelle sous le titre. */
  description?: string;
}

export interface SiteMeta {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  /** URL canonique en production, sans slash final. */
  url: string;
  locale: string;
  /** Visuel de partage (Open Graph / Twitter), 1200×630 recommandé. */
  ogImage: ImageAsset;
}

export interface ContactInfo {
  email: string;
  phone: string;
  /** Numéro au format international pour le lien `tel:`, ex. `+3225551234`. */
  phoneHref: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  /** Coordonnées GPS, utilisées par la carte et les données structurées. */
  geo: { latitude: number; longitude: number };
  /** Lien « Itinéraire » ouvert au clic sur la carte. */
  mapsUrl: string;
  /** URL d'intégration de la carte (iframe). Voir README pour la générer. */
  mapEmbedUrl: string;
}

export interface OpeningHour {
  days: string;
  hours: string;
  /** Met la ligne en avant (ex. « Accès 24/7 »). */
  highlight?: boolean;
}

export interface NavContent {
  links: LinkItem[];
  cta: LinkItem;
}

export interface HeroContent {
  eyebrow: string;
  /** Première partie du titre, en blanc. */
  titleLead: string;
  /** Seconde partie du titre, mise en vert. */
  titleAccent: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  background: ImageAsset;
  /** Libellé de l'indicateur de défilement (lu par les lecteurs d'écran). */
  scrollHint: string;
}

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
  image: ImageAsset;
  cta: LinkItem;
}

export interface ServicesContent extends SectionIntro {
  items: ServiceItem[];
}

export interface AdvantageItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface AdvantagesContent extends SectionIntro {
  items: AdvantageItem[];
}

export interface GallerySlide {
  /** Libellé affiché sur la vignette et dans la pastille de légende. */
  label: string;
  icon: IconName;
  image: ImageAsset;
}

export interface GalleryContent extends SectionIntro {
  /** Paragraphe affiché sous le carrousel. */
  caption: string;
  slides: GallerySlide[];
}

export interface PricingPlan {
  /** Identifiant stable, utilisé comme clé React et ancre. */
  id: string;
  name: string;
  /** Pastille au-dessus du nom, ex. « SANS ENGAGEMENT ». */
  badge?: string;
  price: number;
  currency: string;
  /** Ex. « HT / mois ». */
  period: string;
  /** Prix barré affiché à côté du prix courant. */
  strikethroughPrice?: number;
  /** Argument d'économie, ex. « Économisez 30 % ». */
  savings?: string;
  features: string[];
  cta: LinkItem;
  /** Une seule offre par onglet devrait être mise en avant. */
  featured?: boolean;
  /** Pastille d'angle de l'offre mise en avant, ex. « MEILLEUR TARIF ». */
  featuredLabel?: string;
}

export interface PricingTab {
  id: string;
  label: string;
  icon: IconName;
  /** Précision affichée sous les onglets. */
  note?: string;
  /** Bandeau illustrant l'offre, affiché au-dessus des cartes. */
  image: ImageAsset;
  plans: PricingPlan[];
}

export interface PricingContent extends SectionIntro {
  tabs: PricingTab[];
}

export interface LocationCard {
  icon: IconName;
  title: string;
  /** Une ligne par élément. */
  lines: string[];
}

export interface LocationContent extends SectionIntro {
  cards: LocationCard[];
  /**
   * Encart posé sur le plan. Le bouton pointe toujours vers `contact.mapsUrl` —
   * seul son libellé se paramètre ici, pour éviter deux URL à tenir à jour.
   */
  mapOverlay: { title: string; subtitle: string; ctaLabel: string };
}

/* ─────────────────────────  Section « Autres services »  ────────────────── */

export interface OtherServiceItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface OtherServicesContent extends SectionIntro {
  items: OtherServiceItem[];
}

/* ──────────────────────────  Page « Bureaux privatifs »  ─────────────────── */

/** Un bloc « titre + paragraphes + visuel » de la page bureaux privatifs. */
export interface PrivateOfficesBlock {
  title: string;
  paragraphs: string[];
  image: ImageAsset;
}

export interface PrivateOfficesContent {
  /** Chemin de la page. Sert aussi d'entrée de navigation et de sitemap. */
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    /** Prix d'appel affiché en pastille, ex. « À partir de 500 € ». */
    priceFrom: { prefix: string; price: number; currency: string; period: string };
    background: ImageAsset;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
  };
  /** Paragraphes d'introduction, avant les blocs illustrés. */
  intro: string[];
  blocks: PrivateOfficesBlock[];
  included: { eyebrow: string; title: string; items: string[] };
  closing: { title: string; description: string; cta: LinkItem };
}

export interface CtaContent {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
}

export interface FooterContent {
  description: string;
  contactTitle: string;
  hoursTitle: string;
  linksTitle: string;
  links: LinkItem[];
  legalLinks: LinkItem[];
  /** `{year}` est remplacé par l'année courante. */
  copyright: string;
}

export interface SiteContent {
  meta: SiteMeta;
  contact: ContactInfo;
  hours: OpeningHour[];
  nav: NavContent;
  hero: HeroContent;
  services: ServicesContent;
  advantages: AdvantagesContent;
  gallery: GalleryContent;
  pricing: PricingContent;
  otherServices: OtherServicesContent;
  location: LocationContent;
  cta: CtaContent;
  footer: FooterContent;
  /** Contenu de la page dédiée `/bureaux-privatifs`. */
  privateOffices: PrivateOfficesContent;
}
