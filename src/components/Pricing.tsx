"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/content/site";
import type { PricingPlan } from "@/content/schema";
import { EASE_PREMIUM } from "@/lib/motion";
import { cn, formatPrice } from "@/lib/utils";

const { pricing } = site;

/**
 * Grille tarifaire à onglets.
 *
 * Un seul onglet est visible à la fois ; le changement se fait par fondu court
 * plutôt que par glissement, pour que l'œil reste sur les prix. La pastille
 * verte de l'onglet actif se déplace avec `layoutId` — c'est Framer Motion qui
 * interpole sa position, aucun calcul manuel n'est nécessaire.
 */
export function Pricing() {
  const [activeTabId, setActiveTabId] = useState(pricing.tabs[0]?.id ?? "");
  const activeTab = pricing.tabs.find((tab) => tab.id === activeTabId) ?? pricing.tabs[0];

  if (!activeTab) return null;

  return (
    <Section id="tarifs" tone="muted" aria-labelledby="pricing-title">
      <Container>
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          titleId="pricing-title"
        />

        {/* ── Onglets ──────────────────────────────────────────────────────── */}
        <Reveal delay={0.12} className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Type de formule"
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-ink-900/[0.07] bg-white p-1.5 shadow-soft"
          >
            {pricing.tabs.map((tab) => {
              const isActive = tab.id === activeTab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`onglet-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panneau-${tab.id}`}
                  onClick={() => setActiveTabId(tab.id)}
                  className={cn(
                    "relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.8125rem] font-semibold transition-colors duration-300 sm:px-5",
                    isActive ? "text-white" : "text-ink-900/60 hover:text-ink-900",
                  )}
                >
                  {/* La pastille est simplement `absolute` : un `-z-10` la
                      ferait passer derrière le fond blanc du conteneur (qui ne
                      crée pas de contexte d'empilement). C'est le contenu qui
                      remonte au-dessus d'elle via `z-10`. */}
                  {isActive ? (
                    <motion.span
                      layoutId="pricing-tab-pill"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-brand-600 shadow-brand"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  ) : null}
                  <Icon name={tab.icon} className="relative z-10 size-4 shrink-0" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ── Précision de l'onglet actif ──────────────────────────────────── */}
        <div className="mt-5 flex min-h-[2.5rem] justify-center">
          <AnimatePresence mode="wait">
            {activeTab.note ? (
              <motion.p
                key={activeTab.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: EASE_PREMIUM }}
                className="max-w-xl text-center text-sm text-ink-900/55"
              >
                {activeTab.note}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>

        {/* ── Offres ───────────────────────────────────────────────────────── */}
        <div
          role="tabpanel"
          id={`panneau-${activeTab.id}`}
          aria-labelledby={`onglet-${activeTab.id}`}
        >
          {/* Bandeau illustrant l'offre sélectionnée. Volontairement très large
              (21:9) : il rythme la section sans repousser les prix hors écran. */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab.id}-visuel`}
              initial={{ opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE_PREMIUM }}
              className="relative mt-8 aspect-[2/1] w-full overflow-hidden rounded-2xl bg-ink-900 shadow-card sm:aspect-[3/1] lg:aspect-[32/9]"
            >
              <Image
                src={activeTab.image.src}
                alt={activeTab.image.alt}
                fill
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.ul
              key={activeTab.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: EASE_PREMIUM }}
              className="mt-6 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            >
              {activeTab.plans.map((plan, planIndex) => (
                <motion.li
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.06 * planIndex,
                    ease: EASE_PREMIUM,
                  }}
                  className={cn("h-full", plan.featured && "md:col-span-2 lg:col-span-1")}
                >
                  <PlanCard plan={plan} />
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}

/* ────────────────────────────────  Carte  ──────────────────────────────── */

/**
 * Carte d'offre.
 *
 * L'offre mise en avant (`featured`) inverse le contraste : fond sombre, texte
 * clair, bouton vert. C'est le seul écart de traitement — les dimensions et le
 * rythme interne restent strictement identiques pour que la comparaison des
 * prix reste honnête.
 */
function PlanCard({ plan }: { plan: PricingPlan }) {
  const featured = Boolean(plan.featured);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 lg:p-8",
        "transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        featured
          ? "bg-ink-900 text-white shadow-lift ring-1 ring-brand-500/30 hover:-translate-y-1.5 hover:ring-brand-500/60 lg:-my-3 lg:py-11"
          : "border border-ink-900/[0.07] bg-white text-ink-900 shadow-soft hover:-translate-y-1.5 hover:border-ink-900/10 hover:shadow-card",
      )}
    >
      {featured ? (
        <>
          {/* Lueur verte du coin supérieur, propre à l'offre mise en avant. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-brand-500/20 blur-3xl"
          />
          {plan.featuredLabel ? (
            <span className="absolute right-0 top-0 rounded-bl-2xl bg-brand-500 px-3.5 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-white">
              {plan.featuredLabel}
            </span>
          ) : null}
        </>
      ) : null}

      {/* ── En-tête ────────────────────────────────────────────────────────── */}
      {plan.badge ? (
        <span
          className={cn(
            "relative inline-flex w-fit rounded-full px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.12em]",
            featured ? "bg-white/10 text-brand-300" : "bg-sand-100 text-ink-900/50",
          )}
        >
          {plan.badge}
        </span>
      ) : null}

      <h3
        className={cn(
          "relative mt-4 text-xl font-bold",
          featured ? "text-white" : "text-ink-900",
        )}
      >
        {plan.name}
      </h3>

      {/* ── Prix ───────────────────────────────────────────────────────────── */}
      <div className="relative mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span
          className={cn(
            "text-[2.75rem] font-extrabold leading-none tracking-[-0.03em]",
            featured ? "text-brand-400" : "text-ink-900",
          )}
        >
          {formatPrice(plan.price)}
          <span className="ml-0.5 text-[1.75rem]">{plan.currency}</span>
        </span>

        <span
          className={cn(
            "text-[0.8125rem] font-medium",
            featured ? "text-white/45" : "text-ink-900/45",
          )}
        >
          {plan.period}
        </span>

        {plan.strikethroughPrice ? (
          <span
            className={cn(
              "text-[0.8125rem] line-through",
              featured ? "text-white/30" : "text-ink-900/30",
            )}
          >
            {formatPrice(plan.strikethroughPrice)}
            {plan.currency}
          </span>
        ) : null}
      </div>

      {/* Hauteur réservée même sans pastille d'économie : les listes de
          prestations restent alignées d'une carte à l'autre. */}
      <div className="relative mt-2.5 min-h-[1.6875rem]">
        {plan.savings ? (
          <p
            className={cn(
              "inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6875rem] font-bold",
              featured ? "bg-brand-500/15 text-brand-300" : "bg-brand-50 text-brand-700",
            )}
          >
            <Icon name="sparkles" className="size-3" />
            {plan.savings}
          </p>
        ) : null}
      </div>

      {/* ── Prestations ────────────────────────────────────────────────────── */}
      <ul className="relative mt-6 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              aria-hidden
              className={cn(
                "mt-0.5 inline-flex size-[1.125rem] shrink-0 items-center justify-center rounded-full",
                featured ? "bg-brand-500/20 text-brand-300" : "bg-brand-50 text-brand-600",
              )}
            >
              <Icon name="check" className="size-3" strokeWidth={2.75} />
            </span>
            <span
              className={cn(
                "text-[0.8125rem] leading-snug",
                featured ? "text-white/75" : "text-ink-900/65",
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* ── Action ─────────────────────────────────────────────────────────── */}
      <div className="relative mt-8">
        <Button
          href={plan.cta.href}
          variant={featured ? "primary" : "dark"}
          size="md"
          fullWidth
          icon="arrowRight"
        >
          {plan.cta.label}
          <span className="sr-only"> — formule {plan.name}</span>
        </Button>
      </div>
    </article>
  );
}
