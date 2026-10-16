"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const StickyBar = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hide while scrolling down, reveal on any scroll up.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 10);
    setHidden(latest > prev && latest > 200);
  });

  return (
    <motion.nav
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 w-full z-[100] border-b transition-[background-color,border-color,padding] duration-300",
        isScrolled ? "bg-ink/70 backdrop-blur-xl border-cream/10 py-3" : "bg-transparent border-transparent py-4 md:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center gap-6">
        <Link href="/" className="text-2xl md:text-3xl font-normal font-logo text-cream hover:opacity-80 transition-opacity">
          Webthism
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-cream/60 hover:text-cream transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          asChild
          size="sm"
          className="rounded-full px-5 md:px-7 h-10 md:h-11 bg-brand text-white font-heading font-bold tracking-tight hover:bg-brand-bright hover:scale-105 transition-all text-xs md:text-sm"
        >
          <a href="#book" aria-label="Book a free strategy call">
            Book a Free Call
          </a>
        </Button>
      </div>

      {/* Scroll progress */}
      <motion.div style={{ scaleX: scrollYProgress }} className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-brand-bright" />
    </motion.nav>
  );
};
