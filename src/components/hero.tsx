"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-primary/30">
      {/* --- Sophisticated Agency Background --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
        
        {/* Animated Glows */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-[#BD9DFF]/20 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-6xl md:text-[8.5rem] font-bold tracking-tight leading-[0.95] mb-12 text-white"
          >
            Custom Websites That <br />
            Actually <span className="text-[#BD9DFF] italic font-serif">Convert</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-2xl mx-auto text-[#A1A1AA] text-lg md:text-2xl mb-16 font-sans font-light leading-relaxed"
          >
            We design, build, and scale high-performance digital experiences that turn visitors into loyal customers. No templates, just pure conversion.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              size="lg"
              className="h-16 px-12 rounded-full font-heading font-black text-lg bg-[#BD9DFF] text-[#1D1D1F] hover:bg-[#A984FF] transition-all hover:scale-[1.05] active:scale-[0.98] shadow-[0_0_40px_rgba(189,157,255,0.4)]"
              onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Free Website Audit
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-16 px-12 rounded-full font-heading font-black text-lg border-[#27272A] bg-transparent text-white hover:bg-white/5 transition-all hover:scale-[1.05] active:scale-[0.98]"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
