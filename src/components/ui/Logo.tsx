import { cn } from "@/lib/utils";

interface LogoProps {
  /** `light` = posé sur fond sombre ou sur photo ; `dark` = sur fond clair. */
  tone?: "light" | "dark";
  className?: string;
  /** Masque la ligne « Premium Workspaces » (barre compacte, mobile). */
  compact?: boolean;
}

/**
 * Signature de marque : le monogramme « PWS » et sa ligne de soutien.
 *
 * Rendu en texte plutôt qu'en image : net à toutes les résolutions, lisible par
 * les moteurs de recherche, et il hérite naturellement de la couleur du parent.
 */
export function Logo({ tone = "light", className, compact }: LogoProps) {
  const isLight = tone === "light";

  return (
    <span className={cn("flex select-none flex-col leading-none", className)}>
      <span
        className={cn(
          "text-xl font-extrabold tracking-[-0.03em] transition-colors duration-300",
          isLight ? "text-white" : "text-ink-900",
        )}
      >
        PW
        <span className={isLight ? "text-brand-400" : "text-brand-600"}>S</span>
      </span>

      {!compact ? (
        <span
          className={cn(
            "mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300",
            isLight ? "text-white/55" : "text-ink-900/45",
          )}
        >
          Premium Workspaces
        </span>
      ) : null}
    </span>
  );
}
