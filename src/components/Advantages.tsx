import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/content/site";

const { advantages } = site;

/**
 * Bloc sombre des arguments clés.
 *
 * Le contraste avec les sections blanches qui l'encadrent sert de respiration
 * dans la page. Le survol n'ajoute qu'une lueur verte et un éclaircissement de
 * la bordure : sur fond sombre, tout mouvement ample deviendrait vite bruyant.
 */
export function Advantages() {
  return (
    <Section tone="dark" aria-labelledby="advantages-title" className="overflow-hidden">
      {/* Halo vert diffus, ancré en haut de la section. */}
      <div aria-hidden className="bg-ink-glow absolute inset-0 -z-10" />
      <div aria-hidden className="bg-dot-grid absolute inset-0 -z-10 opacity-60" />

      <Container>
        <SectionHeading
          eyebrow={advantages.eyebrow}
          title={advantages.title}
          description={advantages.description}
          tone="dark"
          titleId="advantages-title"
        />

        <RevealGroup
          as="ul"
          stagger={0.08}
          className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {advantages.items.map((advantage) => (
            <RevealItem as="li" key={advantage.title} className="h-full">
              <article
                className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6
                           transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                           hover:-translate-y-1 hover:border-brand-500/35 hover:bg-white/[0.055] lg:p-7"
              >
                {/* Lueur révélée au survol, cadrée sur le coin supérieur gauche. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-12 -top-16 size-44 rounded-full bg-brand-500/20 opacity-0 blur-3xl
                             transition-opacity duration-500 group-hover:opacity-100"
                />

                <span
                  aria-hidden
                  className="relative inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-brand-400
                             transition-colors duration-500 group-hover:border-brand-500/40 group-hover:bg-brand-500/15 group-hover:text-brand-300"
                >
                  <Icon name={advantage.icon} className="size-[1.15rem]" />
                </span>

                <h3 className="relative mt-5 text-[0.9375rem] font-bold text-white">
                  {advantage.title}
                </h3>

                <p className="relative mt-2.5 text-[0.8125rem] leading-relaxed text-white/55">
                  {advantage.description}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
