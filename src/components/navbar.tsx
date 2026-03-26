"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/reviews", label: "Reviews" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
    <nav
      className={cn(
        "fixed top-0 w-full z-[101] transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/60 backdrop-blur-3xl border-white/5 py-3 md:py-4 shadow-2xl" : "bg-transparent py-4 md:py-6"
      )}
    >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
          <a href="/" className="text-2xl md:text-3xl font-normal font-logo text-white hover:opacity-80 transition-opacity z-50">
            Webthism
          </a>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading font-bold tracking-tight text-xs uppercase text-muted-foreground hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Contact Button - always visible */}
            <a href="/#book" className="hidden sm:block">
              <Button
                size="sm"
                className="rounded-full px-6 md:px-8 bg-[#BD9DFF] text-black font-heading font-bold tracking-tight uppercase hover:scale-105 transition-transform text-xs"
              >
                Contact
              </Button>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:border-[#BD9DFF]/50 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] md:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8 px-8"
            >
              {/* Ambient glow */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-[#BD9DFF]/10 blur-[120px] rounded-full pointer-events-none" />
              
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-heading text-4xl font-black tracking-tighter text-white hover:text-[#BD9DFF] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-4"
              >
                <a href="/#book" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    size="lg"
                    className="rounded-full px-12 h-14 bg-[#BD9DFF] text-black font-heading font-bold tracking-tight uppercase hover:scale-105 transition-transform text-base"
                  >
                    Contact Us
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
