"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);
  const [growing, setGrowing] = useState(false);

  useEffect(() => {
    // Loading screen is desktop-only — mobile skips straight to the hero.
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || reduced) {
      setVisible(false);
      return;
    }

    const growTimer = setTimeout(() => setGrowing(true), 2000);
    const hideTimer = setTimeout(() => setVisible(false), 2600);
    return () => {
      clearTimeout(growTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="hidden md:flex fixed inset-0 z-[200] items-center justify-center bg-[#fdf6ec]"
        >
          <motion.div
            animate={{
              scale: growing ? 3.5 : 1,
              opacity: growing ? 0 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-[240px] h-[240px]"
          >
            <Image
              src="/loader.png"
              alt="Webthism"
              fill
              priority
              sizes="240px"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
