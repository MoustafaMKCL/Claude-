import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

/** Page 404 — reprend la charte du site plutôt que l'écran par défaut de Next. */
export default function NotFound() {
  return (
    <>
      <Navbar solid hrefPrefix="/" />

      <main
        id="contenu"
        className="flex min-h-[70svh] items-center pt-[var(--nav-height)]"
      >
        <Container>
          <div className="mx-auto flex max-w-lg flex-col items-center py-20 text-center">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brand-600">
              Erreur 404
            </p>
            <h1 className="mt-4 text-[2rem] leading-tight text-ink-900 sm:text-[2.5rem]">
              Cette page n&apos;existe pas
            </h1>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-900/60">
              Le lien que vous avez suivi est peut-être obsolète. Revenez à
              l&apos;accueil pour retrouver nos espaces et nos formules.
            </p>
            <div className="mt-9">
              <Button href="/" variant="primary" size="lg" icon="arrowRight">
                Retour à l&apos;accueil
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
