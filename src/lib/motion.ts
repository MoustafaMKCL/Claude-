import type { Transition, Variants } from "framer-motion";

/**
 * Réglages d'animation partagés.
 *
 * Parti pris : des mouvements courts et amortis. Aucune animation ne dépasse
 * 0,8 s, aucune ne déplace un élément de plus de 32 px — l'objectif est de
 * guider le regard, jamais de le capturer.
 */

/** Courbe d'accélération maison, identique à `--ease-premium` en CSS. */
export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export const transition: Transition = {
  duration: 0.6,
  ease: EASE_PREMIUM,
};

export const transitionSlow: Transition = {
  duration: 0.8,
  ease: EASE_PREMIUM,
};

/** Marge de déclenchement : l'élément s'anime un peu avant d'être visible. */
export const viewport = { once: true, margin: "-80px" } as const;

/** Apparition depuis le bas — la variante par défaut du site. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition },
};

/** Apparition sans déplacement, pour les grands blocs (images, cartes). */
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition },
};

/** Apparition latérale, utilisée par les colonnes de la section Localisation. */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition },
};

/** Léger agrandissement, réservé aux visuels mis en avant. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: transitionSlow },
};

/**
 * Conteneur qui décale l'apparition de ses enfants.
 * `staggerContainer(0.08)` fait entrer les cartes l'une après l'autre.
 */
export function staggerContainer(stagger = 0.1, delayChildren = 0.05): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}
