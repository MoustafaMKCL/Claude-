import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MapFrame } from "@/components/ui/MapFrame";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/content/site";
import { fadeLeft, fadeRight } from "@/lib/motion";

const { location, contact, meta } = site;

/**
 * Adresse, accès et plan.
 *
 * Les deux colonnes entrent en sens inverse (informations depuis la gauche,
 * plan depuis la droite) : le regard converge naturellement vers le centre.
 */
export function Location() {
  return (
    <Section id="localisation" tone="light" aria-labelledby="location-title">
      <Container>
        <SectionHeading
          eyebrow={location.eyebrow}
          title={location.title}
          titleId="location-title"
        />

        <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* ── Informations pratiques ─────────────────────────────────────── */}
          <RevealGroup as="ul" stagger={0.1} className="flex flex-col gap-4">
            {location.cards.map((card) => (
              <RevealItem as="li" key={card.title} variants={fadeLeft}>
                <div
                  className="group flex items-start gap-4 rounded-2xl border border-ink-900/[0.07] bg-white p-5 shadow-soft
                             transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                             hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-card sm:p-6"
                >
                  <span
                    aria-hidden
                    className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600
                               transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white"
                  >
                    <Icon name={card.icon} className="size-[1.15rem]" />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[0.9375rem] font-bold text-ink-900">{card.title}</h3>
                    <div className="mt-1.5 space-y-0.5">
                      {card.lines.map((line) => (
                        <p key={line} className="text-[0.8125rem] leading-relaxed text-ink-900/60">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* ── Plan ───────────────────────────────────────────────────────── */}
          <Reveal variants={fadeRight}>
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-2xl border border-ink-900/[0.07] bg-sand-100 shadow-card">
              <MapFrame
                src={contact.mapEmbedUrl}
                title={`Plan d'accès — ${meta.name}, ${contact.street}, ${contact.postalCode} ${contact.city}`}
              />

              {/* Encart d'adresse posé sur le plan. */}
              <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-xl bg-ink-900/92 p-4 shadow-lift backdrop-blur-md">
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      aria-hidden
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400"
                    >
                      <Icon name="mapPin" className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[0.8125rem] font-bold text-white">
                        {location.mapOverlay.title}
                      </p>
                      <p className="truncate text-[0.6875rem] text-white/50">
                        {location.mapOverlay.subtitle}
                      </p>
                    </div>
                  </div>

                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-2 text-[0.75rem] font-semibold text-white
                               transition-colors duration-200 hover:bg-brand-600"
                  >
                    <span className="hidden sm:inline">{location.mapOverlay.ctaLabel}</span>
                    <span className="sm:hidden">Maps</span>
                    <Icon
                      name="arrowUpRight"
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
