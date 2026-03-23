import type { Metadata } from "next";
import { Manrope, Inter, Pacifico } from "next/font/google";
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
  title: "WebThism | Premium Digital Craft Agency",
  description: "Crafting extraordinary digital experiences in the void. A boutique creative studio focused on high-end web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${pacifico.variable} dark`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
