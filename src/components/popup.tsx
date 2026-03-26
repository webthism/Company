"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenPopup");
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenPopup", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-10 sm:right-10 z-[100] sm:max-w-sm w-auto sm:w-full"
        >
          <div className="bg-zinc-900 border border-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors p-1"
            >
              <X size={20} />
            </button>

            <div className="mb-4 sm:mb-6 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center bg-primary/20 text-primary">
              <Gift size={20} className="sm:hidden" />
              <Gift size={24} className="hidden sm:block" />
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-black tracking-tighter mb-3 sm:mb-4 text-white pr-6">
              Claim Your Free <br /> Website Audit
            </h3>
            
            <p className="text-muted-foreground font-sans text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
              Limited slots available this week! Get a expert breakdown of your site&apos;s performance and conversion potential.
            </p>

            <Link href="/#book" onClick={closePopup}>
              <Button
                className="w-full py-5 sm:py-6 rounded-xl font-heading font-bold bg-primary text-primary-foreground hover:scale-105 transition-transform text-sm sm:text-base"
              >
                Get Free Audit Now
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
