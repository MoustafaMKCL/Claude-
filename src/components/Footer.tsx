import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { cn, resolveHref } from "@/lib/utils";

const { footer, contact, hours, meta } = site;

interface FooterProps {
  /** Préfixe des ancres hors accueil, ex. `/`. Voir `resolveHref`. */
  hrefPrefix?: string;
}

/**
 * Pied de page.
 *
 * L'année du copyright est calculée au rendu : `{year}` dans le contenu est
 * remplacé automatiquement, il n'y a donc jamais de date à corriger à la main.
 */
export function Footer({ hrefPrefix = "" }: FooterProps = {}) {
  const copyright = footer.copyright.replace("{year}", String(new Date().getFullYear()));

  return (
    <footer className="relative bg-ink-950 text-white">
      <Container>
        <RevealGroup
          stagger={0.08}
          className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12 lg:py-20"
        >
          {/* ── Marque ─────────────────────────────────────────────────────── */}
          <RevealItem>
            <Link href={resolveHref("#top", hrefPrefix)} aria-label={`${meta.name} — retour en haut de page`}>
              <Logo tone="light" height={56} />
            </Link>
            <p className="mt-5 max-w-xs text-[0.8125rem] leading-relaxed text-white/50">
              {footer.description}
            </p>
          </RevealItem>

          {/* ── Contact ────────────────────────────────────────────────────── */}
          <RevealItem>
            <FooterTitle>{footer.contactTitle}</FooterTitle>
            <ul className="mt-5 space-y-3.5">
              <FooterContactRow icon="mail" href={`mailto:${contact.email}`}>
                {contact.email}
              </FooterContactRow>
              <FooterContactRow icon="phone" href={`tel:${contact.phoneHref}`}>
                {contact.phone}
              </FooterContactRow>
              <FooterContactRow
                icon="mapPin"
                href={contact.mapsUrl}
                external
              >
                {contact.street}
                <br />
                {contact.postalCode} {contact.city}
              </FooterContactRow>
            </ul>
          </RevealItem>

          {/* ── Horaires ───────────────────────────────────────────────────── */}
          <RevealItem>
            <FooterTitle>{footer.hoursTitle}</FooterTitle>
            <ul className="mt-5 space-y-3">
              {hours.map((entry) => (
                <li key={entry.days} className="text-[0.8125rem] leading-snug">
                  <span
                    className={cn(
                      "block font-medium",
                      entry.highlight ? "text-brand-400" : "text-white/75",
                    )}
                  >
                    {entry.days}
                  </span>
                  <span
                    className={cn(
                      entry.highlight ? "text-brand-400/70" : "text-white/45",
                    )}
                  >
                    {entry.hours}
                  </span>
                </li>
              ))}
            </ul>
          </RevealItem>

          {/* ── Liens ──────────────────────────────────────────────────────── */}
          <RevealItem>
            <FooterTitle>{footer.linksTitle}</FooterTitle>
            <ul className="mt-5 space-y-3">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={resolveHref(link.href, hrefPrefix)}
                    className="group inline-flex items-center gap-1.5 text-[0.8125rem] text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    <span
                      aria-hidden
                      className="h-px w-0 bg-brand-400 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-3"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealItem>
        </RevealGroup>
      </Container>

      {/* ── Barre légale ─────────────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.08]">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <p className="text-center text-[0.75rem] text-white/35 sm:text-left">
              {copyright}
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.75rem] text-white/35 transition-colors duration-200 hover:text-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}

/* ────────────────────────────  Sous-composants  ─────────────────────────── */

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/85">
      {children}
    </h2>
  );
}

function FooterContactRow({
  icon,
  href,
  external,
  children,
}: {
  icon: "mail" | "phone" | "mapPin";
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group flex items-start gap-3 text-[0.8125rem] leading-relaxed text-white/50 transition-colors duration-200 hover:text-white"
      >
        <span
          aria-hidden
          className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-brand-400 transition-colors duration-300 group-hover:bg-brand-500/20"
        >
          <Icon name={icon} className="size-3.5" />
        </span>
        <span>{children}</span>
      </a>
    </li>
  );
}
