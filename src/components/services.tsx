"use client";

import { motion } from "framer-motion";
import { Terminal, Palette, Zap, Rocket } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "3x More Leads",
      description: "Our conversion-first architecture is designed to turn casual visitors into high-value leads automatically.",
      color: "text-[#BD9DFF]",
    },
    {
      icon: Terminal,
      title: "Mobile-First Design",
      description: "Over 60% of your traffic is on mobile. We ensure your site looks and performs perfectly on every screen size.",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Slow sites kill business. We optimize every kilobyte to ensure sub-second load times that keep users engaged.",
      color: "text-[#BD9DFF]",
    },
    {
      icon: Palette,
      title: "SEO Built-In",
      description: "We don't just build sites; we make sure they're found. Advanced SEO structures come standard with every build.",
      color: "text-primary",
    },
  ];

  return (
    <section id="benefits" className="relative py-32 bg-black overflow-hidden">
      {/* Matching Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_95%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-24 flex flex-col items-center gap-6">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="font-heading text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white"
            >
              The Value <span className="text-[#BD9DFF] italic font-serif">Stack</span>
            </motion.h2>
            <p className="text-[#A1A1AA] text-lg md:text-xl font-sans font-light leading-relaxed">
              We focus on the metrics that matter. Our websites are built to be your most powerful marketing asset.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}
              viewport={{ once: true }}
              className="relative group p-12 lg:p-16 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-[#BD9DFF]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Inner Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 blur-[60px] rounded-full group-hover:bg-[#BD9DFF]/10 transition-colors duration-500" />
              
              <div className={`mb-10 w-20 h-20 rounded-3xl flex items-center justify-center bg-white/5 border border-white/10 ${service.color} group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={36} strokeWidth={1.2} />
              </div>
              
              <h3 className="font-heading text-3xl font-bold mb-6 text-white group-hover:text-[#BD9DFF] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-[#A1A1AA] leading-relaxed text-lg font-sans font-light group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

