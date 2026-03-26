"use client";

import { Badge } from "@/components/ui/badge";

import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical build take?",
    answer:
      "For standard agency sites, we typically deliver within 3-4 weeks. More complex ecosystems with custom automation logic can take 6-8 weeks. We provide a transparent roadmap on day one.",
  },
  {
    question: "Do I really own the code?",
    answer:
      "Yes! Unlike many agencies that hold you hostage with proprietary platforms, we build everything with clean, modern code that you own 100% from day one.",
  },
  {
    question: "What is 'Conversion-First' design?",
    answer:
      "It means we don't just build 'pretty' sites. Every pixel, heading, and button is engineered based on psychological sales triggers and user behavior data to maximize your ROI.",
  },
  {
    question: "Is there a long-term contract requirement?",
    answer:
      "No. We believe in earning your business every month. While our growth systems work best over time, we don't lock you into restrictive long-term contracts.",
  },
  {
    question: "Can you help with my existing site?",
    answer:
      "Absolutely. We offer full audits and optimization services for existing sites to improve speed, design, and conversion without necessarily starting from scratch.",
  },
  {
    question: "How does the lead follow-up automation work?",
    answer:
      "Our system captures every lead instantly and triggers an immediate response (like a text-back or chat message), ensuring you're the first to engage while the lead is hot.",
  },
];

export function FAQAccordionBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-black px-4 py-16 md:py-48 relative overflow-hidden">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#BD9DFF]/5 blur-[160px] -z-10 rounded-full opacity-30" />
      
      <div className="mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-24"
        >
          <Badge className="mb-4 md:mb-6 bg-[#BD9DFF]/20 text-[#BD9DFF] border-[#BD9DFF]/20 px-3 md:px-4 py-1 md:py-1.5 text-xs" variant="secondary">
            <HelpCircle className="mr-2 h-3 w-3 md:h-3.5 md:w-3.5" />
            Clear Answers
          </Badge>
          <h2 className="mb-5 md:mb-8 font-heading text-3xl font-black tracking-tighter sm:text-5xl md:text-7xl text-white">
            Frequently Asked <span className="text-[#BD9DFF] italic font-serif">Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-lg text-[#A1A1AA] font-sans font-extralight italic px-2">
            Everything you need to know about partnering with Webthism. Transparent, direct, and focused on your growth.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className={cn(
                  "overflow-hidden border-white/5 bg-white/[0.02] transition-all duration-500 rounded-xl md:rounded-[2rem]",
                  isOpen ? "border-[#BD9DFF]/30 bg-white/[0.04]" : "hover:border-white/20"
                )}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left md:p-10 cursor-pointer"
                  >
                    <span className={cn(
                      "pr-4 md:pr-6 text-base font-heading font-bold transition-all md:text-2xl",
                      isOpen ? "text-[#BD9DFF]" : "text-white"
                    )}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className={cn(
                        "h-5 w-5 md:h-6 md:w-6 transition-colors",
                        isOpen ? "text-[#BD9DFF]" : "text-[#A1A1AA]"
                      )} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/5 p-5 md:p-10 pt-0">
                          <motion.p
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            className="text-sm text-[#A1A1AA] font-sans font-light leading-relaxed md:text-xl"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Helper function in case cn is not correctly set up for this specific file scope
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
