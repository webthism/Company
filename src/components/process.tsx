"use client";

import { motion } from "framer-motion";
import { Search, PhoneCall, Rocket, CreditCard, Layout } from "lucide-react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

const EnergyWire = ({ index }: { index: number }) => {
  return (
    <div className={cn(
        "absolute top-[160px] hidden xl:block overflow-visible pointer-events-none z-0",
        index === 0 ? "left-[18%] w-[15%]" : 
        index === 1 ? "left-[43%] w-[15%]" : 
        "left-[68%] w-[15%]"
    )}>
        <svg viewBox="0 0 200 20" className="w-full h-8" preserveAspectRatio="none">
            <motion.path
                d="M 0 10 L 200 10"
                fill="none"
                stroke="#BD9DFF"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.2"
            />
            <motion.path
                d="M 0 10 L 200 10"
                fill="none"
                stroke="#BD9DFF"
                strokeWidth="2"
                strokeDasharray="20 180"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: -200 }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 3, 
                    ease: "linear",
                    delay: index * 1 
                }}
            />
        </svg>
    </div>
  );
};

const ProcessStep = ({ step, index }: { step: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8,
        ease: "easeOut"
      }}
      whileHover={{ y: -8 }}
      className="relative z-10 flex flex-col items-center group"
    >
      {/* Node Pod */}
      <div className="relative mb-10 w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl group-hover:border-[#BD9DFF]/40 transition-all duration-500" />
          <div className="absolute inset-2 rounded-xl bg-[#BD9DFF]/5 group-hover:bg-[#BD9DFF]/15 blur-lg transition-all" />
          <step.icon size={32} strokeWidth={1} className="text-white group-hover:text-[#BD9DFF] transition-colors relative z-10" />
          
          <div className="absolute -top-3 -right-3 font-heading text-3xl font-black text-white/5 group-hover:text-[#BD9DFF]/20 italic transition-all">
            0{index + 1}
          </div>
      </div>

      <div className="text-center px-4">
          <h3 className="font-heading text-xl font-bold mb-4 text-white group-hover:text-[#BD9DFF] transition-colors tracking-tight">
            {step.title}
          </h3>
          <p className="text-[#A1A1AA] text-sm font-sans font-light leading-relaxed max-w-[200px] mx-auto group-hover:text-white/80 transition-colors">
            {step.description}
          </p>
      </div>
    </motion.div>
  );
};

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const steps = [
    {
      icon: Search,
      title: "Free Audit",
      description: "We deep-dive into your analytics to find the leaks in your funnel.",
    },
    {
      icon: PhoneCall,
      title: "Strategy Making",
      description: "We draft a battle plan to align your brand with high-performance goals.",
    },
    {
      icon: Layout,
      title: "The Build",
      description: "We engineer your custom platform with pixel-perfect precision.",
    },
    {
      icon: Rocket,
      title: "Publish",
      description: "We launch your high-conversion site and start scaling your growth.",
    },
  ];

  return (
    <section ref={containerRef} className="relative py-48 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-8xl font-black tracking-tighter mb-8 text-white uppercase"
          >
            The <span className="text-[#BD9DFF] italic font-serif">Workflow</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-[#A1A1AA] text-lg font-sans font-extralight tracking-widest uppercase opacity-60">
            A 4-step framework for extraordinary performance.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 relative">
          {/* Energy Wires for 4 Steps */}
          <EnergyWire index={0} />
          <EnergyWire index={1} />
          <EnergyWire index={2} />

          {steps.map((step, index) => (
            <ProcessStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
