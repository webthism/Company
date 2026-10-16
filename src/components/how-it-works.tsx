"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionStyle } from "framer-motion";
import { cn } from "@/lib/utils";
import { Eyebrow, MaskReveal, Reveal } from "@/components/ui/reveal";

const PANELS = [
  {
    tag: "Design",
    title: "A site that makes people hungry.",
    description: "Built around your food and photos — not a generic template.",
    glow: "from-ember/40",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  },
  {
    tag: "Convert",
    title: "Order, book, call — one tap.",
    description: "Menu, WhatsApp ordering, table booking and Maps, right where customers look. Zero commission.",
    glow: "from-brand/50",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h8m-8 4h5m-9 4l1.664-4.155A8 8 0 1112 20H4z" />,
  },
  {
    tag: "Grow",
    title: "Found when it matters.",
    description: "Local SEO for “best café near me”, plus a simple monthly report on visits and orders.",
    glow: "from-ember/30",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  },
  {
    tag: "Launch",
    title: "Live in as little as 7 days.",
    description: "One 20-minute call. We design and build. You start taking direct orders.",
    glow: "from-brand/40",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />,
  },
];

// Desktop track = 8vw pad + 4 × 60vw panels + 3 × 4vw gaps + 8vw pad = 268vw → shift 168vw.
const TRACK_SHIFT = "-168vw";

export const HowItWorks = () => {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0vw", TRACK_SHIFT]);

  return (
    <section id="how" ref={ref} className={cn("relative bg-ink", !reduced && "md:h-[400vh]")}>
      <div
        className={cn(
          "py-24 md:py-28",
          !reduced && "md:sticky md:top-0 md:h-screen md:py-0 md:flex md:flex-col md:justify-center md:overflow-hidden"
        )}
      >
        <div className="px-5 sm:px-6 md:px-[8vw] mb-10 md:mb-12 flex items-end justify-between gap-6">
          <div>
            <Eyebrow>How it works</Eyebrow>
            <MaskReveal
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.02] text-cream"
              lines={["From first call to", <span key="l2" className="font-serif italic font-normal text-ember">your first direct order.</span>]}
            />
          </div>
          {!reduced && (
            <div className="hidden md:block h-px w-40 bg-cream/10 mb-4">
              <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-ember" />
            </div>
          )}
        </div>

        <motion.div
          style={{ "--hx": x } as MotionStyle}
          className={cn(
            "flex flex-col gap-5 px-5 sm:px-6 md:flex-row md:w-max md:gap-[4vw] md:px-[8vw]",
            !reduced && "md:translate-x-(--hx)"
          )}
        >
          {PANELS.map((panel, i) => (
            <Reveal
              key={panel.tag}
              className="relative md:w-[60vw] md:h-[56vh] shrink-0 grid md:grid-cols-2 gap-8 overflow-hidden rounded-[2rem] border border-cream/10 bg-surface p-7 sm:p-10 md:p-12"
            >
              <div className="flex flex-col justify-between gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-sm font-bold text-cream/40">0{i + 1}</span>
                  <span className="rounded-full border border-cream/15 px-3 py-1 text-xs font-heading font-bold uppercase tracking-[0.2em] text-cream/70">
                    {panel.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.05] text-cream mb-4">
                    {panel.title}
                  </h3>
                  <p className="text-cream/60 text-base md:text-lg leading-relaxed max-w-md">{panel.description}</p>
                </div>
              </div>

              {/* ASSET: client screenshot — replace this visual with an <Image /> of a real site */}
              <div className="relative hidden md:flex items-center justify-center rounded-2xl border border-cream/10 bg-ink overflow-hidden">
                <div className={cn("absolute inset-0 bg-gradient-to-br via-transparent to-transparent", panel.glow)} />
                <svg className="relative w-24 h-24 text-cream/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  {panel.icon}
                </svg>
              </div>
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
