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
      { label: "Bureaux privatifs", href: "/bureaux-privatifs" },
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
        image: {
          src: "/images/tarif-domiciliation.jpg",
          alt: "Accueil et gestion du courrier des sociétés domiciliées chez PWS",
        },
        plans: [
          {
            id: "domiciliation-essentiel",
            name: "Essentiel",
            badge: "Sans engagement",
            price: 85,
            currency: "€",
            period: "HTVA / mois",
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
            period: "HTVA / mois",
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
            period: "HTVA / mois",
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
        image: {
          src: "/images/tarif-coworking.jpg",
          alt: "Plateau de coworking lumineux avec postes de travail partagés",
        },
        plans: [
          {
            id: "coworking-essentiel",
            name: "Essentiel",
            badge: "Sans engagement",
            price: 165,
            currency: "€",
            period: "HTVA / mois",
            features: [
              "Accès à l'espace de coworking",
              "Fibre optique et impressions",
              "Cuisine équipée et espace détente",
              "Accès salle de réunion (conditions)",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
          },
          {
            id: "coworking-confort",
            name: "Confort",
            badge: "Engagement 6 mois",
            price: 140,
            strikethroughPrice: 165,
            currency: "€",
            period: "HTVA / mois",
            savings: "Soit 840 € par semestre",
            features: [
              "Accès à l'espace de coworking",
              "Fibre optique et impressions",
              "Cuisine équipée et espace détente",
              "Accès salle de réunion (conditions)",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
          },
          {
            id: "coworking-premium",
            name: "Premium Annuel",
            badge: "Engagement 12 mois",
            price: 120,
            strikethroughPrice: 165,
            currency: "€",
            period: "HTVA / mois",
            savings: "Soit 1 440 € par an",
            features: [
              "Accès à l'espace de coworking",
              "Fibre optique et impressions",
              "Cuisine équipée et espace détente",
              "Accès salle de réunion (conditions)",
            ],
            cta: { label: "Choisir cette formule", href: "#contact" },
            featured: true,
            featuredLabel: "Meilleur tarif",
          },
        ],
      },
      {
        id: "combo",
        label: "Coworking + Domiciliation",
        icon: "layers",
        note: "La formule complète : votre adresse et votre espace de travail réunis.",
        image: {
          src: "/images/tarif-combo.jpg",
          alt: "Espace de travail et adresse professionnelle réunis au sein de PWS",
        },
        plans: [
          {
            id: "combo-start",
            name: "Start",
            badge: "Sans engagement",
            price: 219,
            strikethroughPrice: 234,
            currency: "€",
            period: "HTVA / mois",
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
            period: "HTVA / mois",
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
            period: "HTVA / mois",
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

  /* ─────────────────────────────  AUTRES SERVICES  ───────────────────────── */
  otherServices: {
    eyebrow: "Autres services",
    title: "Un écosystème d'experts\nà votre service",
    description:
      "Premium WorkSpaces s'entoure de spécialistes pour catalyser et soutenir la croissance de votre structure à chaque étape de son développement.",
    items: [
      {
        icon: "building",
        title: "Création de sociétés",
        description:
          "Bénéficiez d'un accompagnement intégral pour le lancement de votre activité, allant du choix de la structure juridique adéquate à la prise en charge des démarches légales et administratives, complété par un suivi rigoureux post-création.",
      },
      {
        icon: "calculator",
        title: "Comptabilité & fiscalité",
        description:
          "Confiez-nous la gestion externalisée de votre comptabilité, l'établissement de vos déclarations TVA, la conception de vos bilans et reportings, ainsi que l'optimisation stratégique de votre fiscalité.",
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
      { label: "Bureaux privatifs", href: "/bureaux-privatifs" },
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

  /* ─────────────────────  PAGE DÉDIÉE « BUREAUX PRIVATIFS »  ─────────────── */
  privateOffices: {
    slug: "/bureaux-privatifs",
    navLabel: "Bureaux privatifs",
    metaTitle: "Bureaux privatifs à Bruxelles",
    metaDescription:
      "Bureaux privatifs modernes, élégants et entièrement équipés au cœur de Bruxelles, à partir de 500 € HTVA par mois. Confidentialité, confort et flexibilité pour indépendants, professions libérales et entreprises.",

    hero: {
      eyebrow: "Bureaux privatifs",
      title: "Votre bureau,\nà votre image",
      tagline:
        "Un espace de travail dédié, alliant confidentialité, confort et flexibilité, au cœur de Bruxelles.",
      priceFrom: {
        prefix: "À partir de",
        price: 500,
        currency: "€",
        period: "HTVA / mois",
      },
      background: {
        src: "/images/bureaux-hero.jpg",
        alt: "Bureau privatif moderne et lumineux des espaces PWS à Bruxelles",
      },
      primaryCta: { label: "Réserver une visite", href: "/#contact" },
      secondaryCta: { label: "Voir toutes les formules", href: "/#tarifs" },
    },

    intro: [
      "Chez Premium WorkSpaces, nous mettons à votre disposition des bureaux privatifs modernes, élégants et entièrement équipés, pensés pour les entrepreneurs, indépendants, professions libérales et entreprises qui recherchent un environnement professionnel à la hauteur de leurs ambitions.",
      "Que vous soyez seul ou en équipe, vous bénéficiez d'un espace de travail dédié, alliant confidentialité, confort et flexibilité, au cœur de Bruxelles.",
      "Parce que votre bureau est bien plus qu'un simple lieu de travail, il devient le reflet de votre entreprise.",
    ],

    blocks: [
      {
        title: "Un environnement conçu pour votre réussite",
        paragraphs: [
          "Nos bureaux offrent un cadre de travail calme, lumineux et fonctionnel afin de favoriser la concentration, la productivité et les échanges professionnels.",
          "Profitez d'une adresse de prestige, d'espaces communs soignés et de tous les services indispensables au développement de votre activité.",
          "Vous vous concentrez sur votre entreprise, nous nous occupons du reste.",
        ],
        image: {
          src: "/images/bureaux-environnement.jpg",
          alt: "Bureau privatif calme et lumineux propice à la concentration",
        },
      },
      {
        title: "Des solutions flexibles",
        paragraphs: [
          "Que vous recherchiez un bureau pour quelques mois ou dans une perspective à plus long terme, nous vous proposons des formules adaptées à vos besoins.",
          "Nos espaces évoluent avec votre activité afin de vous offrir la flexibilité nécessaire à chaque étape de votre croissance.",
        ],
        image: {
          src: "/images/bureaux-flexibilite.jpg",
          alt: "Bureau modulable pouvant accueillir une équipe en croissance",
        },
      },
    ],

    included: {
      eyebrow: "Tout est compris",
      title: "Des services inclus",
      items: [
        "Bureau privatif entièrement équipé",
        "Internet haut débit sécurisé",
        "Accès aux espaces communs",
        "Cuisine équipée et espaces détente",
        "Salle de réunion (selon formule)",
        "Réception et gestion du courrier",
        "Domiciliation du siège social (en option ou incluse selon l'offre)",
        "Accès sécurisé",
        "Charges comprises",
      ],
    },

    closing: {
      title: "Plus qu'un bureau,\nun véritable cadre professionnel",
      description:
        "Venez découvrir nos bureaux privatifs et projetez-vous dans l'espace qui portera la prochaine étape de votre activité.",
      cta: { label: "Planifier une visite", href: "/#contact" },
    },
  },
};
