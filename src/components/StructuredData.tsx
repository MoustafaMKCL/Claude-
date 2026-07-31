import { site } from "@/content/site";

/**
 * Données structurées Schema.org (JSON-LD).
 *
 * Elles permettent à Google d'afficher l'adresse, les horaires et les tarifs
 * directement dans les résultats de recherche et dans Google Maps. Le contenu
 * est dérivé de `src/content/site.ts` : rien à tenir à jour en double.
 */
export function StructuredData() {
  const { meta, contact, hours, services, pricing } = site;

  /** Convertit « Lundi – Vendredi » en jours Schema.org. */
  const dayMap: Record<string, string> = {
    lundi: "Monday",
    mardi: "Tuesday",
    mercredi: "Wednesday",
    jeudi: "Thursday",
    vendredi: "Friday",
    samedi: "Saturday",
    dimanche: "Sunday",
  };

  const openingHours = hours
    .filter((entry) => !/ferm/i.test(entry.hours))
    .flatMap((entry) => {
      const days = entry.days
        .toLowerCase()
        .split(/[–—-]/)
        .map((part) => dayMap[part.trim()])
        .filter((day): day is string => Boolean(day));

      // Les horaires sont notés « 8h00 – 19h00 » ; Schema.org attend « 08:00 ».
      const times = entry.hours.match(/(\d{1,2})h(\d{2})/g);
      if (days.length === 0 || !times || times.length < 2) return [];

      const toIso = (value: string) => {
        const [h = "0", m = "00"] = value.split("h");
        return `${h.padStart(2, "0")}:${m}`;
      };

      return [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: days.length === 2 ? expandRange(days) : days,
          opens: toIso(times[0] as string),
          closes: toIso(times[1] as string),
        },
      ];
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${meta.url}/#organisation`,
    name: meta.name,
    description: meta.description,
    url: meta.url,
    image: `${meta.url}${meta.ogImage.src}`,
    email: contact.email,
    telephone: contact.phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.street,
      postalCode: contact.postalCode,
      addressLocality: contact.city,
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.geo.latitude,
      longitude: contact.geo.longitude,
    },
    hasMap: contact.mapsUrl,
    openingHoursSpecification: openingHours,
    makesOffer: services.items.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Formules",
      itemListElement: pricing.tabs.map((tab) => ({
        "@type": "OfferCatalog",
        name: tab.label,
        itemListElement: tab.plans.map((plan) => ({
          "@type": "Offer",
          name: `${tab.label} — ${plan.name}`,
          price: plan.price,
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: plan.price,
            priceCurrency: "EUR",
            unitCode: "MON",
            valueAddedTaxIncluded: false,
          },
        })),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // Contenu statique issu du dépôt : aucune donnée utilisateur n'est injectée.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/** « Monday → Friday » devient la liste complète des jours de la plage. */
function expandRange(bounds: string[]): string[] {
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const start = week.indexOf(bounds[0] as string);
  const end = week.indexOf(bounds[1] as string);
  if (start === -1 || end === -1 || end < start) return bounds;
  return week.slice(start, end + 1);
}
