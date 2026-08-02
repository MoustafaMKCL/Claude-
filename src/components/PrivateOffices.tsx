import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { fadeLeft, fadeRight, scaleIn } from "@/lib/motion";
import { cn, formatPrice, splitLines } from "@/lib/utils";

const { privateOffices: page } = site;

/**
 * Corps de la page « Bureaux privatifs ».
 *
 * Le rythme alterne texte et visuel : chaque bloc inverse le côté de son image,
 * ce qui évite l'effet de colonne monotone sur une page essentiellement
 * rédactionnelle. Toute la matière vient de `site.privateOffices`.
 */
export function PrivateOffices() {
  return (
    <>
      <PrivateOfficesHero />
      <PrivateOfficesIntro />
      <PrivateOfficesBlocks />
      <PrivateOfficesIncluded />
      <PrivateOfficesClosing />
    </>
  );
}

/* ──────────────────────────────────  Hero  ─────────────────────────────── */

function PrivateOfficesHero() {
  const { hero } = page;

  return (
    <section
      id="top"
      aria-labelledby="bureaux-title"
      className="relative isolate flex min-h-[68svh] items-end overflow-hidden bg-ink-950 pb-14 pt-[calc(var(--nav-height)+5rem)] sm:min-h-[74svh] sm:pb-20"
    >
      <Image
        src={hero.background.src}
        alt={hero.background.alt}
        fill
        priority
        sizes="100vw"
        quality={90}
        className="-z-10 object-cover object-center"
      />
      <div aria-hidden className="overlay-hero absolute inset-0 -z-10" />

      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-brand-400">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="bureaux-title"
              className="mt-4 text-[2.25rem] leading-[1.08] text-white sm:text-[3rem] lg:text-[3.5rem]"
            >
              {splitLines(hero.title).map((line, index) => (
                <span key={`${index}-${line}`} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-white/75 sm:text-base">
              {hero.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
              {/* Prix d'appel : l'information que le visiteur cherche en premier. */}
              <p className="glass flex items-baseline gap-2 rounded-full border border-white/20 px-5 py-3">
                <span className="text-[0.75rem] font-medium text-white/60">
                  {hero.priceFrom.prefix}
                </span>
                <span className="text-2xl font-extrabold tracking-[-0.03em] text-brand-400">
                  {formatPrice(hero.priceFrom.price)}
                  <span className="ml-0.5 text-lg">{hero.priceFrom.currency}</span>
                </span>
                <span className="text-[0.75rem] font-medium text-white/60">
                  {hero.priceFrom.period}
                </span>
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href={hero.primaryCta.href} variant="primary" size="lg" icon="arrowRight">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="glass" size="lg">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ────────────────────────────────  Chapô  ──────────────────────────────── */

function PrivateOfficesIntro() {
  return (
    <Section tone="light" className="pb-4 sm:pb-6 lg:pb-8">
      <Container>
        <RevealGroup as="div" stagger={0.1} className="mx-auto max-w-3xl space-y-6">
          {page.intro.map((paragraph, index) => (
            <RevealItem key={paragraph} as="div">
              <p
                className={cn(
                  "leading-relaxed",
                  // Le premier paragraphe sert de chapô : plus grand, plus sombre.
                  index === 0
                    ? "text-lg text-ink-900/80 sm:text-xl"
                    : "text-[0.9375rem] text-ink-900/60 sm:text-base",
                )}
              >
                {paragraph}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}

/* ──────────────────────────  Blocs texte + visuel  ─────────────────────── */

function PrivateOfficesBlocks() {
  return (
    <Section tone="light">
      <Container>
        <div className="flex flex-col gap-16 lg:gap-24">
          {page.blocks.map((block, index) => {
            // Un bloc sur deux inverse l'ordre des colonnes.
            const imageFirst = index % 2 === 1;

            return (
              <div
                key={block.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal
                  variants={imageFirst ? fadeRight : fadeLeft}
                  className={cn(imageFirst && "lg:order-2")}
                >
                  <h2 className="text-[1.625rem] leading-tight text-ink-900 sm:text-[2rem]">
                    {block.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {block.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[0.9375rem] leading-relaxed text-ink-900/60 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>

                <Reveal variants={scaleIn} className={cn(imageFirst && "lg:order-1")}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sand-100 shadow-card">
                    <Image
                      src={block.image.src}
                      alt={block.image.alt}
                      fill
                      sizes="(min-width: 1024px) 580px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────────  Services inclus  ─────────────────────────── */

function PrivateOfficesIncluded() {
  const { included } = page;

  return (
    <Section tone="dark" aria-labelledby="inclus-title" className="overflow-hidden">
      <div aria-hidden className="bg-ink-glow absolute inset-0 -z-10" />
      <div aria-hidden className="bg-dot-grid absolute inset-0 -z-10 opacity-60" />

      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brand-400">
              {included.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="inclus-title"
              className="mt-4 text-[2rem] leading-[1.12] text-white sm:text-[2.5rem]"
            >
              {included.title}
            </h2>
          </Reveal>
        </div>

        <RevealGroup
          as="ul"
          stagger={0.06}
          className="mx-auto mt-12 grid max-w-4xl gap-3 sm:mt-14 sm:grid-cols-2 lg:gap-4"
        >
          {included.items.map((item) => (
            <RevealItem as="li" key={item}>
              <div
                className="group flex h-full items-start gap-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4
                           transition-[background-color,border-color] duration-500
                           hover:border-brand-500/30 hover:bg-white/[0.055] sm:p-5"
              >
                <span
                  aria-hidden
                  className="mt-px inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300
                             transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white"
                >
                  <Icon name="check" className="size-3" strokeWidth={2.75} />
                </span>
                <span className="text-[0.875rem] leading-snug text-white/75">{item}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}

/* ────────────────────────────  Accroche finale  ────────────────────────── */

function PrivateOfficesClosing() {
  const { closing } = page;

  return (
    <Section tone="brand" flush className="overflow-hidden py-20 sm:py-24 lg:py-28">
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
            <h2 className="text-[2rem] leading-[1.12] text-white sm:text-[2.5rem] lg:text-[2.9rem]">
              {splitLines(closing.title).map((line, index) => (
                <span key={`${index}-${line}`} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-white/75 sm:text-base">
              {closing.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9">
              <Button href={closing.cta.href} variant="white" size="lg" icon="calendar">
                {closing.cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
