"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const FinalCta = () => {
  return (
    <section id="book" className="relative w-full bg-[#2a211c] py-20 md:py-32 px-5 sm:px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6"
        >
          Ready to Stop <span className="text-[#e8792e] italic font-serif">Losing Money</span> to Aggregators?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
        >
          Book a free 20-min strategy call. We&apos;ll look at your current setup and show you exactly what a commission-free website could do for your restaurant.
        </motion.p>

        <Button
          asChild
          size="lg"
          className="h-12 sm:h-14 px-8 sm:px-12 rounded-full font-heading font-black text-sm sm:text-base bg-[#c1272d] text-white hover:bg-[#a81f24] transition-all hover:scale-[1.05] active:scale-[0.95] shadow-[0_10px_30px_rgba(193,39,45,0.35)] mb-12"
        >
          <a href="https://calendar.app.google/hcBDBD9ywLA8MRK17" target="_blank" rel="noopener noreferrer">
            Book a Free 20-Min Website Strategy Call
          </a>
        </Button>

        {/* Google Calendar doesn't allow iframe embedding (X-Frame-Options: SAMEORIGIN), so this opens in a new tab instead */}
        <div className="w-full h-[650px] md:h-[700px] rounded-3xl bg-white overflow-hidden relative border border-[#2a211c]/10 shadow-2xl">
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Goi0DwVVyg0AvW3y9ckRk3RrQ5k2fSxEiDbWNFSeVZnokG6jyPWwly5DWehBe5RCBssJBpJFT?gv=true" 
            width="100%" 
            height="100%" 
            frameBorder="0"
            className="absolute top-0 left-0 w-full h-full"
            title="Book a Strategy Call"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
