"use client";

import { motion } from "framer-motion";

export const Booking = () => {
  return (
    <div className="w-full h-[800px] bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl relative group">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
      
      {/* Google Calendar Iframe */}
      <iframe 
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Goi0DwVVyg0AvW3y9ckRk3RrQ5k2fSxEiDbWNFSeVZnokG6jyPWwly5DWehBe5RCBssJBpJFT?gv=true" 
        style={{ border: 0 }} 
        width="100%" 
        height="100%" 
        frameBorder="0"
        className="invert-[0.9] hue-rotate-180 brightness-110 contrast-110 grayscale-[0.2]"
        title="Webthism Strategy Session Booking"
      ></iframe>

      {/* Mobile Overlay Link (In case iframe is too small) */}
      <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)]">
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://calendar.app.google/VqvQhEfWUE6uPC5KA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#BD9DFF] text-black py-5 rounded-2xl font-heading font-black text-lg shadow-[0_20px_40px_-10px_rgba(189,157,255,0.4)]"
        >
          Open Booking Interface
        </motion.a>
      </div>

      {/* Decorative Border Glow */}
      <div className="absolute inset-0 border border-white/5 rounded-[3rem] pointer-events-none group-hover:border-[#BD9DFF]/30 transition-colors duration-700" />
    </div>
  );
};
