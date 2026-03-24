"use client";

import { motion } from "framer-motion";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export const Portfolio = () => {
  return (
    <section id="tech-stack" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background Grid - Matching Hero/Services */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white"
          >
            Fully Custom Coded <br /><span className="text-[#BD9DFF] italic font-serif">Websites</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-[#A1A1AA] text-lg md:text-xl font-sans font-light leading-relaxed">
            We use a world-class technology stack to ensure your website is fast, secure, and infinitely scalable.
          </p>
        </div>

        {/* --- Interactive Icon Cloud --- */}
        <div className="relative flex size-full max-w-4xl mx-auto items-center justify-center overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm p-4 md:p-20">
            {/* Subtle glow behind cloud */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
                className="w-full h-full relative z-10"
            >
                <IconCloud iconSlugs={slugs} />
            </motion.div>
        </div>
      </div>
    </section>
  );
};
