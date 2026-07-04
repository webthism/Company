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
    <section className="relative w-full bg-[#fdf6ec] py-20 md:py-32 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative flex flex-col items-center justify-center pt-10 md:pt-20">
          
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "relative z-20 w-full max-w-2xl bg-white rounded-[2rem] p-8 sm:p-10 md:p-12",
              "shadow-[0_20px_50px_rgba(42,33,28,0.06)] border border-[#2a211c]/5 md:ml-32"
            )}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#2a211c] mb-10"
            >
              The Full Plate <span className="text-[#c1272d] italic font-serif">Framework</span>
            </motion.h2>

            <div className="flex flex-col gap-6">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#fdf6ec] flex items-center justify-center group-hover:bg-[#f3e9dc] transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#2a211c] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#2a211c]/70 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Character Image - Stacks on top for mobile, absolute positioned perfectly on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-64 sm:w-80 md:w-[32rem] lg:w-[38rem] z-30 shrink-0 pointer-events-none md:absolute md:-top-[16%] lg:-top-[20%] md:-left-[15%] lg:-left-[18%] -mt-10 md:mt-0 order-first md:order-none"
          >
            {/* NOTE: Please ensure the uploaded image is saved as 'person.png' in the public folder */}
            <img 
              src="/person.png" 
              alt="The Full Plate Framework Guide"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
