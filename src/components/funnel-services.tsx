"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    title: "Custom Website",
    description: "A mouth-watering, mobile-first site built around your food photography, not a generic template.",
    icon: (
      <svg className="w-8 h-8 text-[#c1272d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM4 9h16M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Zero-Commission Ordering",
    description: "WhatsApp and direct online ordering wired in, so every order goes straight to you, not Zomato or Swiggy.",
    icon: (
      <svg className="w-8 h-8 text-[#e8792e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-8 4h5m-9 4l1.664-4.155A8 8 0 1112 20H4z" />
      </svg>
    ),
  },
  {
    title: "Google Maps & SEO",
    description: "Optimized listing and on-page SEO so you show up when someone searches 'best restaurant near me'.",
    icon: (
      <svg className="w-8 h-8 text-[#2a211c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Monthly Analytics",
    description: "A simple monthly report on visitors and orders, so you know exactly what's working.",
    icon: (
      <svg className="w-8 h-8 text-[#c1272d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2h-2" />
      </svg>
    ),
  },
];

export const FunnelServices = () => {
  return (
    <section className="relative w-full bg-white py-20 md:py-32 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-16"
        >
          What You <span className="text-[#c1272d] italic font-serif">Get</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "flex flex-col bg-[#fdf6ec] rounded-3xl p-8 sm:p-10",
                "shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#2a211c]/5",
                "hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              )}
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#2a211c] mb-4">
                {service.title}
              </h3>
              <p className="text-[#2a211c]/70 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
