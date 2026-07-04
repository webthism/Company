"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoadingScreen } from "@/components/loading-screen";
import { StickyBar } from "@/components/sticky-bar";
import { Hero } from "@/components/hero";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Problem } from "@/components/problem";
import { Mechanism } from "@/components/mechanism";
import { Calculator } from "@/components/calculator";
import { Proof } from "@/components/proof";
import { FunnelServices } from "@/components/funnel-services";
import { Pricing } from "@/components/pricing";
import { Checklist } from "@/components/checklist";
import { FunnelTestimonials } from "@/components/funnel-testimonials";
import { FAQ } from "@/components/faq";
import { FunnelProcess } from "@/components/funnel-process";
import { FinalCTA } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading && window.innerWidth >= 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <main className="min-h-screen bg-[#fdf6ec]">
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      <StickyBar />
      <Hero />
      <WhatsAppButton />

      {[
        <Problem key="problem" />,
        <Mechanism key="mechanism" />,
        <Calculator key="calculator" />,
        <Proof key="proof" />,
        <FunnelServices key="services" />,
      ].map((section) => (
        <motion.div
          key={section.key}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {section}
        </motion.div>
      ))}

      <Pricing />
      <Checklist />
      <FunnelTestimonials />
      <FAQ />
      <FunnelProcess />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
