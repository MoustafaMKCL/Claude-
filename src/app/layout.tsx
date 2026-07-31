import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import "@/app/globals.css";

/**
 * Inter, chargée en variable et auto-hébergée par Next.js.
 * `display: swap` évite tout texte invisible pendant le chargement.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.meta.url),
  title: {
    default: `${site.meta.name} — ${site.meta.tagline}`,
    template: `%s | ${site.meta.name}`,
  },
  description: site.meta.description,
  applicationName: site.meta.name,
  keywords: [
    "domiciliation Bruxelles",
    "siège social Bruxelles",
    "coworking Bruxelles",
    "bureau privatif Bruxelles",
    "salle de réunion Bruxelles",
    "adresse commerciale",
  ],
  authors: [{ name: site.meta.name }],
  creator: site.meta.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.meta.locale,
    url: site.meta.url,
    siteName: site.meta.name,
    title: `${site.meta.name} — ${site.meta.tagline}`,
    description: site.meta.description,
    images: [
      {
        url: site.meta.ogImage.src,
        width: 1200,
        height: 630,
        alt: site.meta.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.meta.name} — ${site.meta.tagline}`,
    description: site.meta.description,
    images: [site.meta.ogImage.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b111c" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased">
        {/* Premier élément focusable de la page : permet d'atteindre le contenu
            sans parcourir toute la navigation au clavier. */}
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]
                     focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm
                     focus:font-semibold focus:text-white"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
