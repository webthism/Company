"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StickyBar } from "@/components/sticky-bar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Calculator } from "@/components/calculator";
import { HowItWorks } from "@/components/how-it-works";
import { TestimonialSection } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { Checklist } from "@/components/checklist";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

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
    <main className="min-h-screen bg-ink">
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      <SmoothScroll />
      <StickyBar />

      <div className="bg-surface">
        {/* Curtain: this block scrolls away to reveal the sticky calculator underneath */}
        <div className="relative z-10 overflow-clip bg-ink rounded-b-[2.5rem] md:rounded-b-[4rem] border-b border-cream/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
          <Hero ready={!isLoading} />
          <Problem />
        </div>

        <div className="sticky bottom-0 z-0">
          <Calculator />
        </div>
      </div>

      <div className="relative z-20 overflow-clip bg-ink rounded-t-[2.5rem] md:rounded-t-[4rem] border-t border-cream/10 shadow-[0_-40px_80px_rgba(0,0,0,0.6)]">
        <HowItWorks />
        <TestimonialSection />
        <Pricing />
        <Faq />
        <Checklist />
        <FinalCta />
        <SiteFooter />
      </div>
    </main>
  );
}
