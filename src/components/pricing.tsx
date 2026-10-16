"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eyebrow, MaskReveal, Reveal } from "@/components/ui/reveal";

const VISIBLE_FEATURES = 4;

const TIERS = [
  {
    name: "Starter",
    price: "₹15,000",
    delivery: "Delivery: 7–10 days",
    features: [
      "Up to 5 pages (Home, Menu, About, Gallery, Contact)",
      "Digital menu with food photos",
      "Responsive design (mobile + desktop)",
      "Google Maps & click-to-call integration",
      "Basic UI/UX design (template-based)",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹35,000",
    delivery: "Delivery: 15–20 days",
    features: [
      "Custom UI/UX design",
      "CMS integration — owner can update menu & prices",
      "Online table reservation system",
      "Local SEO (schema, sitemap, speed optimization)",
      "Up to 10–12 pages",
      "Google Business Profile setup & review management",
      "Social media & Instagram feed integration",
      "Basic animations/interactions",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹65,000",
    delivery: "Delivery: 25–30 days",
    features: [
      "Fully custom design (from scratch)",
      "Online ordering & payment integration",
      "Admin dashboard — manage menu, orders & staff access",
      "Integrations: Zomato, Swiggy, POS, WhatsApp ordering",
      "Unlimited pages (within scope)",
      "Advanced animations & micro-interactions",
      "Performance optimization (Core Web Vitals)",
      "Local SEO setup — Google Search Console & Webmaster Tools + review management strategy",
      "Priority support for 30 days post-launch",
    ],
    highlight: false,
  },
];

const CheckIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const Feature = ({ text, highlight }: { text: string; highlight: boolean }) => (
  <li className="flex items-start gap-3">
    <CheckIcon className={cn("w-5 h-5 shrink-0 mt-0.5", highlight ? "text-ember" : "text-brand-bright")} />
    <span className="text-sm leading-relaxed text-cream/70">{text}</span>
  </li>
);

function TierCard({ tier }: { tier: (typeof TIERS)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const extra = tier.features.slice(VISIBLE_FEATURES);

  return (
    <div
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={cn(
        "group relative h-full flex flex-col rounded-[2rem] p-8 sm:p-10 overflow-hidden",
        tier.highlight
          ? "bg-surface border border-ember/40 shadow-[0_0_80px_rgba(193,39,45,0.25)] md:-translate-y-4"
          : "bg-cream/[0.03] border border-cream/10"
      )}
    >
      {/* Cursor spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_var(--mx)_var(--my),rgba(232,121,46,0.12),transparent_45%)]" />

      <div className="relative flex items-center justify-between mb-6">
        <h3 className="font-heading text-xl font-bold text-cream">{tier.name}</h3>
        {tier.highlight && (
          <span className="rounded-full bg-brand px-3 py-1 text-[11px] font-heading font-bold uppercase tracking-wider text-white">
            Most Popular
          </span>
        )}
      </div>
      <p className="relative font-heading text-5xl font-black tracking-[-0.03em] text-cream mb-1">{tier.price}</p>
      <p className="relative text-sm text-cream/50 mb-8">{tier.delivery}</p>

      <ul className="relative flex flex-col gap-3">
        {tier.features.slice(0, VISIBLE_FEATURES).map((f) => (
          <Feature key={f} text={f} highlight={tier.highlight} />
        ))}
      </ul>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative flex flex-col gap-3 overflow-hidden pt-3"
          >
            {extra.map((f) => (
              <Feature key={f} text={f} highlight={tier.highlight} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="relative mt-4 mb-8 self-start text-sm font-medium text-cream/50 underline-offset-4 hover:text-cream hover:underline"
      >
        {expanded ? "Show less" : `+ ${extra.length} more included`}
      </button>

      <Button
        asChild
        size="lg"
        className={cn(
          "relative mt-auto w-full h-12 rounded-full font-heading font-black transition-all hover:scale-[1.03] active:scale-[0.97]",
          tier.highlight ? "bg-brand text-white hover:bg-brand-bright" : "bg-cream text-ink hover:bg-white"
        )}
      >
        <a href="#book">Get Started</a>
      </Button>
    </div>
  );
}

export const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-ink py-20 md:py-28 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
          <Eyebrow>Pricing</Eyebrow>
          <MaskReveal
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.02] text-cream"
            lines={[<>Pick your <span className="font-serif italic font-normal text-ember">plate.</span></>]}
          />
          <p className="mt-5 text-cream/50 text-base sm:text-lg">No commission on your orders. Ever.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 items-stretch">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <TierCard tier={tier} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-cream/10 px-6 py-5 sm:px-8">
          <p className="text-cream/70 text-sm sm:text-base">
            <span className="font-heading font-bold text-cream">Need something bigger?</span> Web apps, portals, marketplaces &amp; retainers — custom quote.
          </p>
          <a href="#book" className="shrink-0 font-heading font-bold text-sm text-ember hover:text-cream transition-colors">
            Book a discovery call →
          </a>
        </Reveal>
      </div>
    </section>
  );
};
