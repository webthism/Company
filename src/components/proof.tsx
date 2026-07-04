"use client";

import { motion } from "framer-motion";

// Placeholder note: replace these three with real client case studies once available,
// e.g. "XYZ Café now gets 40% of orders direct — saving ₹15,000/month in commissions."
const CONCEPTS = [
  {
    name: "Concept: Saffron Table",
    caption: "Concept: Direct WhatsApp ordering flow that keeps 100% of every order",
  },
  {
    name: "Concept: Brew & Bean Café",
    caption: "Concept: One-tap table booking synced with Google Maps and business hours",
  },
  {
    name: "Concept: Coastal Kitchen",
    caption: "Concept: Food-photography-first landing page built for local SEO",
  },
];

export const Proof = () => {
  return (
    <section className="w-full min-h-[100svh] md:min-h-0 flex items-center py-16 md:py-0 px-5 md:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-10 md:mb-14"
        >
          Concept Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {CONCEPTS.map((concept, i) => (
            <motion.div
              key={concept.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl border border-[#e8dcc8] overflow-hidden"
            >
              {/* Placeholder: swap for a real screenshot of the concept site */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#f3e9dc] to-[#e8dcc8] flex items-center justify-center">
                <span className="font-sans text-xs uppercase tracking-widest text-[#7a6a5c]">Screenshot placeholder</span>
              </div>
              <div className="p-5 md:p-6">
                <p className="font-heading text-lg font-bold text-[#2a211c] mb-2">{concept.name}</p>
                <p className="font-sans text-sm text-[#7a6a5c] leading-relaxed">{concept.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
