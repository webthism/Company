"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FAQS = [
  {
    question: "How long does it take to build my website?",
    answer:
      "Starter sites take 7–10 days, Growth sites 15–20 days, and Premium builds 25–30 days depending on scope. You'll get a firm timeline after our discovery call.",
  },
  {
    question: "Do I need to give you all the content and photos?",
    answer:
      "You send us your menu, photos, and business details — we handle the writing, design, and structure. If you don't have professional photos yet, we can guide you on what to shoot.",
  },
  {
    question: "Will I be able to update the site myself?",
    answer:
      "Growth and Premium packages include CMS access, so you can edit menu items, prices, and content without touching code. Starter sites are template-based and updated by us on request.",
  },
  {
    question: "How is this different from just using Zomato or Swiggy?",
    answer:
      "Aggregators take up to 30% commission per order and own your customer data. Your own website means direct orders, no commission, and a customer list you actually control.",
  },
  {
    question: "What if I need changes after the site launches?",
    answer:
      "Every package includes revision rounds during the build, and Premium includes 30 days of priority support post-launch. After that, we offer ongoing maintenance plans.",
  },
  {
    question: "Do you help with SEO so people can find us on Google?",
    answer:
      "Yes — Growth and Premium packages include SEO setup (sitemap, schema, speed optimization) plus Google Business and Search Console configuration so you show up in local search.",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-white py-20 md:py-32 px-5 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-16"
        >
          Questions, <span className="text-[#c1272d] italic font-serif">Answered</span>
        </motion.h2>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="bg-[#fdf6ec] rounded-2xl border border-[#2a211c]/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-heading text-lg font-bold text-[#2a211c]">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <svg className="w-5 h-5 text-[#c1272d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[#2a211c]/70 text-base leading-relaxed">
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
