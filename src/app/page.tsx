import { Advantages } from "@/components/Advantages";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { StructuredData } from "@/components/StructuredData";

/**
 * Page d'accueil.
 *
 * L'ordre des sections raconte le parcours du visiteur : on montre le lieu
 * (Hero), ce qu'on y propose (Services), pourquoi choisir PWS (Advantages),
 * à quoi ça ressemble (Gallery), combien ça coûte (Pricing), où c'est
 * (Location), puis on invite à passer à l'action (CTA).
 */
export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Navbar />

      <main id="contenu">
        <Hero />
        <Services />
        <Advantages />
        <Gallery />
        <Pricing />
        <Location />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
