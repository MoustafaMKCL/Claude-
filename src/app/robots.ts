import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** Directives d'indexation — exposées sur `/robots.txt`. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.meta.url}/sitemap.xml`,
    host: site.meta.url,
  };
}
