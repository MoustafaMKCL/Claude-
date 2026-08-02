"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";
import { EASE_PREMIUM } from "@/lib/motion";
import { cn, resolveHref } from "@/lib/utils";

/** Défilement (en px) au-delà duquel la barre passe en mode « clair ». */
const SCROLL_THRESHOLD = 24;

interface NavbarProps {
  /**
   * Force l'état « clair » dès le chargement. Indispensable sur les pages sans
   * bannière photo (mentions légales…), où du texte blanc serait illisible.
   */
  solid?: boolean;
  /** Préfixe des ancres depuis une autre page, ex. `/` pour revenir à l'accueil. */
  hrefPrefix?: string;
}

/**
 * Barre de navigation fixe.
 *
 * Deux états : transparente au-dessus du hero (le texte est alors blanc sur la
 * photo), puis blanche translucide et légèrement ombrée dès que la page défile.
 * La transition porte sur la couleur et l'ombre uniquement — la barre ne bouge
 * ni ne change de hauteur, pour éviter tout saut de mise en page.
 */
export function Navbar({ solid = false, hrefPrefix = "" }: NavbarProps = {}) {
  const [isScrolled, setIsScrolled] = useState(solid);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setIsScrolled(solid || value > SCROLL_THRESHOLD);
  });

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Le menu mobile est plein écran : on gèle le défilement de la page derrière.
  useEffect(() => {
    if (!isMenuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen, closeMenu]);

  /** Sur fond photo, tous les libellés sont blancs ; sinon, encre. */
  const onPhoto = !isScrolled && !isMenuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        "ease-[cubic-bezier(0.22,1,0.36,1)]",
        isScrolled || isMenuOpen
          ? "bg-white/85 shadow-[0_1px_0_rgb(16_24_40/0.06),0_8px_24px_-12px_rgb(16_24_40/0.18)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent",
      )}
    >
      <Container>
        <nav
          aria-label="Navigation principale"
          className="flex h-[var(--nav-height)] items-center justify-between gap-6"
        >
          <Link
            href={resolveHref("#top", hrefPrefix)}
            aria-label={`${site.meta.name} — retour en haut de page`}
            className="shrink-0 rounded-md"
          >
            <Logo tone={onPhoto ? "light" : "dark"} />
          </Link>

          {/* ── Liens (à partir du breakpoint lg) ───────────────────────── */}
          <ul className="hidden items-center gap-1 lg:flex">
            {site.nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={resolveHref(link.href, hrefPrefix)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    onPhoto
                      ? "text-white/85 hover:text-white"
                      : "text-ink-900/70 hover:text-ink-900",
                    // Soulignement qui se déploie depuis le centre au survol.
                    "after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-center",
                    "after:scale-x-0 after:bg-current after:transition-transform after:duration-300",
                    "after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              href={resolveHref(site.nav.cta.href, hrefPrefix)}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {site.nav.cta.label}
            </Button>

            {/* ── Bouton du menu mobile ─────────────────────────────────── */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="menu-mobile"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-full transition-colors duration-200 lg:hidden",
                onPhoto
                  ? "text-white hover:bg-white/15"
                  : "text-ink-900 hover:bg-ink-900/[0.06]",
              )}
            >
              <motion.span
                key={isMenuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2, ease: EASE_PREMIUM }}
                className="flex"
              >
                <Icon name={isMenuOpen ? "close" : "menu"} className="size-5" />
              </motion.span>
            </button>
          </div>
        </nav>
      </Container>

      {/* ── Panneau mobile ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            className="overflow-hidden border-t border-ink-900/[0.07] bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="py-5">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                className="flex flex-col gap-1"
              >
                {site.nav.links.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                  >
                    <Link
                      href={resolveHref(link.href, hrefPrefix)}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink-900/80 transition-colors hover:bg-sand-100 hover:text-ink-900"
                    >
                      {link.label}
                      <Icon name="arrowUpRight" className="size-4 text-ink-900/30" />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-4">
                <Button
                  href={resolveHref(site.nav.cta.href, hrefPrefix)}
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon="arrowRight"
                  onClick={closeMenu}
                >
                  {site.nav.cta.label}
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
