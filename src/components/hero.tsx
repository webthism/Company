"use client";

import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { TextRepel } from "@/components/ui/text-repel";

const HEADLINE_WORDS = [
  "We", "Build", "Websites", "That", "Turn",
  "Hungry", "Googlers", "Into", "Paying", "Customers",
];

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const Hero = () => {
  return (
    <div className="relative mb-4 md:mb-8">
      <section className="relative min-h-[100svh] flex items-center justify-center bg-white rounded-b-[2rem] md:rounded-b-[3rem] shadow-[0_20px_50px_rgba(42,33,28,0.06)] border-b border-[#2a211c]/5">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center"
        >
          <motion.p variants={fadeUp} className="font-logo text-[2.1rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-[#c1272d] mb-5 md:mb-7">
            Webthism
          </motion.p>

          <motion.h1 
            variants={fadeUp}
            className="font-heading text-3xl leading-[1.15] sm:text-4xl md:text-5xl font-black tracking-tight text-[#2a211c] mb-9 md:mb-12 flex flex-wrap justify-center items-center gap-x-2"
          >
            <TextRepel text="We Build Websites That Turn " mode="repel" radius={120} strength={40} />
            <TextRepel text="Hungry Googlers Into Paying Customers" className="text-[#c1272d] italic font-serif" mode="repel" radius={120} strength={40} />
          </motion.h1>

          <motion.div variants={fadeUp} className="flex justify-center px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 rounded-full font-heading font-black text-sm sm:text-base md:text-lg bg-[#c1272d] text-white hover:bg-[#a81f24] transition-all hover:scale-[1.05] active:scale-[0.95] shadow-[0_10px_30px_rgba(193,39,45,0.35)]"
            >
              {/* Placeholder: swap href for your real Calendly link, e.g. https://calendly.com/your-id/20min */}
              <a href="#book">Book a Free 20-Min Website Strategy Call</a>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};
