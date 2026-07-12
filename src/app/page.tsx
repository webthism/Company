"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { StickyBar } from "@/components/sticky-bar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Mechanism } from "@/components/mechanism";
import { FunnelProcess } from "@/components/funnel-process";
import { Calculator } from "@/components/calculator";
import { FunnelServices } from "@/components/funnel-services";
import { Pricing } from "@/components/pricing";
import { Checklist } from "@/components/checklist";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { TestimonialSection } from "@/components/testimonials";
import { SiteFooter } from "@/components/site-footer";
import { motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

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
      
      <div className="bg-[#fdf6ec]">
        <div className="relative z-10 bg-[#fdf6ec] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-b-3xl pb-10">
          <Hero />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Problem />
          </motion.div>
          <Mechanism />
        </div>

        <div className="sticky bottom-0 z-0">
          <Calculator />
        </div>
      </div>

      <div className="relative z-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <FunnelServices />
        </motion.div>
        <TestimonialSection />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Pricing />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Checklist />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Faq />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <FunnelProcess />
        </motion.div>
        <FinalCta />
        <SiteFooter />
      </div>
    </main>
  );
}
