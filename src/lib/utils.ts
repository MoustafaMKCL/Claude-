import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne des classes Tailwind en résolvant les conflits.
 * `cn("px-4", condition && "px-6")` renvoie `px-6` quand la condition est vraie,
 * au lieu de laisser les deux classes se disputer la priorité.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Formate un prix pour l'affichage : `85` → `85`, `1234.5` → `1 234,50`. */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-BE", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Découpe un titre sur les retours à la ligne explicites (`\n`) du contenu,
 * pour permettre aux rédacteurs de contrôler la césure des grands titres.
 */
export function splitLines(title: string): string[] {
  return title.split("\n");
}
