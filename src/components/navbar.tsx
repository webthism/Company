"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/60 backdrop-blur-3xl border-white/5 py-4 shadow-2xl" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="/" className="text-3xl font-normal font-logo text-white hover:opacity-80 transition-opacity">
          Webthism
        </a>
        
        <div className="hidden md:flex items-center space-x-12">
          <a
            href="/reviews"
            className="font-heading font-bold tracking-tight text-xs uppercase text-muted-foreground hover:text-white transition-colors"
          >
            Reviews
          </a>
          <a
            href="/services"
            className="font-heading font-bold tracking-tight text-xs uppercase text-muted-foreground hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="/about"
            className="font-heading font-bold tracking-tight text-xs uppercase text-muted-foreground hover:text-white transition-colors"
          >
            About
          </a>
        </div>

        <a href="/#book">
          <Button
            size="sm"
            className="rounded-full px-8 bg-[#BD9DFF] text-black font-heading font-bold tracking-tight uppercase hover:scale-105 transition-transform"
          >
            Contact
          </Button>
        </a>
      </div>
    </nav>
  );
};
