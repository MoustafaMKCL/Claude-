import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/content/site";

const { otherServices } = site;

/**
 * Les services assurés par les partenaires de PWS.
 *
 * Deux cartes larges plutôt que la grille à trois colonnes des sections
 * précédentes : les descriptions sont longues, et cette respiration signale
 * qu'il s'agit d'un accompagnement, non d'une offre d'espace.
 */
export function OtherServices() {
  return (
    <Section id="autres-services" tone="light" aria-labelledby="other-services-title">
      <Container>
        <SectionHeading
          eyebrow={otherServices.eyebrow}
          title={otherServices.title}
          description={otherServices.description}
          titleId="other-services-title"
        />

        <RevealGroup
          as="ul"
          stagger={0.12}
          className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-2 lg:gap-6"
        >
          {otherServices.items.map((item) => (
            <RevealItem as="li" key={item.title} className="h-full">
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/[0.07] bg-white p-7 shadow-soft
                           transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                           hover:-translate-y-1.5 hover:border-brand-500/25 hover:shadow-card lg:p-9"
              >
                {/* Lueur verte révélée au survol, comme sur les cartes sombres. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-brand-500/[0.07] opacity-0 blur-3xl
                             transition-opacity duration-500 group-hover:opacity-100"
                />

                <span
                  aria-hidden
                  className="relative inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600
                             transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white"
                >
                  <Icon name={item.icon} className="size-5" />
                </span>

                <h3 className="relative mt-6 text-lg font-bold text-ink-900">{item.title}</h3>

                <p className="relative mt-3.5 text-sm leading-relaxed text-ink-900/60">
                  {item.description}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
