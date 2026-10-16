"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fades + lifts its children in the first time they scroll into view. */
export function Reveal({
  delay = 0,
  y = 32,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...props}
    />
  );
}

/**
 * Heading whose lines slide up from behind a mask, one after another.
 * Plays on scroll-into-view, or when `play` flips true if it's provided.
 */
export function MaskReveal({
  lines,
  className,
  as = "h2",
  delay = 0,
  play,
}: {
  lines: ReactNode[];
  className?: string;
  as?: "h1" | "h2";
  delay?: number;
  play?: boolean;
}) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  const trigger =
    play === undefined
      ? { whileInView: "show", viewport: { once: true, amount: 0.4 } }
      : { animate: play ? "show" : "hidden" };

  return (
    <Tag
      className={className}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: 0.12, delayChildren: delay }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "110%" },
              show: { y: 0, transition: { duration: 1, ease: EASE } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Small uppercase label that sits above section headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-[0.25em] text-ember">
      <span className="h-px w-8 bg-ember" />
      {children}
    </p>
  );
}
