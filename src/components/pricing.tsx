"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Starter",
    price: "₹20,000–₹30,000",
    bestFor: "Best for: food trucks, small cafés",
    features: ["1–5 page website", "Digital menu", "WhatsApp click-to-order button", "Google Maps integration"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹40,000–₹60,000",
    bestFor: "Best for: restaurants, bistros, dessert cafés",
    features: [
      "Everything in Starter",
      "Table reservation system",
      "Photo gallery",
      "Reviews section",
      "Basic local SEO",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹80,000–₹1,00,000",
    bestFor: "Best for: chains, fine dining, cloud kitchens",
    features: [
      "Everything in Growth",
      "Full online ordering system",
      "Multi-location support",
      "Advanced SEO",
    ],
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section className="w-full py-16 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-10 md:mb-14"
        >
          Pick Your Plate
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={cn(
                "rounded-3xl p-7 md:p-8 border flex flex-col",
                tier.highlight
                  ? "bg-[#2a211c] border-[#2a211c] md:scale-105 shadow-2xl"
                  : "bg-white border-[#e8dcc8]"
              )}
            >
              {tier.highlight && (
                <span className="self-start mb-4 px-3 py-1 rounded-full bg-[#e8792e] text-white text-xs font-heading font-bold tracking-wide uppercase">
                  Most Popular
                </span>
              )}
              <h3
                className={cn(
                  "font-heading text-2xl font-black mb-1",
                  tier.highlight ? "text-white" : "text-[#2a211c]"
                )}
              >
                {tier.name}
              </h3>
              <p className={cn("font-heading text-xl font-bold mb-4", tier.highlight ? "text-[#e8792e]" : "text-[#c1272d]")}>
                {tier.price}
              </p>
              <p className={cn("font-sans text-sm mb-6", tier.highlight ? "text-white/60" : "text-[#7a6a5c]")}>
                {tier.bestFor}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={18} className={cn("shrink-0 mt-0.5", tier.highlight ? "text-[#e8792e]" : "text-[#c1272d]")} />
                    <span className={cn("font-sans text-sm", tier.highlight ? "text-white/85" : "text-[#2a211c]")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={cn(
                  "w-full h-12 rounded-full font-heading font-black text-sm",
                  tier.highlight
                    ? "bg-[#e8792e] text-white hover:bg-[#d16a24]"
                    : "bg-[#c1272d] text-white hover:bg-[#a81f24]"
                )}
              >
                <a href="#book">Book a Free Call</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-sans text-sm text-[#7a6a5c] mt-8 md:mt-10">
          All prices include 30 days of free support.
        </p>
      </div>
    </section>
  );
};
