"use client";

import { motion } from "framer-motion";
import { Search, Percent, TrendingDown, PhoneOff } from "lucide-react";
import { AnimatedJobCard, type JobCardProps } from "@/components/ui/animated-card";

const PAIN_POINTS: Omit<JobCardProps, "onClick" | "className">[] = [
  {
    companyLogo: <Search size={18} className="text-[#7a6a5c]" />,
    companyName: "Visibility",
    jobTitle: "Customers Google you… and find nothing (or worse, an outdated Facebook page)",
    salary: "Invisible on Google",
    tags: ["No Website", "Outdated Facebook"],
    postedDate: "Happening right now",
    variant: "pink",
  },
  {
    companyLogo: <Percent size={18} className="text-[#7a6a5c]" />,
    companyName: "Commissions",
    jobTitle: "You're paying Zomato/Swiggy 25-30% of every single order",
    salary: "-27% of every order",
    tags: ["Zomato", "Swiggy"],
    postedDate: "Every single order",
    variant: "yellow",
  },
  {
    companyLogo: <TrendingDown size={18} className="text-[#7a6a5c]" />,
    companyName: "Competition",
    jobTitle: "Your competitor down the street looks premium online — and you don't",
    salary: "Losing to rivals",
    tags: ["Local Rivals", "Perception"],
    postedDate: "Right down the street",
    variant: "blue",
  },
  {
    companyLogo: <PhoneOff size={18} className="text-[#7a6a5c]" />,
    companyName: "Convenience",
    jobTitle: "People can't find your menu, timings, or location without calling you",
    salary: "Missed bookings",
    tags: ["No Menu", "No Hours"],
    postedDate: "Every missed call",
    variant: "purple",
  },
];

export const Problem = () => {
  return (
    <section className="w-full min-h-[100svh] md:min-h-0 flex items-center py-16 md:py-0 px-5 md:px-8">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] mb-10 md:mb-14"
        >
          Sound Familiar?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6" style={{ perspective: 1000 }}>
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.jobTitle}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex justify-center"
            >
              <AnimatedJobCard {...point} className="max-w-none text-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
