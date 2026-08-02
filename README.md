# PWS Premium Workspaces

Site vitrine de **PWS Premium Workspaces** — domiciliation de société, bureaux
privatifs et coworking à Bruxelles.

Deux pages : l'accueil (`/`) et **Bureaux privatifs** (`/bureaux-privatifs`),
complétées par les mentions légales, la politique de confidentialité et
une page 404.

Next.js 15 (App Router) · TypeScript strict · Tailwind CSS 4 · Framer Motion ·
Lucide React.

---

## Démarrage

```bash
npm install
npm run dev          # http://localhost:3000
```

| Commande                     | Rôle                                              |
| ---------------------------- | ------------------------------------------------- |
| `npm run dev`                | Serveur de développement, rechargement à chaud    |
| `npm run build`              | Build de production                               |
| `npm start`                  | Sert le build de production                       |
| `npm run typecheck`          | Vérifie les types sans générer de fichiers        |
| `npm run lint`               | ESLint (règles Next.js + TypeScript)              |
| `npm run images:placeholders`| Régénère les gabarits d'images manquants          |

---

## ✍️ Modifier les textes

**Tout le contenu du site tient dans un seul fichier :
[`src/content/site.ts`](src/content/site.ts).**

Vous n'avez besoin d'ouvrir aucun autre fichier pour changer un titre, un
tarif, une adresse ou un horaire. Modifiez la valeur entre guillemets,
sauvegardez : la page se met à jour instantanément en mode `dev`.

```ts
hero: {
  titleLead: "Votre espace professionnel",   // ← ligne blanche
  titleAccent: "au cœur de Bruxelles",       // ← ligne verte
  description: "Bureaux, domiciliation et coworking…",
},
```

Quelques repères :

- **Retour à la ligne dans un grand titre** — insérez `\n` :
  `title: "Des formules adaptées\nà vos besoins"`.
- **Tarifs** — `price: 85` s'affiche « 85 € ». `strikethroughPrice: 95` ajoute
  un prix barré, `savings: "Économisez 12 %"` la pastille verte.
- **Mettre une offre en avant** — `featured: true` (une seule par onglet) passe
  la carte en fond sombre avec le bouton vert, et
  `featuredLabel: "Meilleur tarif"` écrit la pastille d'angle.
- **Année du copyright** — ne la touchez pas : `{year}` est remplacé
  automatiquement.
- **Icônes** — `icon: "mapPin"` accepte les noms listés dans
  [`src/components/ui/Icon.tsx`](src/components/ui/Icon.tsx). Votre éditeur
  vous propose la liste complète en autocomplétion.

> Si vous vous trompez de nom de champ ou d'icône, `npm run typecheck` vous le
> dit précisément — impossible de casser le site sans être prévenu.

---

## 📷 Changer les photos

Les visuels livrés sont des **gabarits** : des dégradés aux bonnes dimensions,
destinés à être remplacés par vos vraies photos.

### La méthode la plus simple

Déposez votre photo dans `public/images/` **en gardant exactement le même nom
de fichier**. Il n'y a rien d'autre à faire — aucun code à modifier.

| Fichier                        | Emplacement sur le site           | Dimensions conseillées |
| ------------------------------ | --------------------------------- | ---------------------- |
| `hero.jpg`                     | Bannière plein écran (accueil)    | 2400 × 1600 px         |
| `service-domiciliation.jpg`    | Carte « Domiciliation »           | 1200 × 900 px          |
| `service-bureaux.jpg`          | Carte « Bureaux privatifs »       | 1200 × 900 px          |
| `service-coworking.jpg`        | Carte « Espace coworking »        | 1200 × 900 px          |
| `espace-salle-reunion.jpg`     | Carrousel — vue 1                 | 1920 × 1080 px         |
| `espace-bureaux.jpg`           | Carrousel — vue 2                 | 1920 × 1080 px         |
| `espace-coworking.jpg`         | Carrousel — vue 3                 | 1920 × 1080 px         |
| `espace-studio.jpg`            | Carrousel — vue 4                 | 1920 × 1080 px         |
| `espace-connectivite.jpg`      | Carrousel — vue 5                 | 1920 × 1080 px         |
| `tarif-domiciliation.jpg`      | Bandeau — onglet Domiciliation    | 2100 × 900 px          |
| `tarif-coworking.jpg`          | Bandeau — onglet Coworking        | 2100 × 900 px          |
| `tarif-combo.jpg`              | Bandeau — onglet Coworking + Dom. | 2100 × 900 px          |
| `bureaux-hero.jpg`             | Bannière page Bureaux privatifs   | 2400 × 1400 px         |
| `bureaux-environnement.jpg`    | Bloc « Un environnement conçu… »  | 1400 × 1050 px         |
| `bureaux-flexibilite.jpg`      | Bloc « Des solutions flexibles »  | 1400 × 1050 px         |
| `og-image.jpg`                 | Aperçu de partage (réseaux)       | 1200 × 630 px          |

Le script de gabarits **n'écrase jamais une photo que vous avez déposée** : il
retient ce qu'il a lui-même généré et laisse le reste intact.

### Ajouter une photo sous un autre nom

1. Déposez le fichier dans `public/images/`.
2. Dans `src/content/site.ts`, indiquez son chemin et sa description :

```ts
image: {
  src: "/images/ma-photo.jpg",         // `public/` est la racine du chemin
  alt: "Salle de réunion vitrée du 3ᵉ étage",
},
```

`alt` n'est pas décoratif : c'est ce que lisent Google et les lecteurs
d'écran. Décrivez la photo en une phrase.

### Ajouter une vue au carrousel

Ajoutez un bloc à `gallery.slides` — la vignette, la pastille de légende et le
point de navigation apparaissent tout seuls :

```ts
{
  label: "Terrasse",
  icon: "leaf",
  image: { src: "/images/espace-terrasse.jpg", alt: "Terrasse extérieure" },
},
```

### Formats et poids

`next/image` convertit automatiquement vos JPEG en AVIF/WebP et génère les
tailles adaptées à chaque écran. Fournissez donc simplement un **JPEG de bonne
qualité** (2000 px de large suffisent, 500 Ko maximum) : l'optimisation est
prise en charge.

---

## 🏷️ Changer le logo

Le logo officiel est vectoriel (SVG), donc net à toutes les tailles. Il existe
en deux fichiers, à la racine de `public/` :

| Fichier                 | Utilisé pour                                              |
| ----------------------- | --------------------------------------------------------- |
| `logo-pws.svg`          | Version noire — barre de navigation sur fond clair        |
| `logo-pws-blanc.svg`    | Version blanche — navigation sur photo, et pied de page   |

Les deux sont rendus superposés et leur opacité s'inverse : la navigation passe
donc du blanc au noir **en fondu** quand la page défile, sans clignotement.

Pour changer le logo, remplacez ces deux fichiers **en conservant leurs noms**.
Si votre nouveau logo n'a pas le même rapport hauteur/largeur, ajustez le
coefficient dans `src/components/ui/Logo.tsx` (constante `width`, commentée).

Ces fichiers ont été produits à partir du `.ai` fourni ; la version noire est
le tracé plein, recadré au plus juste sur le dessin.

---

## 🗺️ Changer l'adresse et la carte

Tout est dans `contact`, dans `src/content/site.ts`. Pour régénérer l'URL de la
carte : Google Maps › **Partager** › **Intégrer une carte** › copiez la valeur
de `src` de l'iframe dans `mapEmbedUrl`.

La carte se charge à l'approche du champ de vision, et seulement si Google est
joignable : chez un visiteur équipé d'un bloqueur de traceurs, un plan stylisé
s'affiche à la place plutôt qu'un cadre d'erreur.

---

## Architecture

```
src/
├── app/
│   ├── layout.tsx              Police, métadonnées SEO, lien d'évitement
│   ├── page.tsx                Assemblage des sections de l'accueil
│   ├── globals.css             Thème Tailwind (couleurs, ombres, utilitaires)
│   ├── icon.svg                Favicon
│   ├── sitemap.ts robots.ts    Générés à partir du contenu
│   ├── not-found.tsx           Page 404 aux couleurs du site
│   ├── bureaux-privatifs/      Page dédiée aux bureaux privatifs
│   ├── mentions-legales/       ⚠️ à compléter avant mise en ligne
│   └── confidentialite/        ⚠️ à compléter avant mise en ligne
│
├── components/
│   ├── Navbar.tsx Hero.tsx Services.tsx Advantages.tsx
│   ├── Gallery.tsx Pricing.tsx OtherServices.tsx Location.tsx
│   ├── CTA.tsx Footer.tsx
│   ├── PrivateOffices.tsx      Corps de la page Bureaux privatifs
│   ├── StructuredData.tsx      Données Schema.org (SEO local)
│   ├── LegalPage.tsx           Gabarit des pages de texte légal
│   └── ui/                     Briques réutilisables
│       ├── Button.tsx Container.tsx Section.tsx
│       ├── Icon.tsx Logo.tsx MapFrame.tsx Reveal.tsx
│
├── content/
│   ├── site.ts                 ← LE FICHIER À ÉDITER
│   └── schema.ts               Types du contenu (aucun texte)
│
└── lib/
    ├── motion.ts               Réglages d'animation partagés
    └── utils.ts                `cn()`, formatage des prix
```

**Principe directeur** : le contenu ne connaît pas React, et les composants ne
contiennent aucun texte en dur. On peut donc confier `site.ts` à quelqu'un qui
ne code pas, sans risque pour la mise en page.

### Design system

Les jetons de design vivent dans le bloc `@theme` de
[`src/app/globals.css`](src/app/globals.css) : changer `--color-brand-600` y
repeint tous les boutons, pastilles et icônes du site d'un coup.

- **Vert de marque** : `brand-50` → `brand-950`
- **Noirs bleutés** : `ink-700` → `ink-950` (sections sombres, pied de page)
- **Gris clairs** : `sand-50` → `sand-200`
- **Ombres** : `shadow-soft`, `shadow-card`, `shadow-lift`, `shadow-brand`

### Animations

Toutes les apparitions passent par `<Reveal>` / `<RevealGroup>`
([`src/components/ui/Reveal.tsx`](src/components/ui/Reveal.tsx)), qui partagent
une même courbe et une même durée. Aucune animation ne dépasse 0,8 s ni ne
déplace un élément de plus de 32 px, et l'ensemble se désactive
automatiquement si le système du visiteur demande de réduire les animations.

---

## Accessibilité

- Navigation complète au clavier, anneau de focus visible partout.
- Lien « Aller au contenu principal » en première position.
- Carrousel pilotable aux flèches, vue courante annoncée aux lecteurs d'écran.
- Contrastes conformes AA, hiérarchie de titres continue (`h1` → `h2` → `h3`).
- `prefers-reduced-motion` respecté.

## SEO

- Métadonnées et Open Graph générés depuis `site.meta`.
- Données structurées `LocalBusiness` (adresse, horaires, tarifs) — visibles
  dans les résultats Google et Google Maps.
- `sitemap.xml` et `robots.txt` générés automatiquement.

---

## Avant la mise en ligne

1. Remplacer les gabarits de `public/images/` par les vraies photos.
2. Renseigner l'URL de production dans `site.meta.url` (utilisée par les
   métadonnées, le sitemap et les données structurées).
3. Vérifier l'adresse électronique et le téléphone dans `contact`.
4. Vérifier la grille tarifaire des trois onglets — les montants sont en
   **HTVA** (aucun prix TVAC n'est affiché sur le site).
5. **Compléter les pages `mentions-legales` et `confidentialite`** : numéro
   d'entreprise, TVA, hébergeur. Les emplacements sont marqués `[à compléter]`.
6. `npm run build` puis déployer (Vercel, Netlify ou tout hébergeur Node).
