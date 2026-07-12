"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const PAIN_POINTS = [
  {
    title: "High Commissions",
    description: "Aggregators like Zomato and Swiggy take up to 30% of your revenue on every single order, eating your margins alive.",
    icon: (
      <svg className="w-8 h-8 text-[#c1272d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
  },
  {
    title: "No Customer Data",
    description: "You cook the food, but they own the customer. You have no way to reach out, re-engage, or build loyalty.",
    icon: (
      <svg className="w-8 h-8 text-[#e8792e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
      </svg>
    ),
  },
  {
    title: "Invisible Brand",
    description: "Your restaurant is just another listing in a sea of competitors. You look exactly the same as the place next door.",
    icon: (
      <svg className="w-8 h-8 text-[#2a211c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ),
  },
  {
    title: "Relying on Hope",
    description: "Waiting for foot traffic or hoping the app algorithm blesses you today instead of having a predictable system.",
    icon: (
      <svg className="w-8 h-8 text-[#c1272d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export const Problem = () => {
  return (
    <section id="problem" className="relative z-10 w-full bg-[#fdf6ec] py-20 md:py-32 px-5 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-16"
        >
          Problems <span className="text-[#c1272d] italic font-serif">— Sound Familiar?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={cn(
                "flex flex-col bg-white rounded-3xl p-8 sm:p-10",
                "shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#2a211c]/5",
                "hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              )}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#fdf6ec] flex items-center justify-center mb-6">
                {point.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#2a211c] mb-4">
                {point.title}
              </h3>
              <p className="text-[#2a211c]/70 text-lg leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
