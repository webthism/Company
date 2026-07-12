"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CHECKLIST_ITEMS = [
  "Mobile-first responsive design",
  "Fast loading speed (under 3 seconds)",
  "Clear menu with prices and photos",
  "Direct WhatsApp/online ordering — no commission",
  "Google Maps & location embedded",
  "One-tap click-to-call button",
  "Table reservation / booking system",
  "Real customer reviews & testimonials",
  "SEO optimized for local search",
  "Social media integration",
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export const Checklist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const close = () => {
    setIsOpen(false);
    setEmail("");
    setSubmitting(false);
    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/checklist-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Signup failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative w-full bg-[#f3e9dc] py-20 md:py-32 px-5 sm:px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-16"
        >
          10 Things Every <span className="text-[#c1272d] italic font-serif">Restaurant Website</span> Must Have
        </motion.h2>

        <div className="flex flex-col gap-4 w-full mb-12">
          {CHECKLIST_ITEMS.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
              className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#2a211c]/5"
            >
              <div className="w-8 h-8 shrink-0 rounded-full bg-[#c1272d] flex items-center justify-center">
                <CheckIcon />
              </div>
              <p className="text-[#2a211c] text-base sm:text-lg font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="h-12 sm:h-14 px-8 sm:px-12 rounded-full font-heading font-black text-sm sm:text-base bg-[#2a211c] text-white hover:bg-[#2a211c]/85 transition-all hover:scale-[1.03] active:scale-[0.97]"
        >
          Get the Free Detailed Checklist PDF
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[150] bg-black/50 flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl"
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-5 right-5 text-[#2a211c]/40 hover:text-[#2a211c] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {submitted ? (
                <div className="text-center py-6">
                  <h3 className="font-heading text-2xl font-bold text-[#2a211c] mb-2">
                    Check your email!
                  </h3>
                  <p className="text-[#2a211c]/70">
                    We just sent the checklist to <span className="font-medium">{email}</span>.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-2xl font-bold text-[#2a211c] mb-2">
                    Get the Free Checklist
                  </h3>
                  <p className="text-[#2a211c]/70 mb-6">
                    Enter your email and we&apos;ll send the full PDF straight to your inbox.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@restaurant.com"
                      className="w-full h-12 px-4 rounded-full border border-[#2a211c]/15 text-[#2a211c] placeholder:text-[#2a211c]/40 focus:outline-none focus:ring-2 focus:ring-[#c1272d]/40"
                    />
                    <Button
                      type="submit"
                      disabled={submitting}
                      className={cn(
                        "w-full h-12 rounded-full font-heading font-black bg-[#c1272d] text-white hover:bg-[#a81f24] transition-all",
                        submitting && "opacity-70"
                      )}
                    >
                      {submitting ? "Sending..." : "Send Me the Checklist"}
                    </Button>
                    {error && (
                      <p className="text-sm text-[#c1272d] text-center">{error}</p>
                    )}
                  </form>
                  <button
                    onClick={close}
                    className="w-full text-center text-sm text-[#2a211c]/50 hover:text-[#2a211c] mt-4 transition-colors"
                  >
                    Maybe later
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
