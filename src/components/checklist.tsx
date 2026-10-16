"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

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
    <section className="relative w-full bg-ink pb-20 md:pb-28 px-5 sm:px-6">
      <Reveal className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-cream/10 bg-surface p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ember/20 blur-[100px]" />
        <div className="relative">
          <p className="mb-3 text-xs font-heading font-bold uppercase tracking-[0.25em] text-ember">Free PDF</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black tracking-[-0.02em] text-cream max-w-lg">
            10 things every restaurant website <span className="font-serif italic font-normal text-ember">must have.</span>
          </h2>
        </div>
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="relative shrink-0 h-14 px-8 rounded-full font-heading font-black text-sm sm:text-base bg-cream text-ink hover:bg-white transition-all hover:scale-[1.03] active:scale-[0.97]"
        >
          Get the Checklist
        </Button>
      </Reveal>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            data-lenis-prevent
            className="fixed inset-0 z-[150] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-surface border border-cream/10 rounded-3xl p-8 sm:p-10 shadow-2xl"
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-5 right-5 text-cream/40 hover:text-cream transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {submitted ? (
                <div className="text-center py-6">
                  <h3 className="font-heading text-2xl font-bold text-cream mb-2">
                    Check your email!
                  </h3>
                  <p className="text-cream/70">
                    We just sent the checklist to <span className="font-medium">{email}</span>.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-2xl font-bold text-cream mb-2">
                    Get the Free Checklist
                  </h3>
                  <p className="text-cream/70 mb-6">
                    Enter your email and we&apos;ll send the full PDF straight to your inbox.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@restaurant.com"
                      className="w-full h-12 px-4 rounded-full border border-cream/15 bg-ink text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-ember/50"
                    />
                    <Button
                      type="submit"
                      disabled={submitting}
                      className={cn(
                        "w-full h-12 rounded-full font-heading font-black bg-brand text-white hover:bg-brand-bright transition-all",
                        submitting && "opacity-70"
                      )}
                    >
                      {submitting ? "Sending..." : "Send Me the Checklist"}
                    </Button>
                    {error && (
                      <p className="text-sm text-brand-bright text-center">{error}</p>
                    )}
                  </form>
                  <button
                    onClick={close}
                    className="w-full text-center text-sm text-cream/50 hover:text-cream mt-4 transition-colors"
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
