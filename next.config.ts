import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // Les visuels du site vivent dans `public/images/`. Ajoutez ici un
    // `remotePatterns` si vous décidez un jour de servir les photos depuis
    // un CDN externe (Cloudinary, S3, …).
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // En-têtes de sécurité de base — utiles dès la mise en production.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
