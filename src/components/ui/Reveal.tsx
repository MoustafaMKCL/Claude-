"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

/** Balises HTML autorisées comme racine d'une révélation. */
type RevealTag =
  | "div"
  | "section"
  | "article"
  | "li"
  | "ul"
  | "header"
  | "figure"
  | "span";

/**
 * `motion.create()` fabrique un nouveau composant à chaque appel. L'appeler
 * pendant le rendu remonterait le sous-arbre à chaque passe (animation
 * relancée, DOM recréé) : on mémorise donc les composants par balise.
 */
const motionCache = new Map<RevealTag, ReturnType<typeof motion.create>>();

function motionTag(tag: RevealTag) {
  const cached = motionCache.get(tag);
  if (cached) return cached;
  const created = motion.create(tag);
  motionCache.set(tag, created);
  return created;
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Variante d'entrée. `fadeUp` par défaut. */
  variants?: Variants;
  /** Retard avant le début de l'animation, en secondes. */
  delay?: number;
  as?: RevealTag;
}

/**
 * Anime son contenu à l'entrée dans le champ de vision, une seule fois.
 *
 * Unité de base de toutes les apparitions du site : le timing reste ainsi
 * cohérent d'une section à l'autre.
 */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motionTag(as);

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  /** Intervalle entre l'apparition de deux enfants, en secondes. */
  stagger?: number;
  as?: RevealTag;
}

/**
 * Version « groupe » de `Reveal` : orchestre l'entrée décalée de ses enfants.
 * Chaque enfant direct doit être un `<RevealItem>`.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  as = "div",
}: RevealGroupProps) {
  const MotionTag = motionTag(as);

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer(stagger)}
    >
      {children}
    </MotionTag>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: RevealTag;
}

/** Enfant d'un `<RevealGroup>`. Hérite du rythme défini par le groupe. */
export function RevealItem({
  children,
  className,
  variants = fadeUp,
  as = "div",
}: RevealItemProps) {
  const MotionTag = motionTag(as);

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
