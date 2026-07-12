import type { Metadata } from "next";
import { Manrope, Inter, Pacifico } from "next/font/google";
import "./globals.css";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const pacifico = Pacifico({
  variable: "--font-logo",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webthism — Websites That Turn Hungry Googlers Into Paying Customers",
  description: "We design fast, mobile-first websites for restaurants, cafés, and food brands — with online menus, table bookings, and direct ordering that saves you from paying 25-30% commissions to aggregators.",
  keywords: ["restaurant website design", "cafe website India", "restaurant online menu", "whatsapp ordering website", "restaurant local seo", "food business website design"],
  authors: [{ name: "Webthism Team" }],
  openGraph: {
    title: "Webthism — Websites Built Exclusively for Restaurants & Cafés",
    description: "Fast, mobile-first restaurant websites with online menus, WhatsApp ordering, and table bookings — built to save you from 25-30% aggregator commissions.",
    url: "https://webthism.com",
    siteName: "Webthism",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webthism — Websites for Restaurants & Cafés",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webthism — Websites for Restaurants & Cafés",
    description: "We build websites exclusively for restaurants, cafés, and food businesses in India — online menus, WhatsApp ordering, table bookings.",
    images: ["/og-image.png"],
    creator: "@webthism", // Replace with your actual handle if different
  },
  metadataBase: new URL("https://webthism.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fdf6ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${pacifico.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          id="name-polyfill"
          dangerouslySetInnerHTML={{
            __html: `(function() {
              if (typeof window !== 'undefined' && !window.__name) {
                window.__name = (target, value) => {
                  try {
                    return Object.defineProperty(target, "name", { value, configurable: true });
                  } catch (e) {
                    return target;
                  }
                };
              }
            })();`
          }}
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {/* Loads GA/Hotjar/Apollo only after cookie consent is accepted */}
        <AnalyticsScripts />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
