"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

// Placeholder: replace with real client video testimonials as they come in.
const VIDEO_PLACEHOLDERS = [1, 2, 3];

// Placeholder: replace with real client testimonials as they come in.
const TEXT_TESTIMONIALS = [
  {
    name: "Ramesh Iyer",
    restaurant: "Owner, Coastal Kitchen",
    quote: "Our WhatsApp orders alone now cover what we used to pay Swiggy every month.",
  },
  {
    name: "Fatima Sheikh",
    restaurant: "Owner, Brew & Bean Café",
    quote: "People finally stop calling to ask if we're open — it's all right there on the site.",
  },
  {
    name: "Arjun Nair",
    restaurant: "Owner, Saffron Table",
    quote: "The site went live in under two weeks and looks better than restaurants twice our size.",
  },
];

export const FunnelTestimonials = () => {
  return (
    <section className="w-full py-16 md:py-28 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-10 md:mb-14"
        >
          What Owners Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 md:mb-14">
          {VIDEO_PLACEHOLDERS.map((id) => (
            <div
              key={id}
              className="aspect-video rounded-2xl bg-[#2a211c] flex items-center justify-center border border-[#e8dcc8]"
            >
              <PlayCircle size={40} className="text-white/50" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TEXT_TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#e8dcc8]"
            >
              <p className="font-sans text-sm text-[#2a211c] leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f3e9dc] shrink-0" />
                <div>
                  <p className="font-heading font-bold text-sm text-[#2a211c]">{t.name}</p>
                  <p className="font-sans text-xs text-[#7a6a5c]">{t.restaurant}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
