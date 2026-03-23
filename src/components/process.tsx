"use client";

import { motion } from "framer-motion";
import { Search, PhoneCall, Rocket } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Free Audit",
      description: "We analyze your current site and find the 'leaks' where you're losing customers.",
    },
    {
      icon: PhoneCall,
      title: "2. Strategy Call",
      description: "We map out a custom plan to fix your funnels and maximize your conversion rate.",
    },
    {
      icon: Rocket,
      title: "3. Launch & Scale",
      description: "We build and launch your high-performance site in days, not months, and start scaling.",
    },
  ];

  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tighter mb-24 text-center">
          Our 3-Step <span className="text-secondary italic font-serif">Process</span>
        </h2>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-8 w-24 h-24 rounded-full flex items-center justify-center bg-card border border-white/5 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-2xl relative">
                  <div className="absolute inset-0 bg-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon size={40} className="text-secondary relative z-10" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground font-sans font-light leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
