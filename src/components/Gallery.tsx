"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/content/site";
import { EASE_PREMIUM, scaleIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

const { gallery } = site;

/** Distance (en px) d'un glissement horizontal validant un changement de vue. */
const SWIPE_THRESHOLD = 60;

/**
 * Le sens du glissement pilote l'entrée et la sortie : la vue suivante arrive
 * par la droite, la précédente par la gauche.
 */
const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 48 : -48, scale: 1.02 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -48 : 48, scale: 1.02 }),
};

/**
 * Carrousel des espaces.
 *
 * Navigation possible au clavier (flèches), à la souris (boutons, vignettes,
 * pastilles) et au doigt (glissement). L'image active est annoncée aux lecteurs
 * d'écran via une région « live » discrète.
 */
export function Gallery() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const prefersReducedMotion = useReducedMotion();
  const total = gallery.slides.length;

  const goTo = useCallback(
    (next: number, nextDirection?: number) => {
      const target = ((next % total) + total) % total;
      setSlide(([current]) => [
        target,
        nextDirection ?? (target > current ? 1 : -1),
      ]);
    },
    [total],
  );

  const paginate = useCallback(
    (step: number) => goTo(index + step, step),
    [goTo, index],
  );

  const slide = gallery.slides[index];
  if (!slide) return null;

  return (
    <Section id="espaces" tone="light" aria-labelledby="gallery-title">
      <Container>
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          titleId="gallery-title"
        />

        <Reveal variants={scaleIn} className="mt-14 sm:mt-16">
          <div
            role="group"
            aria-roledescription="carrousel"
            aria-label="Nos espaces en images"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                paginate(1);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                paginate(-1);
              }
            }}
            className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-ink-900 shadow-card sm:aspect-[16/9] lg:rounded-3xl"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={slide.image.src}
                custom={direction}
                variants={prefersReducedMotion ? undefined : slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: EASE_PREMIUM }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
                  else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  fill
                  draggable={false}
                  sizes="(min-width: 1280px) 1216px, 100vw"
                  quality={88}
                  className="select-none object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Voile bas : garantit la lisibilité de la pastille de légende. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-950/75 via-ink-950/25 to-transparent"
            />

            {/* ── Légende de la vue courante ─────────────────────────────── */}
            <div className="pointer-events-none absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={slide.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                  className="glass inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[0.8125rem] font-semibold text-white"
                >
                  <Icon name={slide.icon} className="size-4 text-brand-300" />
                  {slide.label}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* ── Flèches ────────────────────────────────────────────────── */}
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Espace précédent"
              className="glass absolute left-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full
                         border border-white/20 text-white opacity-0 transition-[opacity,background-color] duration-300
                         hover:bg-white/25 focus-visible:opacity-100 group-hover:opacity-100 sm:left-5 sm:size-11"
            >
              <Icon name="chevronLeft" className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Espace suivant"
              className="glass absolute right-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full
                         border border-white/20 text-white opacity-0 transition-[opacity,background-color] duration-300
                         hover:bg-white/25 focus-visible:opacity-100 group-hover:opacity-100 sm:right-5 sm:size-11"
            >
              <Icon name="chevronRight" className="size-5" />
            </button>

            {/* ── Pastilles de position ──────────────────────────────────── */}
            <div className="absolute bottom-5 right-4 flex items-center gap-1.5 sm:bottom-7 sm:right-6">
              {gallery.slides.map((item, dotIndex) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => goTo(dotIndex)}
                  aria-label={`Afficher : ${item.label}`}
                  aria-current={dotIndex === index}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    dotIndex === index
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/45 hover:bg-white/70",
                  )}
                />
              ))}
            </div>

            {/* Annonce du changement de vue, invisible à l'écran. */}
            <p aria-live="polite" className="sr-only">
              {`Image ${index + 1} sur ${total} : ${slide.label}`}
            </p>
          </div>
        </Reveal>

        {/* ── Accroche + vignettes ─────────────────────────────────────────── */}
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <Reveal className="max-w-xl">
            <p className="text-sm leading-relaxed text-ink-900/60">{gallery.caption}</p>
          </Reveal>

          <Reveal delay={0.1} className="lg:shrink-0">
            {/* `items-stretch` + `h-full` : toutes les vignettes adoptent la
                hauteur de la plus haute, quel que soit le nombre de lignes du
                libellé — la rangée reste alignée quand le contenu change. */}
            <ul className="-mx-1 flex snap-x snap-mandatory items-stretch gap-2 overflow-x-auto px-1 pb-1 lg:mx-0 lg:overflow-visible lg:px-0">
              {gallery.slides.map((item, thumbIndex) => {
                const isActive = thumbIndex === index;
                return (
                  <li key={item.label} className="h-auto snap-start">
                    <button
                      type="button"
                      onClick={() => goTo(thumbIndex)}
                      aria-pressed={isActive}
                      className={cn(
                        "flex h-full w-[5.75rem] flex-col items-center justify-start gap-2 rounded-xl border px-2 py-3 text-center transition-all duration-300",
                        "ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive
                          ? "border-brand-500/40 bg-brand-50 text-brand-700 shadow-soft"
                          : "border-ink-900/[0.08] bg-white text-ink-900/55 hover:-translate-y-0.5 hover:border-ink-900/15 hover:text-ink-900",
                      )}
                    >
                      <Icon
                        name={item.icon}
                        className={cn("size-4", isActive ? "text-brand-600" : "text-ink-900/40")}
                      />
                      <span className="text-[0.625rem] font-semibold leading-tight">
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
