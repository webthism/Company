"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const StickyBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#fdf6ec]/90 backdrop-blur-xl border-black/5 py-3 shadow-sm"
          : "bg-transparent border-transparent py-4 md:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-normal font-logo text-[#2a211c] hover:opacity-80 transition-opacity">
          Webthism
        </Link>

        <Button
          asChild
          size="sm"
          className="rounded-full px-5 md:px-7 h-10 md:h-11 bg-[#c1272d] text-white font-heading font-bold tracking-tight hover:bg-[#a81f24] hover:scale-105 transition-all text-xs md:text-sm"
        >
          {/* Placeholder: replace with your Calendly booking link */}
          <a href="#book" aria-label="Book a free strategy call">
            Book a Free Call
          </a>
        </Button>
      </div>
    </nav>
  );
};
