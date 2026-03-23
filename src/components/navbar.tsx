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
        <div className="text-2xl font-black tracking-tighter text-white">
          WebThism
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          {["Work", "Services", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-heading font-bold tracking-tight text-xs uppercase text-muted-foreground hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <Button
          size="sm"
          className="rounded-full px-8 font-heading font-bold tracking-tight uppercase hover:scale-105 transition-transform"
        >
          Contact
        </Button>
      </div>
    </nav>
  );
};
