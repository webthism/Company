"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "How much does a website cost?",
    answer: "Anywhere from ₹20k–₹1L depending on features. Food trucks and small cafés usually fit the Starter tier, most restaurants land in Growth, and chains or fine dining go Premium.",
  },
  {
    question: "How long does it take?",
    answer: "Most sites go live in 7–14 days.",
  },
  {
    question: "Do you also handle food photography?",
    answer: "We can guide you or connect you with a local food photographer.",
  },
  {
    question: "Will it work alongside Zomato/Swiggy?",
    answer: "Yes — your website complements them and builds your direct channel so you rely on them less.",
  },
  {
    question: "What if I already have a website?",
    answer: "We'll audit it free and tell you honestly whether to rebuild or improve it.",
  },
  {
    question: "Is there any ongoing cost?",
    answer: "Hosting/domain basics + 30 days free support included.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-16 md:py-28 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-10 md:mb-14"
        >
          Questions, Answered
        </motion.h2>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={cn(
                  "rounded-2xl border overflow-hidden transition-colors",
                  isOpen ? "border-[#c1272d]/40 bg-white" : "border-[#e8dcc8] bg-white/60"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-[#2a211c] text-sm md:text-base">
                    {faq.question}
                  </span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0">
                    <ChevronDown size={18} className="text-[#7a6a5c]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 font-sans text-sm text-[#7a6a5c] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
