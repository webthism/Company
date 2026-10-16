"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eyebrow, MaskReveal, Reveal } from "@/components/ui/reveal";

// Each screenshot drifts at its own speed and straightens as it scrolls through.
const SHOTS = [
  { src: "/IMG_20260708_142045.jpg", tilt: -6, drift: 60 },
  { src: "/IMG_20260708_142108.jpg", tilt: 4, drift: -40 },
  { src: "/IMG_20260708_142136.jpg", tilt: -3, drift: 90 },
];

const VIDEOS = ["/proof-mahesh-DeKnlCIb.mp4", "/yash-testimonial.mp4"];

function Shot({ src, tilt, drift }: (typeof SHOTS)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [tilt, tilt / 3, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className="overflow-hidden rounded-2xl border border-cream/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-[scale] duration-500 hover:scale-[1.03]"
    >
      <img src={src} alt="Client testimonial" className="w-full h-auto object-cover" />
    </motion.div>
  );
}

export const TestimonialSection = () => {
  return (
    <section className="relative w-full bg-ink py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <Eyebrow>Proof</Eyebrow>
          <MaskReveal
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.02] text-cream"
            lines={["Don't take our word", <span key="l2" className="font-serif italic font-normal text-ember">for it.</span>]}
          />
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6 md:gap-10 items-start mb-24 md:mb-32 max-w-sm sm:max-w-none mx-auto">
          {SHOTS.map((shot) => (
            <Shot key={shot.src} {...shot} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-10">
          {VIDEOS.map((src, i) => (
            <Reveal key={src} delay={i * 0.15}>
              <div className="rounded-[2rem] border border-cream/10 bg-surface p-2 md:p-3 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
                <div className="overflow-hidden rounded-[1.5rem] bg-black flex justify-center items-center h-[60vh]">
                  <video src={src} controls className="h-full w-auto object-contain" preload="metadata" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
