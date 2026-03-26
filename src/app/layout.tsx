import type { Metadata } from "next";
import { Manrope, Inter, Pacifico } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-logo",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webthism | Premium Digital Craft Agency",
  description: "Crafting extraordinary digital experiences in the void. A boutique creative studio focused on high-end web experiences, custom development, and conversion-optimized design.",
  keywords: ["web design", "digital agency", "custom software", "next.js", "conversion optimization", "premium web development"],
  authors: [{ name: "Webthism Team" }],
  openGraph: {
    title: "Webthism | Premium Digital Craft Agency",
    description: "Crafting extraordinary digital experiences. High-end web development and conversion-optimized design.",
    url: "https://webthism.com",
    siteName: "Webthism",
    images: [
      {
        url: "/og-image.png", // Assuming this exists or should be added
        width: 1200,
        height: 630,
        alt: "Webthism - Digital Craft Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webthism | Premium Digital Craft Agency",
    description: "Crafting extraordinary digital experiences. High-end web development and conversion-optimized design.",
    images: ["/og-image.png"],
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
  themeColor: "#000000",
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${pacifico.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics Placeholder */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Hotjar Placeholder */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:0000000,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
