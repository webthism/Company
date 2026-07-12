"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Starter",
    price: "₹15,000",
    delivery: "Delivery: 7–10 days",
    features: [
      "Up to 5 pages (Home, Menu, About, Gallery, Contact)",
      "Digital menu with food photos",
      "Responsive design (mobile + desktop)",
      "Basic UI/UX design (template-based)",
      "Google Maps & click-to-call integration",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹35,000",
    delivery: "Delivery: 15–20 days",
    features: [
      "Up to 10–12 pages",
      "Custom UI/UX design",
      "CMS integration — owner can update menu & prices",
      "Online table reservation system",
      "Google Business Profile setup & review management",
      "Local SEO (schema, sitemap, speed optimization)",
      "Social media & Instagram feed integration",
      "Basic animations/interactions",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹65,000",
    delivery: "Delivery: 25–30 days",
    features: [
      "Unlimited pages (within scope)",
      "Fully custom design (from scratch)",
      "Advanced animations & micro-interactions",
      "Online ordering & payment integration",
      "Admin dashboard — manage menu, orders & staff access",
      "Performance optimization (Core Web Vitals)",
      "Local SEO setup — Google Search Console & Webmaster Tools + review management strategy",
      "Integrations: Zomato, Swiggy, POS, WhatsApp ordering",
      "Priority support for 30 days post-launch",
    ],
    highlight: false,
  },
];

const CheckIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-[#fdf6ec] py-20 md:py-32 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-16"
        >
          Pick Your <span className="text-[#c1272d] italic font-serif">Plate</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full items-center">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-3xl p-8 sm:p-10",
                tier.highlight
                  ? "bg-[#2a211c] text-white shadow-2xl md:scale-105 z-10"
                  : "bg-white text-[#2a211c] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#2a211c]/5"
              )}
            >
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c1272d] text-white text-xs font-heading font-bold uppercase tracking-wide px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <h3 className="font-heading text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="font-heading text-4xl font-black mb-1">{tier.price}</p>
              <p className={cn("text-sm mb-6", tier.highlight ? "text-white/60" : "text-[#2a211c]/60")}>
                {tier.delivery}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon
                      className={cn(
                        "w-5 h-5 shrink-0 mt-0.5",
                        tier.highlight ? "text-[#e8792e]" : "text-[#c1272d]"
                      )}
                    />
                    <span className={cn("text-sm leading-relaxed", tier.highlight ? "text-white/80" : "text-[#2a211c]/70")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={cn(
                  "w-full h-12 rounded-full font-heading font-black transition-all hover:scale-[1.03] active:scale-[0.97]",
                  tier.highlight
                    ? "bg-[#c1272d] text-white hover:bg-[#a81f24]"
                    : "bg-[#2a211c] text-white hover:bg-[#2a211c]/85"
                )}
              >
                <a href="#book">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-3xl p-8 sm:p-10 border border-[#2a211c]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
        >
          <div>
            <h3 className="font-heading text-xl font-bold text-[#2a211c] mb-1">
              Custom Solutions <span className="text-[#2a211c]/50 font-normal text-base">— Custom Quote</span>
            </h3>
            <p className="text-[#2a211c]/70 text-base leading-relaxed max-w-xl">
              Web apps, SaaS, portals, marketplaces, complex integrations, and ongoing retainers — scoped and priced after a discovery call.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 h-12 px-8 rounded-full font-heading font-black bg-[#2a211c] text-white hover:bg-[#2a211c]/85 transition-all hover:scale-[1.03] active:scale-[0.97]"
          >
            <a href="#book">Book a Discovery Call</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
