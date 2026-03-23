"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 aura-glow" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-8"
        >
          Custom Websites That Actually <span className="text-primary italic font-serif">Convert</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-12 font-sans font-light leading-relaxed"
        >
          Stop losing potential clients to outdated designs. We build high-performance websites that look premium and drive massive results.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Button
            size="lg"
            className="px-10 py-8 rounded-full font-heading font-black text-lg hover:scale-105 transition-transform bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(189,157,255,0.4)]"
          >
            Get Your Free Website Audit
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-10 py-8 glass rounded-full font-heading font-black text-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            Work Examples
          </Button>
        </motion.div>
      </div>


    </section>
  );
};
