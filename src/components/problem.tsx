"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/reveal";

const LINES = [
  "Every order through Zomato or Swiggy costs you up to 30%.",
  "They own your customers. You can't reach them again.",
  "And on the app, you look just like the place next door.",
];

// Words light up one by one between 30% and 90% of the pinned scroll.
let counter = 0;
const WORDS = LINES.map((line) => line.split(" ").map((word) => ({ word, n: counter++ })));
const TOTAL = counter;

export const Problem = () => {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const percent = useTransform(scrollYProgress, [0, 0.3], [0, 30], { clamp: true });
  const percentText = useTransform(percent, (v) => `${Math.round(v)}%`);
  const [lit, setLit] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setLit(Math.round(Math.min(Math.max((v - 0.3) / 0.6, 0), 1) * TOTAL))
  );

  return (
    <section id="problem" ref={ref} className={cn("relative bg-ink", !reduced && "h-[260vh]")}>
      <div className={cn("flex items-center px-5 sm:px-6", reduced ? "py-24" : "sticky top-0 h-[100svh]")}>
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-center">
          <div>
            <Eyebrow>The problem</Eyebrow>
            <motion.p className="font-heading font-black tracking-[-0.06em] leading-none text-[7rem] sm:text-[10rem] md:text-[13rem] text-brand-bright">
              {reduced ? "30%" : percentText}
            </motion.p>
            <p className="mt-2 text-cream/50 text-base sm:text-lg">of every order, gone to commission.</p>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {WORDS.map((line, li) => (
              <p key={li} className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-snug tracking-tight text-cream">
                {line.map(({ word, n }) => (
                  <span
                    key={n}
                    className={cn("transition-opacity duration-300", !reduced && n >= lit && "opacity-15")}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
