"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { button, cn } from "@/lib/utils";
import { TextRepel } from "@/components/ui/text-repel";
import { EASE, MaskReveal } from "@/components/ui/reveal";

const MARQUEE = ["Cafés", "Cloud Kitchens", "Bakeries", "Fine Dining", "QSRs", "Bars & Lounges", "Food Trucks", "Dessert Shops"];

export const Hero = ({ ready }: { ready: boolean }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`);
      }}
      className="relative min-h-[100svh] flex flex-col overflow-hidden bg-ink [--gx:50%] [--gy:40%]"
    >
      {/* ASSET: hero food photo — drop an <Image fill className="object-cover opacity-30" /> here when ready */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-ember/20 blur-[140px]" />
        <div className="absolute -bottom-40 -right-20 h-[32rem] w-[32rem] rounded-full bg-brand/25 blur-[140px]" />
        {/* Cursor-follow glow */}
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--gx)_var(--gy),rgba(232,121,46,0.14),transparent_45%)]" />
        {/* Faint grid for depth */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#f5ece0_1px,transparent_1px),linear-gradient(to_bottom,#f5ece0_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-5 sm:px-6 pt-28 pb-16 text-center"
      >
        <motion.p
          {...fadeIn(0)}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-xs sm:text-sm font-medium text-cream/80 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          Websites built only for restaurants &amp; cafés
        </motion.p>

        <MaskReveal
          as="h1"
          play={ready}
          delay={0.15}
          className="font-heading font-black tracking-[-0.04em] leading-[0.95] text-cream text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
          lines={[
            "We Build Websites",
            <>
              That Turn{" "}
              <TextRepel text="Hungry Googlers" className="font-serif italic font-normal text-ember" />
            </>,
            <TextRepel key="l3" text="Into Paying Customers" className="font-serif italic font-normal text-brand-bright" />,
          ]}
        />

        <motion.p {...fadeIn(0.6)} className="mt-8 max-w-xl text-base sm:text-lg text-cream/60 leading-relaxed">
          Online menus, WhatsApp ordering and table bookings — so every order is yours, not Zomato&apos;s.
        </motion.p>

        <motion.div {...fadeIn(0.75)} className="mt-10 flex w-full flex-col sm:w-auto sm:flex-row items-center gap-3 sm:gap-4">
          <a
            href="#book"
            className={cn(button, "w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 rounded-full font-heading font-black text-sm sm:text-base bg-brand text-white hover:bg-brand-bright transition-all hover:scale-[1.04] active:scale-[0.97] shadow-[0_0_60px_rgba(193,39,45,0.45)]")}
          >
            Book a Free 20-Min Strategy Call
          </a>
          <a
            href="#calculator"
            className="group inline-flex h-14 md:h-16 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-cream/15 px-8 text-sm sm:text-base font-heading font-bold text-cream/80 transition-colors hover:border-cream/40 hover:text-cream"
          >
            See what you&apos;re losing
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Marquee strip */}
      <motion.div {...fadeIn(1)} className="relative z-10 border-y border-cream/10 py-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee" aria-hidden>
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 font-heading text-lg md:text-2xl font-bold text-cream/30 whitespace-nowrap">
              {item}
              <span className="text-brand-bright">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
