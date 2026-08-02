import { cn } from "@/lib/utils";
import { site } from "@/content/site";

interface LogoProps {
  /** `light` = posé sur fond sombre ou sur photo ; `dark` = sur fond clair. */
  tone?: "light" | "dark";
  className?: string;
  /** Hauteur du logo. Sa largeur suit le ratio d'origine (1,108 : 1). */
  height?: number;
}

/**
 * Logo officiel PWS.
 *
 * Deux fichiers vivent dans `public/` : `logo-pws.svg` (noir de la charte) et
 * `logo-pws-blanc.svg`. Les deux sont rendus superposés et l'on fait varier
 * leur opacité — la navigation passe ainsi du blanc au noir en fondu quand la
 * page défile, sans le clignotement qu'entraînerait un changement de `src`.
 *
 * Pour changer le logo : remplacez ces deux fichiers en conservant leur nom.
 */
export function Logo({ tone = "light", className, height = 46 }: LogoProps) {
  /** Ratio du fichier source : 412,88 × 372,56 points. */
  const width = Math.round(height * 1.108);
  const isLight = tone === "light";

  return (
    <span
      className={cn("relative block shrink-0", className)}
      style={{ width, height }}
      role="img"
      aria-label={site.meta.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element --
          `next/image` n'apporte rien sur un SVG (rien à redimensionner ni à
          ré-encoder) et exigerait d'activer `dangerouslyAllowSVG`. */}
      <img
        src="/logo-pws-blanc.svg"
        alt=""
        width={width}
        height={height}
        className={cn(
          "absolute inset-0 size-full object-contain transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isLight ? "opacity-100" : "opacity-0",
        )}
      />
      {/* eslint-disable-next-line @next/next/no-img-element -- voir ci-dessus. */}
      <img
        src="/logo-pws.svg"
        alt=""
        width={width}
        height={height}
        className={cn(
          "absolute inset-0 size-full object-contain transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isLight ? "opacity-0" : "opacity-100",
        )}
      />
    </span>
  );
}
