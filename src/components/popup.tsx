"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          className="fixed bottom-10 right-10 z-[100] max-w-sm w-full"
        >
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-6 w-12 h-12 rounded-2xl flex items-center justify-center bg-primary/20 text-primary">
              <Gift size={24} />
            </div>

            <h3 className="font-heading text-2xl font-black tracking-tighter mb-4 text-white">
              Claim Your Free <br /> Website Audit
            </h3>
            
            <p className="text-muted-foreground font-sans text-sm mb-8 leading-relaxed">
              Limited slots available this week! Get a expert breakdown of your site's performance and conversion potential.
            </p>

            <Button
              className="w-full py-6 rounded-xl font-heading font-bold bg-primary text-primary-foreground hover:scale-105 transition-transform"
              onClick={() => {
                window.location.href = "#book";
                closePopup();
              }}
            >
              Get Free Audit Now
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
