"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

export const Stakes = () => {
  const stakes = [
    {
      icon: Clock,
      title: "Slow Loading",
      description: "1 in 4 visitors abandon a website that takes more than 4 seconds to load. Speed is your first impression.",
    },
    {
      icon: AlertTriangle,
      title: "Bad Design",
      description: "94% of first impressions are design-related. If your site looks dated, you lose trust instantly.",
    },
    {
      icon: TrendingDown,
      title: "Lost Revenue",
      description: "An unoptimized website isn't just a missed opportunity—it's actively costing you leads and profit.",
    },
  ];

  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tighter mb-12">
          What Is Your <span className="text-destructive italic font-serif">Weak Website</span> <br />
          Costing You?
        </h2>
        
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-20 font-sans font-light">
          Losing customers because of slow loading or bad design? Here’s the reality of a sub-par digital presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {stakes.map((stake, index) => (
            <motion.div
              key={stake.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/40 p-10 rounded-3xl border border-white/5"
            >
              <div className="mb-6 w-12 h-12 rounded-2xl flex items-center justify-center bg-destructive/10 text-destructive">
                <stake.icon size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">{stake.title}</h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed">
                {stake.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
