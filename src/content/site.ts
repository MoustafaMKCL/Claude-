/**
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  CONTENU DU SITE — C'EST LE SEUL FICHIER À MODIFIER POUR LES TEXTES.     │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * Comment l'utiliser :
 *
 *  • TEXTES  — modifiez la valeur entre guillemets, sauvegardez, c'est en ligne.
 *  • IMAGES  — déposez votre fichier dans `public/images/` puis indiquez son
 *              chemin dans `src` (ex. `/images/hero.jpg`). Renseignez toujours
 *              `alt` : c'est ce que lisent Google et les lecteurs d'écran.
 *  • ICÔNES  — `icon` accepte les noms listés dans `src/components/ui/Icon.tsx`.
 *              L'éditeur vous propose la liste en autocomplétion.
 *  • TARIFS  — `price` est un nombre : `85` s'affiche « 85 € ».
 *
 * Les tailles d'images recommandées sont détaillées dans le README.
 */

import type { SiteContent } from "@/content/schema";

export const site: SiteContent = {
  /* ─────────────────────────────  IDENTITÉ & SEO  ────────────────────────── */
  meta: {
    name: "PWS Premium Workspaces",
    shortName: "PWS",
    tagline: "Domiciliation de société et coworking à Bruxelles",
    description:
      "Domiciliation d'entreprise, bureaux privatifs et espaces de coworking premium au cœur de Bruxelles. Adresse professionnelle, gestion du courrier et salles de réunion à partir de 70 € HT/mois.",
    url: "https://www.pws-workspaces.be",
    locale: "fr_BE",
    ogImage: {
      src: "/images/og-image.jpg",
      alt: "Espace de coworking PWS Premium Workspaces à Bruxelles",
    },
  },

  /* ────────────────────────────────  CONTACT  ────────────────────────────── */
  contact: {
    email: "info@pws-coworking.be",
    phone: "+32 2 555 12 34",
    phoneHref: "+3225551234",
    street: "Quai du Commerce 48",
    postalCode: "1000",
    city: "Bruxelles",
    country: "Belgique",
    geo: { latitude: 50.8582, longitude: 4.3475 },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Quai+du+Commerce+48%2C+1000+Bruxelles",
    // Pour régénérer : Google Maps › Partager › Intégrer une carte › copier le src de l'iframe.
    mapEmbedUrl:
      "https://www.google.com/maps?q=Quai%20du%20Commerce%2048%2C%201000%20Bruxelles&t=m&z=16&output=embed&hl=fr",
  },

  hours: [
    { days: "Lundi – Vendredi", hours: "8h00 – 19h00" },
    { days: "Samedi", hours: "9h00 – 13h00" },
    { days: "Dimanche", hours: "Fermé" },
    { days: "Bureaux privatifs", hours: "Accès 24h/24, 7j/7", highlight: true },
  ],

  /* ────────────────────────────────  NAVIGATION  ─────────────────────────── */
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Espaces", href: "#espaces" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "Localisation", href: "#localisation" },
    ],
    cta: { label: "Contact", href: "#contact" },
  },

  /* ──────────────────────────────────  HERO  ─────────────────────────────── */
  hero: {
    eyebrow: "Domiciliation de société et coworking",
    titleLead: "Votre espace professionnel",
    titleAccent: "au cœur de Bruxelles",
    description:
      "Bureaux, domiciliation et coworking pour entreprendre dans un environnement inspirant.",
    primaryCta: { label: "Réserver une visite", href: "#contact" },
    secondaryCta: { label: "Domicilier ma société", href: "#tarifs" },
    background: {
      src: "/images/hero.jpg",
      alt: "Salle de réunion lumineuse des espaces PWS à Bruxelles",
    },
    scrollHint: "Découvrir nos services",
  },

  /* ────────────────────────────────  SERVICES  ───────────────────────────── */
  services: {
    eyebrow: "Nos services",
    title: "Des solutions adaptées\nà votre ambition",
    items: [
      {
        icon: "mapPin",
        title: "Domiciliation d'entreprise",
        description:
          "Une adresse professionnelle stratégique à Bruxelles avec gestion du courrier. Renforcez votre crédibilité dès le premier jour.",
        image: {
          src: "/images/service-domiciliation.jpg",
          alt: "Espace d'accueil professionnel dédié à la domiciliation d'entreprise",
        },
        cta: { label: "En savoir plus", href: "#tarifs" },
      },
      {
        icon: "briefcase",
        title: "Bureaux privatifs",
        description:
          "Des espaces calmes et entièrement équipés pour votre équipe. Personnalisez votre bureau et concentrez-vous sur l'essentiel.",
        image: {
          src: "/images/service-bureaux.jpg",
          alt: "Bureau privatif équipé pour une équipe de plusieurs personnes",
        },
        cta: { label: "En savoir plus", href: "#espaces" },
      },
      {
        icon: "users",
        title: "Espace coworking",
        description:
          "Un environnement stimulant et flexible. Rencontrez d'autres professionnels, échangez des idées et développez votre réseau.",
        image: {
          src: "/images/service-coworking.jpg",
          alt: "Espace de coworking ouvert avec postes de travail partagés",
        },
        cta: { label: "En savoir plus", href: "#tarifs" },
      },
    ],
  },

  /* ───────────────────────────────  AVANTAGES  ───────────────────────────── */
  advantages: {
    eyebrow: "Nos avantages",
    title: "Pourquoi choisir PWS ?",
    description:
      "Tout ce dont vous avez besoin pour réussir, réuni en un seul lieu.",
    items: [
      {
        icon: "mapPin",
        title: "Emplacement stratégique",
        description:
          "Situé à Yser, au cœur de Bruxelles, avec un accès facile à tous les transports.",
      },
      {
        icon: "award",
        title: "Image premium",
        description:
          "Des espaces soignés qui reflètent le professionnalisme de votre entreprise.",
      },
      {
        icon: "refresh",
        title: "Contrats flexibles",
        description:
          "Pas d'engagement long terme. Adaptez votre espace selon vos besoins.",
      },
      {
        icon: "wifi",
        title: "Internet haut débit",
        description:
          "Fibre optique ultra-rapide et connexion sécurisée pour travailler sans limite.",
      },
      {
        icon: "presentation",
        title: "Salles de réunion",
        description:
          "Des espaces modernes et équipés pour vos présentations et réunions clients.",
      },
      {
        icon: "leaf",
        title: "Environnement productif",
        description:
          "Un cadre calme, lumineux et inspirant conçu pour la concentration.",
      },
    ],
  },

  /* ────────────────────────────────  GALERIE  ────────────────────────────── */
  gallery: {
    eyebrow: "Nos espaces",
    title: "Découvrez votre futur lieu de travail",
    caption:
      "Un hub entrepreneurial pensé pour l'excellence — design contemporain, confort absolu et technologies de pointe au cœur de Bruxelles.",
    slides: [
      {
        label: "Salle de réunion & Studio",
        icon: "presentation",
        image: {
          src: "/images/espace-salle-reunion.jpg",
          alt: "Salle de réunion équipée d'un studio d'enregistrement",
        },
      },
      {
        label: "Bureaux privatifs",
        icon: "briefcase",
        image: {
          src: "/images/espace-bureaux.jpg",
          alt: "Bureaux privatifs baignés de lumière naturelle",
        },
      },
      {
        label: "Espace coworking",
        icon: "users",
        image: {
          src: "/images/espace-coworking.jpg",
          alt: "Grand plateau de coworking avec postes de travail individuels",
        },
      },
      {
        label: "Studio podcast",
        icon: "mic",
        image: {
          src: "/images/espace-studio.jpg",
          alt: "Studio d'enregistrement podcast insonorisé",
        },
      },
      {
        label: "Fibre optique",
        icon: "wifi",
        image: {
          src: "/images/espace-connectivite.jpg",
          alt: "Espace de travail connecté en fibre optique",
        },
      },
    ],
  },

  /* ─────────────────────────────────  TARIFS  ────────────────────────────── */
  pricing: {
    eyebrow: "Nos solutions sur mesure",
    title: "Des formules adaptées\nà vos besoins",
    tabs: [
      {
        id: "domiciliation",
        label: "Domiciliation",
        icon: "mapPin",
        note: "Une adresse prestigieuse à Bruxelles pour valoriser votre image de marque.",
        plans: [
          {
            id: "domiciliation-essentiel",
            name: "Essentiel",
            badge: "Sans engagement",
            price: 85,
            currency: "€",
            period: "HT / mois",
            features: [
              "Domiciliation & siège social",
              "Réception & gestion du courrier",
              "Réception colis et recommandés",
              "Accès salle de réunion (conditions)",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
          },
          {
            id: "domiciliation-confort",
            name: "Confort",
            badge: "Engagement 6 mois",
            price: 75,
            strikethroughPrice: 85,
            currency: "€",
            period: "HT / mois",
            savings: "Économisez 12 %",
            features: [
              "Domiciliation & siège social",
              "Réception & gestion du courrier",
              "Réception colis et recommandés",
              "Accès salle de réunion (conditions)",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
          },
          {
            id: "domiciliation-premium",
            name: "Premium Annuel",
            badge: "Engagement 12 mois",
            price: 70,
            strikethroughPrice: 85,
            currency: "€",
            period: "HT / mois",
            savings: "Économisez 18 %",
            features: [
              "Domiciliation & siège social",
              "Réception & gestion du courrier",
              "Réception colis et recommandés",
              "Accès salle de réunion (conditions)",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
            featured: true,
            featuredLabel: "Meilleur tarif",
          },
        ],
      },
      {
        id: "coworking",
        label: "Coworking",
        icon: "users",
        note: "Un poste de travail flexible dans un espace pensé pour la concentration.",
        plans: [
          {
            id: "coworking-nomade",
            name: "Nomade",
            badge: "10 jours / mois",
            price: 149,
            currency: "€",
            period: "HT / mois",
            features: [
              "10 jours d'accès par mois",
              "Poste en open space",
              "Fibre optique & impressions",
              "Café et espace détente inclus",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
          },
          {
            id: "coworking-resident",
            name: "Résident",
            badge: "Illimité",
            price: 249,
            currency: "€",
            period: "HT / mois",
            features: [
              "Accès illimité en semaine",
              "Poste dédié et casier privatif",
              "4 h de salle de réunion / mois",
              "Réception du courrier",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
          },
          {
            id: "coworking-bureau",
            name: "Bureau privatif",
            badge: "Dès 2 postes",
            price: 420,
            currency: "€",
            period: "HT / mois",
            savings: "Accès 24h/24",
            features: [
              "Bureau fermé et personnalisable",
              "Accès 24h/24, 7j/7",
              "8 h de salle de réunion / mois",
              "Mobilier et ménage inclus",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
            featured: true,
            featuredLabel: "Le plus demandé",
          },
        ],
      },
      {
        id: "combo",
        label: "Coworking + Domiciliation",
        icon: "layers",
        note: "La formule complète : votre adresse et votre espace de travail réunis.",
        plans: [
          {
            id: "combo-start",
            name: "Start",
            badge: "Sans engagement",
            price: 219,
            strikethroughPrice: 234,
            currency: "€",
            period: "HT / mois",
            features: [
              "Domiciliation & siège social",
              "10 jours de coworking / mois",
              "Gestion complète du courrier",
              "2 h de salle de réunion / mois",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
          },
          {
            id: "combo-business",
            name: "Business",
            badge: "Engagement 6 mois",
            price: 299,
            strikethroughPrice: 324,
            currency: "€",
            period: "HT / mois",
            savings: "Économisez 8 %",
            features: [
              "Domiciliation & siège social",
              "Coworking illimité en semaine",
              "Poste dédié et casier privatif",
              "6 h de salle de réunion / mois",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
          },
          {
            id: "combo-signature",
            name: "Signature",
            badge: "Engagement 12 mois",
            price: 469,
            strikethroughPrice: 520,
            currency: "€",
            period: "HT / mois",
            savings: "Économisez 10 %",
            features: [
              "Domiciliation & siège social",
              "Bureau privatif 24h/24",
              "Accueil téléphonique personnalisé",
              "12 h de salle de réunion / mois",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
            featured: true,
            featuredLabel: "Tout inclus",
          },
        ],
      },
    ],
  },

  /* ──────────────────────────────  LOCALISATION  ─────────────────────────── */
  location: {
    eyebrow: "Localisation",
    title: "Nous trouver",
    cards: [
      {
        icon: "mapPin",
        title: "Adresse",
        lines: ["Quai du Commerce 48", "1000 Bruxelles, Belgique"],
      },
      {
        icon: "train",
        title: "Transports",
        lines: ["Métro Yser — 3 min à pied", "Tram 51 · Bus 58, 88"],
      },
      {
        icon: "clock",
        title: "Horaires",
        lines: [
          "Lun – Ven : 8h00 – 19h00",
          "Sam : 9h00 – 13h00",
          "Accès 24/7 (bureaux privatifs)",
        ],
      },
    ],
    mapOverlay: {
      title: "PWS Premium Workspaces",
      subtitle: "Quai du Commerce 48 · 1000 Bruxelles",
      ctaLabel: "Ouvrir dans Maps",
    },
  },

  /* ───────────────────────────────  APPEL FINAL  ─────────────────────────── */
  cta: {
    eyebrow: "Prêt à commencer ?",
    titleLead: "Donnez une nouvelle dimension",
    titleAccent: "à votre activité",
    description:
      "Rejoignez une communauté d'entrepreneurs ambitieux et travaillez dans un environnement à la hauteur de vos ambitions.",
    // Ces deux boutons déclenchent une vraie action. Remplacez `mailto:` par
    // l'URL de votre agenda en ligne (Calendly, Cal.com…) le jour où vous en
    // aurez un — le reste du code n'a pas à changer.
    primaryCta: {
      label: "Planifier une visite",
      href: "mailto:info@pws-coworking.be?subject=Demande%20de%20visite",
    },
    secondaryCta: { label: "Nous contacter", href: "tel:+3225551234" },
  },

  /* ──────────────────────────────  PIED DE PAGE  ─────────────────────────── */
  footer: {
    description:
      "Espaces de coworking premium au cœur de Bruxelles. Votre succès commence ici.",
    contactTitle: "Contact",
    hoursTitle: "Horaires",
    linksTitle: "Liens",
    links: [
      { label: "Nos services", href: "#services" },
      { label: "Nos espaces", href: "#espaces" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "Localisation", href: "#localisation" },
    ],
    legalLinks: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
    ],
    copyright: "© {year} PWS Premium Workspaces. Tous droits réservés.",
  },
};
