"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Optimization: Delay hydration-heavy interactive logic until main thread is idle
    // This pushes TBT down significantly without breaking the animation functionality.
    const handleIdle = (window as any).requestIdleCallback || ((cb: any) => setTimeout(cb, 50));
    const idleId = handleIdle(() => {
      setMounted(true);
    });
    return () => {
      if ((window as any).cancelIdleCallback) (window as any).cancelIdleCallback(idleId);
      else clearTimeout(idleId);
    };
  }, []);

  // --- 3D Tilt Physics ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 25 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

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
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] border-t border-white/10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [transform:rotateX(60deg)_translateY(50%)_translateZ(-200px)] [mask-image:linear-gradient(to_top,black,transparent)] opacity-40"
        />
        
        {/* Floating Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[50%] md:w-[40%] h-[40%] bg-primary/10 blur-[100px] md:blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[50%] md:w-[40%] h-[40%] bg-[#BD9DFF]/10 blur-[100px] md:blur-[150px] rounded-full animate-pulse delay-700" />
      </div>

      {/* --- Floating 3D Content Card --- */}
      <motion.div 
        style={mounted ? { rotateX, rotateY, transformStyle: "preserve-3d" } : { transformStyle: "preserve-3d" }}
        className="container mx-auto px-5 sm:px-6 relative z-10 py-6 md:py-10 rounded-3xl md:backdrop-blur-[2px] will-change-transform"
      >
        <div className="max-w-5xl mx-auto text-center" style={{ transformStyle: "preserve-3d" }}>
          {/* Headline - CSS Powered Reveal for Instant LCP metrics */}
          <h1
            style={mounted ? { transform: "translate3d(0, 0, 80px)", transformStyle: "preserve-3d" } : {}}
            className="font-heading text-[2.5rem] leading-[1] sm:text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight md:leading-[0.95] mb-5 md:mb-8 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] lcp-element"
          >
            Custom Websites That <br />
            Actually <span className="text-[#BD9DFF] italic font-serif">Convert</span>
          </h1>
          
          {/* Subtitle - translate3d for better performance */}
          <motion.p
            initial={mounted ? { opacity: 0, y: 15 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={mounted ? { transform: "translate3d(0, 0, 40px)", transformStyle: "preserve-3d" } : {}}
            className="max-w-3xl mx-auto text-[#A1A1AA] text-sm sm:text-base md:text-xl mb-8 md:mb-10 font-sans font-light leading-relaxed px-2"
          >
            We design, build, and scale high-performance digital experiences that turn visitors into loyal customers. No templates, just pure conversion.
          </motion.p>
          
          {/* Action Buttons - Crawlable for SEO */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 15 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ transform: "translateZ(100px)" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 px-4 sm:px-0"
          >
            <Link href="/#blueprint" scroll={true} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 rounded-full font-heading font-black text-sm sm:text-base md:text-lg bg-[#BD9DFF] text-[#1D1D1F] hover:bg-[#A984FF] transition-all hover:scale-[1.1] active:scale-[0.95] shadow-[0_10px_30px_rgba(189,157,255,0.4)]"
              >
                Free Website Checklist
              </Button>
            </Link>
            <Link href="/#testimonials" scroll={true} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 rounded-full font-heading font-black text-sm sm:text-base md:text-lg border-[#27272A] bg-transparent text-white hover:bg-white/10 transition-all hover:scale-[1.1] active:scale-[0.95]"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
