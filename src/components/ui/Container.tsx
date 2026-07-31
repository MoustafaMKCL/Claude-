import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Élément HTML rendu — `div` par défaut, `header`/`nav`/`footer` au besoin. */
  as?: ElementType;
}

/**
 * Gouttière horizontale unique du site.
 *
 * Toutes les sections partagent cette largeur maximale : c'est ce qui donne
 * l'impression d'un alignement parfait d'un bloc à l'autre. Ne pas définir de
 * `max-w-*` ailleurs — modifier la valeur ici la propage à toute la page.
 */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[80rem] px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
