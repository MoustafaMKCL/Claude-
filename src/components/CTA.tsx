import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { fadeUp } from "@/lib/motion";

const { cta } = site;

/**
 * Bandeau d'appel à l'action.
 *
 * Seul aplat vert de la page : il doit rester unique pour conserver sa force.
 * Il porte l'ancre `#contact`, cible du bouton de la barre de navigation.
 */
export function CTA() {
  return (
    <Section
      id="contact"
      tone="brand"
      flush
      aria-labelledby="cta-title"
      className="overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Voiles décoratifs : deux halos très diffus pour éviter l'aplat mort. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 size-[26rem] rounded-full bg-brand-300/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-16 size-[30rem] rounded-full bg-brand-900/30 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-white/70">
              {cta.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2
              id="cta-title"
              className="mt-4 text-[2rem] leading-[1.12] text-white sm:text-[2.5rem] lg:text-[2.9rem]"
            >
              <span className="block">{cta.titleLead}</span>
              <span className="block">{cta.titleAccent}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16} variants={fadeUp}>
            <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-white/75 sm:text-base">
              {cta.description}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Button
                href={cta.primaryCta.href}
                variant="white"
                size="lg"
                icon="calendar"
                className="w-full sm:w-auto"
              >
                {cta.primaryCta.label}
              </Button>
              <Button
                href={cta.secondaryCta.href}
                variant="outlineLight"
                size="lg"
                className="w-full sm:w-auto"
              >
                {cta.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
