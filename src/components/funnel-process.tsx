"use client";

import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: PhoneCall,
    title: "30-Min Discovery Call",
    description: "We understand your restaurant, goals, and current online presence.",
  },
  {
    icon: ClipboardList,
    title: "Custom Growth Plan",
    description: "You get a clear plan — valuable even if we never work together.",
  },
  {
    icon: Rocket,
    title: "We Build & Launch",
    description: "Your site goes live in 7–14 days, ready to take orders.",
  },
];

export const FunnelProcess = () => {
  return (
    <section className="w-full py-16 md:py-28 px-5 md:px-8 bg-[#f3e9dc]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-12 md:mb-16"
        >
          What Happens After You Book
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center"
            >
              <div className="relative mx-auto mb-5 w-16 h-16 rounded-2xl bg-[#c1272d] text-white flex items-center justify-center">
                <step.icon size={28} />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#2a211c] text-white text-xs font-heading font-black flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-[#2a211c] mb-2">{step.title}</h3>
              <p className="font-sans text-sm text-[#7a6a5c] leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
