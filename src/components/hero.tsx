"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- 3D Tilt Physics ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] pt-20 md:pt-24 flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-primary/30 [perspective:1200px]"
    >
      {/* --- Dynamic 3D Environment --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* 3D Floor Grid */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] border-t border-white/10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [transform:rotateX(60deg)_translateY(50%)_translateZ(-200px)] [mask-image:linear-gradient(to_top,black,transparent)]"
        />
        
        {/* Floating Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[50%] md:w-[40%] h-[40%] bg-primary/20 blur-[100px] md:blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[50%] md:w-[40%] h-[40%] bg-[#BD9DFF]/20 blur-[100px] md:blur-[150px] rounded-full animate-pulse delay-700" />
      </div>

      {/* --- Floating 3D Content Card --- */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="container mx-auto px-5 sm:px-6 relative z-10 py-6 md:py-10 rounded-3xl backdrop-blur-[2px]"
      >
        <div className="max-w-5xl mx-auto text-center" style={{ transform: "translateZ(50px)" }}>
          {/* Headline with Depth */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-[2.5rem] leading-[1] sm:text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight md:leading-[0.95] mb-5 md:mb-8 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          >
            Custom Websites That <br />
            Actually <span className="text-[#BD9DFF] italic font-serif">Convert</span>
          </motion.h1>
          
          {/* Subtitle with Depth */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-3xl mx-auto text-[#A1A1AA] text-sm sm:text-base md:text-xl mb-8 md:mb-10 font-sans font-light leading-relaxed [transform:translateZ(30px)] px-2"
          >
            We design, build, and scale high-performance digital experiences that turn visitors into loyal customers. No templates, just pure conversion.
          </motion.p>
          
          {/* 3D Interactive Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 [transform:translateZ(80px)] px-4 sm:px-0"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 rounded-full font-heading font-black text-sm sm:text-base md:text-lg bg-[#BD9DFF] text-[#1D1D1F] hover:bg-[#A984FF] transition-all hover:scale-[1.1] active:scale-[0.95] shadow-[0_10px_30px_rgba(189,157,255,0.4)]"
              onClick={() => document.getElementById('blueprint')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Free Website Checklist
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 rounded-full font-heading font-black text-sm sm:text-base md:text-lg border-[#27272A] bg-transparent text-white hover:bg-white/10 transition-all hover:scale-[1.1] active:scale-[0.95]"
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
