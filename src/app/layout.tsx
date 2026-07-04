import type { Metadata } from "next";
import { Manrope, Inter, Pacifico } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
        
        {/* Google Analytics - Corrected and moved to top of head */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-KGPE4FTQ8D`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KGPE4FTQ8D');
          `}
        </Script>

        {/* Hotjar - Moved to lazyOnload for Performance */}
        <Script id="hotjar" strategy="lazyOnload">
          {`
            (function(h,o,t,j,a,r){
                if(h._hjSettings && h._hjSettings.hjid === 0) return;
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:0,hjsv:6};
                if(h._hjSettings.hjid === 0) return;
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        {/* Apollo Tracking Script - Robust Initialization */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo(){
              var n=Math.random().toString(36).substring(7),o=document.createElement("script");
              o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
              o.async=!0;
              o.defer=!0;
              o.onload=function(){
                var config = {appId:"69b791bcfae0f5001db5021c"};
                if(window.trackingFunctions) {
                  window.trackingFunctions.onLoad(config);
                } else if (window.apollo) {
                   window.apollo.init(config);
                }
              };
              document.head.appendChild(o);
            }
            initApollo();
          `}
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
