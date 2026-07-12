"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Design",
    description: "A mouth-watering site with food photography that makes people hungry",
    icon: (
      <svg className="w-6 h-6 text-[#c1272d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Convert",
    description: "Menu, WhatsApp ordering, table booking, Google Maps — one tap away",
    icon: (
      <svg className="w-6 h-6 text-[#c1272d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    title: "Grow",
    description: "SEO so you show up when someone searches 'best café near me'",
    icon: (
      <svg className="w-6 h-6 text-[#c1272d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export const Mechanism = () => {
  return (
    <section id="mechanism" className="relative w-full bg-[#fdf6ec] pt-10 pb-20 md:pt-16 md:pb-32 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative flex flex-col items-center justify-center pt-4 md:pt-10">

          {/* Ambient Background Blobs */}
          <motion.div
            aria-hidden
            animate={{ x: [0, 30, -15, 0], y: [0, -20, 15, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 md:left-20 w-64 h-64 bg-[#e8792e]/10 blur-[80px] rounded-full pointer-events-none"
          />
          <motion.div
            aria-hidden
            animate={{ x: [0, -20, 20, 0], y: [0, 25, -15, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 md:right-20 w-72 h-72 bg-[#c1272d]/5 blur-[80px] rounded-full pointer-events-none"
          />

          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-20 font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] mb-8 text-center"
          >
            The Full Plate <span className="text-[#c1272d] italic font-serif">Framework</span>
          </motion.h2>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "relative z-20 w-full max-w-5xl bg-white rounded-[2rem] p-8 sm:p-10 md:p-16",
              "shadow-[0_20px_50px_rgba(42,33,28,0.06)] border border-[#2a211c]/5"
            )}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-5 group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl md:rounded-2xl bg-[#fdf6ec] flex items-center justify-center group-hover:bg-[#f3e9dc] group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-[#2a211c] mb-1 md:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#2a211c]/70 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};
