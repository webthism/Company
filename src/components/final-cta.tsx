"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section id="book" className="w-full py-20 md:py-32 px-5 md:px-8 bg-[#2a211c]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-5 md:mb-6"
        >
          Ready to Stop Losing Money to Aggregators?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-base md:text-lg text-white/70 mb-10 md:mb-12"
        >
          Book your free 20-minute strategy call. You'll leave with a clear action plan — even if we never work together.
        </motion.p>

        <Button
          asChild
          size="lg"
          className="h-14 md:h-16 px-8 md:px-12 rounded-full font-heading font-black text-base md:text-lg bg-[#c1272d] text-white hover:bg-[#a81f24] hover:scale-[1.05] transition-all shadow-[0_10px_30px_rgba(193,39,45,0.35)] mb-10 md:mb-12"
        >
          {/* Placeholder: swap href for your real Calendly link */}
          <a href="https://calendly.com/your-id/20min" target="_blank" rel="noopener noreferrer">
            Book a Free 20-Min Website Strategy Call
          </a>
        </Button>

        {/* Placeholder: embed the real Calendly inline widget once the link is ready */}
        <div className="w-full h-[400px] md:h-[600px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
          <p className="font-sans text-sm text-white/40">Calendly widget placeholder</p>
        </div>
      </div>
    </section>
  );
};
