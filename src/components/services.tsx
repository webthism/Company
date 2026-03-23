"use client";

import { motion } from "framer-motion";
import { Terminal, Palette, Zap, Rocket } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Terminal,
      title: "Web Development",
      description: "High-performance, scalable web applications built with modern frameworks and pixel-perfect attention to detail.",
      color: "text-primary",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Editorial-grade digital designs that prioritize user experience without compromising on visual spectacle.",
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Branding",
      description: "Complete visual identity systems that help brands stand out in saturated digital landscapes.",
      color: "text-destructive",
    },
    {
      icon: Rocket,
      title: "Digital Strategy",
      description: "Strategic roadmapping to ensure your digital product hits the market with momentum and clarity.",
      color: "text-primary",
    },
  ];

  return (
    <section id="services" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tighter mb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg font-sans font-light">
              We don't just build websites; we engineer digital identities using cutting-edge technology and artistic precision.
            </p>
          </div>
          <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Precision & Performance
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
              className="bg-card p-12 hover:bg-white/[0.02] transition-colors p-16 group border border-transparent rgb-hover"
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
