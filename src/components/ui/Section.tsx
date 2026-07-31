import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";
import { cn, splitLines } from "@/lib/utils";

/* ───────────────────────────────  Section  ─────────────────────────────── */

type SectionTone = "light" | "muted" | "dark" | "brand";

const tones: Record<SectionTone, string> = {
  light: "bg-white text-ink-900",
  muted: "bg-sand-50 text-ink-900",
  dark: "bg-ink-900 text-white",
  brand: "bg-brand-gradient text-white",
};

interface SectionProps {
  children: ReactNode;
  /** Ancre de navigation (`#services`, `#tarifs`, …). */
  id?: string;
  tone?: SectionTone;
  className?: string;
  /** Retire le rythme vertical par défaut (sections plein écran). */
  flush?: boolean;
  "aria-labelledby"?: string;
}

/**
 * Enveloppe de section : impose le rythme vertical et le fond.
 *
 * Le rythme (`py-20` → `py-32`) est volontairement centralisé : c'est lui qui
 * donne au site sa respiration régulière d'une section à l'autre.
 */
export function Section({
  children,
  id,
  tone = "light",
  className,
  flush,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate w-full",
        tones[tone],
        !flush && "py-20 sm:py-24 lg:py-28",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

/* ───────────────────────────  SectionHeading  ──────────────────────────── */

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** `dark` inverse les couleurs de texte pour les fonds sombres. */
  tone?: "light" | "dark";
  align?: "center" | "left";
  /** Identifiant du titre, référencé par `aria-labelledby` de la section. */
  titleId?: string;
  /** Niveau de titre — `h2` par défaut ; passer à `h3` en sous-section. */
  as?: "h2" | "h3";
  className?: string;
}

/**
 * Bloc « sur-titre / titre / accroche » commun à toutes les sections.
 *
 * Centraliser ces trois lignes garantit que chaque section partage exactement
 * la même échelle typographique et les mêmes marges.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
  titleId,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const lines = splitLines(title);

  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Reveal>
        <p
          className={cn(
            "text-[0.6875rem] font-bold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-brand-400" : "text-brand-600",
          )}
        >
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <Heading
          id={titleId}
          className={cn(
            "mt-4 text-[2rem] leading-[1.12] sm:text-[2.5rem] lg:text-[2.9rem]",
            tone === "dark" ? "text-white" : "text-ink-900",
          )}
        >
          {/* Chaque `\n` du contenu devient une ligne : les rédacteurs
              contrôlent ainsi la césure des grands titres. */}
          {lines.map((line, index) => (
            <span key={`${index}-${line}`} className="block">
              {line}
            </span>
          ))}
        </Heading>
      </Reveal>

      {description ? (
        <Reveal delay={0.16} variants={fadeUp}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-[0.9375rem] leading-relaxed sm:text-base",
              tone === "dark" ? "text-white/60" : "text-ink-900/60",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
