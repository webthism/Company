"use client";

import { motion } from "framer-motion";

export const Booking = () => {
  return (
    <div className="w-full h-[500px] md:h-[800px] bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl relative group">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
      
      {/* Google Calendar Iframe - Hidden on mobile, shown on md+ */}
      <iframe 
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Goi0DwVVyg0AvW3y9ckRk3RrQ5k2fSxEiDbWNFSeVZnokG6jyPWwly5DWehBe5RCBssJBpJFT?gv=true" 
        style={{ border: 0 }} 
        width="100%" 
        height="100%" 
        frameBorder="0"
        className="hidden md:block invert-[0.9] hue-rotate-180 brightness-110 contrast-110 grayscale-[0.2]"
        title="Webthism Strategy Session Booking"
      ></iframe>

      {/* Mobile: Show a clean card with CTA button instead of squished iframe */}
      <div className="md:hidden flex flex-col items-center justify-center h-full px-8 text-center relative z-10">
        <div className="mb-6 w-16 h-16 rounded-2xl bg-[#BD9DFF]/10 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#BD9DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-black tracking-tighter text-white mb-3">
          Book Your Session
        </h3>
        <p className="text-[#A1A1AA] font-sans font-light text-sm mb-8 max-w-xs leading-relaxed">
          Schedule your free strategy call with our team. Pick a time that works best for you.
        </p>
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://calendar.app.google/VqvQhEfWUE6uPC5KA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full max-w-xs bg-[#BD9DFF] text-black py-4 rounded-2xl font-heading font-black text-base shadow-[0_20px_40px_-10px_rgba(189,157,255,0.4)]"
        >
          Open Booking Calendar
        </motion.a>
      </div>

      {/* Decorative Border Glow */}
      <div className="absolute inset-0 border border-white/5 rounded-2xl md:rounded-[3rem] pointer-events-none group-hover:border-[#BD9DFF]/30 transition-colors duration-700" />
    </div>
  );
};
