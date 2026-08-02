import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/ui/Container";

interface LegalPageProps {
  title: string;
  /** Date de dernière révision, affichée sous le titre. */
  updatedAt: string;
  children: ReactNode;
}

/**
 * Gabarit des pages de texte légal.
 *
 * Ces pages n'ont pas de bannière photo : la barre de navigation est donc
 * forcée en mode clair (`solid`) et ses ancres pointent vers l'accueil
 * (`hrefPrefix="/"`), sans quoi « Services » ne mènerait nulle part.
 */
export function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <>
      <Navbar solid hrefPrefix="/" />

      <main id="contenu" className="pt-[calc(var(--nav-height)+3rem)]">
        <Container className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-[2rem] leading-tight text-ink-900 sm:text-[2.5rem]">
              {title}
            </h1>
            <p className="mt-3 text-sm text-ink-900/45">
              Dernière mise à jour : {updatedAt}
            </p>

            {/* Rythme typographique appliqué aux titres et paragraphes enfants,
                pour que le contenu reste du simple JSX sans classe à répéter. */}
            <div
              className="mt-10 space-y-6 text-[0.9375rem] leading-relaxed text-ink-900/70
                         [&_a]:font-medium [&_a]:text-brand-600 [&_a:hover]:text-brand-700
                         [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:text-ink-900
                         [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink-900
                         [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
            >
              {children}
            </div>
          </div>
        </Container>
      </main>

      <Footer hrefPrefix="/" />
    </>
  );
}
