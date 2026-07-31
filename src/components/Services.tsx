import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/content/site";

const { services } = site;

/**
 * Les trois offres principales, en cartes photo.
 *
 * Chaque carte se soulève au survol et sa photo s'agrandit très légèrement :
 * un seul geste, appliqué à trois propriétés, pour rester lisible.
 */
export function Services() {
  return (
    <Section id="services" tone="light" aria-labelledby="services-title">
      <Container>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          titleId="services-title"
        />

        <RevealGroup
          as="ul"
          stagger={0.12}
          className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {services.items.map((service) => (
            <RevealItem as="li" key={service.title} className="h-full">
              <article
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/[0.07] bg-white shadow-soft
                           transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                           hover:-translate-y-1.5 hover:border-ink-900/10 hover:shadow-lift"
              >
                {/* ── Visuel ─────────────────────────────────────────────── */}
                <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  {/* Dégradé discret : ancre la photo au corps de la carte. */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>

                {/* ── Corps ──────────────────────────────────────────────── */}
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <span
                    aria-hidden
                    className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600
                               transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white"
                  >
                    <Icon name={service.icon} className="size-[1.15rem]" />
                  </span>

                  <h3 className="mt-5 text-[1.0625rem] font-bold text-ink-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-900/60">
                    {service.description}
                  </p>

                  <Link
                    href={service.cta.href}
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-600
                               transition-colors duration-200 hover:text-brand-700"
                  >
                    {service.cta.label}
                    <Icon
                      name="arrowRight"
                      className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                    />
                    <span className="sr-only"> à propos de {service.title}</span>
                  </Link>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
