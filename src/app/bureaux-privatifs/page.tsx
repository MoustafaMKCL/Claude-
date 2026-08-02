import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PrivateOffices } from "@/components/PrivateOffices";
import { site } from "@/content/site";

const { privateOffices } = site;

export const metadata: Metadata = {
  title: privateOffices.metaTitle,
  description: privateOffices.metaDescription,
  alternates: { canonical: privateOffices.slug },
  openGraph: {
    type: "website",
    locale: site.meta.locale,
    url: `${site.meta.url}${privateOffices.slug}`,
    siteName: site.meta.name,
    title: `${privateOffices.metaTitle} | ${site.meta.name}`,
    description: privateOffices.metaDescription,
    images: [
      {
        url: privateOffices.hero.background.src,
        width: 2400,
        height: 1600,
        alt: privateOffices.hero.background.alt,
      },
    ],
  },
};

/**
 * Page « Bureaux privatifs ».
 *
 * La bannière porte une photo : la barre de navigation reste donc transparente
 * au chargement (pas de `solid`), exactement comme sur l'accueil. En revanche
 * ses ancres sont préfixées par `/` pour renvoyer vers l'accueil.
 */
export default function BureauxPrivatifsPage() {
  return (
    <>
      <Navbar hrefPrefix="/" />

      <main id="contenu">
        <PrivateOffices />
      </main>

      <Footer hrefPrefix="/" />
    </>
  );
}
