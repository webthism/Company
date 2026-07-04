"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, MessageCircle, CalendarCheck, MapPin } from "lucide-react";

const SERVICES = [
  {
    icon: LayoutTemplate,
    title: "Restaurant Website Design",
    description: "Look as good online as your food tastes",
  },
  {
    icon: MessageCircle,
    title: "Online Menu & WhatsApp Ordering",
    description: "Take direct orders, keep 100% of the money",
  },
  {
    icon: CalendarCheck,
    title: "Table Reservation Setup",
    description: "Bookings while you sleep",
  },
  {
    icon: MapPin,
    title: "Google Business + Local SEO",
    description: "Show up when locals search 'restaurants near me'",
  },
];

export const FunnelServices = () => {
  return (
    <section className="w-full min-h-[100svh] md:min-h-0 flex items-center py-16 md:py-0 px-5 md:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-10 md:mb-14"
        >
          What You Get
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-[#e8dcc8]"
            >
              <div className="mb-4 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#c1272d]/10 flex items-center justify-center text-[#c1272d]">
                <service.icon size={26} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2a211c] mb-2">{service.title}</h3>
              <p className="text-[#7a6a5c] font-sans leading-relaxed text-sm md:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
