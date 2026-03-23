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
          Crafting the <span className="text-primary italic font-serif">Extraordinary</span> <br />
          in the <motion.span
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-glow"
          >Digital Void.</motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-12 font-sans font-light leading-relaxed"
        >
          We are a boutique creative studio focused on high-end web experiences that illuminate brands and redefine digital standards.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Button
            size="lg"
            className="px-10 py-8 rounded-full font-heading font-black text-lg hover:scale-105 transition-transform"
          >
            Let's build something extraordinary
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-10 py-8 glass rounded-full font-heading font-black text-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            View Portfolio
          </Button>
        </motion.div>
      </div>

      {/* Decorative vertical indicators */}
      <div className="absolute bottom-10 left-10 opacity-20 hidden lg:block">
        <span className="text-xs font-sans tracking-widest text-muted-foreground uppercase">
          EST. 2024 / VOID-BORN
        </span>
      </div>
    </section>
  );
};
