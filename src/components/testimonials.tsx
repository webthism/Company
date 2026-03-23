"use client";

import { motion } from "framer-motion";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background Grid - Matching Global Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-8xl font-black tracking-tighter mb-8 text-white"
        >
          Voices from real <span className="text-[#BD9DFF] italic font-serif">business</span>
        </motion.h2>
        <p className="max-w-2xl mx-auto text-[#A1A1AA] text-lg md:text-xl font-sans font-light leading-relaxed">
          Don't just take our word for it. Our partners across the globe have experienced the Webthism transformation.
        </p>
      </div>

      {/* --- Staggered 3D Testimonial Carousel --- */}
      <div className="relative z-10">
        <StaggerTestimonials />
      </div>

      {/* Final Call to Action Tag */}
      <div className="mt-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#BD9DFF] animate-pulse" />
            <span className="text-xs font-heading font-medium tracking-widest uppercase text-[#A1A1AA]">
                20+ High-Performance Websites Launched
            </span>
        </div>
      </div>
    </section>
  );
};
