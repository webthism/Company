"use client";

import { motion } from "framer-motion";
import { Terminal, Palette, Zap, Rocket } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "3x More Leads",
      description: "Our conversion-first architecture is designed to turn casual visitors into high-value leads automatically.",
      color: "text-primary",
    },
    {
      icon: Terminal,
      title: "Mobile-First Design",
      description: "Over 60% of your traffic is on mobile. We ensure your site looks and performs perfectly on every screen size.",
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Slow sites kill business. We optimize every kilobyte to ensure sub-second load times that keep users engaged.",
      color: "text-destructive",
    },
    {
      icon: Palette,
      title: "SEO Built-In",
      description: "We don't just build sites; we make sure they're found. Advanced SEO structures come standard with every build.",
      color: "text-primary",
    },
  ];

  return (
    <section id="benefits" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tighter mb-6">
              The Value Stack
            </h2>
            <p className="text-muted-foreground text-lg font-sans font-light">
              We focus on the metrics that matter. Our websites are built to be your most powerful marketing asset.
            </p>
          </div>
          <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Built for Growth
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-12 hover:bg-white/[0.02] transition-colors group p-16 border border-transparent rgb-hover"
            >
              <div className={`mb-8 w-16 h-16 rounded-full flex items-center justify-center bg-white/5 ${service.color}`}>
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
