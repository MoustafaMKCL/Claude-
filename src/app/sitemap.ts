import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** Plan du site généré automatiquement — exposé sur `/sitemap.xml`. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.meta.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.meta.url}${site.privateOffices.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...site.footer.legalLinks.map((link) => ({
      url: `${site.meta.url}${link.href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
