"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eyebrow, MaskReveal, Reveal } from "@/components/ui/reveal";

const FAQS = [
  {
    question: "How is this different from just using Zomato or Swiggy?",
    answer:
      "Aggregators take up to 30% commission per order and own your customer data. Your own website means direct orders, no commission, and a customer list you actually control.",
  },
  {
    question: "How long does it take to build my website?",
    answer:
      "Starter sites take 7–10 days, Growth sites 15–20 days, and Premium builds 25–30 days depending on scope. You'll get a firm timeline after our discovery call.",
  },
  {
    question: "Will I be able to update the site myself?",
    answer:
      "Growth and Premium packages include CMS access, so you can edit menu items, prices, and content without touching code. Starter sites are template-based and updated by us on request.",
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
    <section id="faq" className="relative w-full bg-ink py-20 md:py-28 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-16">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <MaskReveal
            className="font-heading text-4xl sm:text-5xl font-black tracking-[-0.03em] leading-[1.02] text-cream"
            lines={["Questions,", <span key="l2" className="font-serif italic font-normal text-ember">answered.</span>]}
          />
        </div>

        <div className="flex flex-col border-t border-cream/10">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.06} className="border-b border-cream/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-heading text-lg md:text-xl font-bold text-cream group-hover:text-ember transition-colors">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream text-xl leading-none"
                    aria-hidden
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-cream/60 text-base leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
