import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://static.hotjar.com https://script.hotjar.com https://static.cloudflareinsights.com https://assets.apollo.io https://*.apollo.io https://aplo-evnt.com https://*.aplo-evnt.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://i.pravatar.cc https://www.googletagmanager.com https://www.google-analytics.com https://raw.githubusercontent.com https://cdn.jsdelivr.net https://assets.apollo.io https://aplo-evnt.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://*.hotjar.com https://*.hotjar.io wss://*.hotjar.com https://raw.githubusercontent.com https://cdn.jsdelivr.net https://cloudflareinsights.com https://*.apollo.io https://*.aplo-evnt.com https://aplo-evnt.com; frame-src 'self' https://vars.hotjar.com https://calendar.google.com https://calendar.app.google.com;",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
