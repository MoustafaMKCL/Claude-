import slots from "@/content/image-slots.json";

/**
 * Un emplacement d'image du site.
 *
 * La liste vit dans `src/content/image-slots.json` — un JSON plutôt qu'un
 * fichier TypeScript parce qu'elle est lue à la fois par l'application
 * (page d'administration) et par le script Node de génération des gabarits.
 * Une seule source de vérité, donc aucun risque de divergence entre les
 * dimensions annoncées dans l'admin et celles réellement produites.
 */
export interface ImageSlot {
  /** Nom du fichier dans `public/images/`. Sert d'identifiant. */
  file: string;
  /** Regroupement affiché dans l'admin, ex. « Accueil · Services ». */
  section: string;
  /** Description de l'emplacement, ex. « Bannière plein écran ». */
  label: string;
  width: number;
  height: number;
  /** Teinte du gabarit généré (0–360). Ignoré par l'admin. */
  hue: number;
  /** Texte inscrit sur le gabarit. Vide = gabarit purement graphique. */
  placeholderLabel: string;
  /** Assombrissement du gabarit. Ignoré par l'admin. */
  shade?: number;
}

export const imageSlots = slots as ImageSlot[];

/** Retrouve un emplacement par nom de fichier. */
export function findSlot(file: string): ImageSlot | undefined {
  return imageSlots.find((slot) => slot.file === file);
}

/** Regroupe les emplacements par section, dans l'ordre du fichier. */
export function groupSlotsBySection(): { section: string; slots: ImageSlot[] }[] {
  const groups: { section: string; slots: ImageSlot[] }[] = [];

  for (const slot of imageSlots) {
    const last = groups.at(-1);
    if (last && last.section === slot.section) last.slots.push(slot);
    else groups.push({ section: slot.section, slots: [slot] });
  }

  return groups;
}
