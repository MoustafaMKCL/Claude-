"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { EASE_PREMIUM } from "@/lib/motion";

const { hero } = site;

/** Entrée en cascade des blocs du hero, du titre jusqu'aux boutons. */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_PREMIUM },
  },
};

/**
 * Bannière plein écran.
 *
 * La photo défile plus lentement que la page (parallaxe) tandis que le texte
 * s'estompe : l'effet crée une impression de profondeur sans jamais gêner la
 * lecture. Il est désactivé si le système demande de réduire les animations.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Progression du défilement sur la seule hauteur du hero (0 → 1).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const still = prefersReducedMotion ?? false;

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-950"
    >
      {/* ── Photo de fond ────────────────────────────────────────────────── */}
      <motion.div
        aria-hidden
        style={still ? undefined : { y: imageY, scale: imageScale }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <Image
          src={hero.background.src}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
        />
      </motion.div>

      {/* Voile de lisibilité : sans lui, le texte blanc perdrait son contraste. */}
      <div aria-hidden className="overlay-hero absolute inset-0 -z-10" />

      {/* ── Contenu ──────────────────────────────────────────────────────── */}
      <motion.div
        style={still ? undefined : { y: contentY, opacity: contentOpacity }}
        className="w-full pt-[var(--nav-height)]"
      >
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            /* Assez large pour que « Votre espace professionnel » tienne sur
               une seule ligne dès le grand écran, comme dans la maquette. */
            className="mx-auto flex max-w-[58rem] flex-col items-center text-center"
          >
            <motion.h1
              id="hero-title"
              variants={item}
              className="text-[2.5rem] leading-[1.08] text-white sm:text-[3.25rem] lg:text-[4rem]"
            >
              <span className="block">{hero.titleLead}</span>
              <span className="block text-brand-400">{hero.titleAccent}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-white/60 sm:text-xs"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-white/75 sm:text-base"
            >
              {hero.description}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
            >
              <Button
                href={hero.primaryCta.href}
                variant="primary"
                size="lg"
                icon="arrowRight"
                className="w-full sm:w-auto"
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="glass"
                size="lg"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>

      {/* ── Indicateur de défilement ─────────────────────────────────────── */}
      <motion.a
        href="#services"
        aria-label={hero.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6, ease: EASE_PREMIUM }}
        className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <span className="flex h-9 w-[1.375rem] items-start justify-center rounded-full border border-white/35 pt-2 transition-colors duration-300 group-hover:border-white/70">
          <motion.span
            aria-hidden
            className="block size-1 rounded-full bg-white/70"
            animate={still ? undefined : { y: [0, 9, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
