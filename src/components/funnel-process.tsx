"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Free Strategy Call",
    description: "We hop on a 20-min call, look at your current site (or lack of one), and map out exactly what your restaurant needs.",
    icon: (
      <svg className="w-6 h-6 text-[#c1272d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "We Design & Build",
    description: "Your custom, mobile-first site takes shape around your menu and photos — usually live within 7–10 days.",
    icon: (
      <svg className="w-6 h-6 text-[#c1272d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "You Start Getting Orders",
    description: "We launch it, hook up WhatsApp/online ordering, and you start taking direct bookings — no commission cut.",
    icon: (
      <svg className="w-6 h-6 text-[#c1272d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export const FunnelProcess = () => {
  return (
    <section className="relative w-full bg-[#f3e9dc] py-20 md:py-32 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-16"
        >
          What Happens <span className="text-[#c1272d] italic font-serif">After You Book</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center gap-5"
            >
              <div className="relative w-16 h-16 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#2a211c]/5">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#c1272d] text-white text-sm font-heading font-black flex items-center justify-center shadow-md">
                  {i + 1}
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#2a211c] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#2a211c]/70 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
