"use client";

import { motion } from "framer-motion";
import { Utensils, MousePointerClick, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: Utensils,
    title: "Design",
    description: "A mouth-watering site with food photography that makes people hungry",
  },
  {
    icon: MousePointerClick,
    title: "Convert",
    description: "Menu, WhatsApp ordering, table booking, Google Maps — one tap away",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "SEO so you show up when someone searches 'best café near me'",
  },
];

const HAIR = [
  { dx: -10, dy: -34, s: 22 },
  { dx: 10, dy: -38, s: 24 },
  { dx: 30, dy: -30, s: 20 },
  { dx: -28, dy: -18, s: 18 },
  { dx: 34, dy: -10, s: 18 },
];

// Curly-haired face, peeking in from the side of the card.
const PeekingFace = () => (
  <div className="relative w-24 h-24 md:w-40 md:h-40 shrink-0">
    <div className="absolute inset-2 rounded-full bg-[#3a2a1e]" />
    {HAIR.map((h, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-[#3a2a1e] w-[22px] h-[22px] md:w-9 md:h-9"
        style={{
          left: `calc(50% + ${h.dx}px)`,
          top: `calc(45% + ${h.dy}px)`,
          transform: "translate(-50%, -50%)",
        }}
      />
    ))}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-28 md:h-28 rounded-full bg-[#f4c9a0]">
      <div className="absolute top-[38%] left-[26%] w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#2a211c]" />
      <div className="absolute top-[38%] right-[26%] w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#2a211c]" />
      <div className="absolute top-[62%] left-1/2 -translate-x-1/2 w-6 md:w-9 h-3 md:h-4 border-b-2 md:border-b-[3px] border-[#2a211c] rounded-b-full" />
    </div>
  </div>
);

export const Mechanism = () => {
  return (
    <section className="w-full min-h-[100svh] md:min-h-0 flex items-center py-16 md:py-0 px-5 md:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PeekingFace />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center md:text-left"
          >
            The Full Plate <span className="text-[#c1272d] italic font-serif">Framework</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-[#e8dcc8] text-center md:text-left"
            >
              <div className="mx-auto md:mx-0 mb-4 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#c1272d]/10 flex items-center justify-center text-[#c1272d]">
                <step.icon size={26} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2a211c] mb-2">{step.title}</h3>
              <p className="text-[#7a6a5c] font-sans leading-relaxed text-sm md:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
