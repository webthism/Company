"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const COMMISSION_RATE = 0.27;
const WEBSITE_COST = 50000;
const MIN_SALES = 50000;
const MAX_SALES = 1000000;

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));

// Animated count-up for a rounded number tied to a MotionValue.
const CountUp = ({ value }: { value: number }) => {
  const motionVal = useMotionValue(value);
  const spring = useSpring(motionVal, { stiffness: 120, damping: 22 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    motionVal.set(value);
  }, [value, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return <>₹{formatINR(display)}</>;
};

export const Calculator = () => {
  const [monthlySales, setMonthlySales] = useState(200000);

  const monthlyLoss = monthlySales * COMMISSION_RATE;
  const yearlyLoss = monthlyLoss * 12;
  const weeksToPayoff = monthlyLoss > 0 ? Math.max(1, Math.round((WEBSITE_COST / monthlyLoss) * (52 / 12))) : 0;

  const sliderPercent = ((monthlySales - MIN_SALES) / (MAX_SALES - MIN_SALES)) * 100;

  return (
    <section className="w-full min-h-[100svh] md:min-h-0 flex items-center py-16 md:py-0 px-5 md:px-8 bg-[#2a211c]">
      <div className="max-w-3xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-8 md:mb-12"
        >
          How Much Is <span className="text-[#e8792e] italic font-serif">Zomato/Swiggy</span> Really Costing You?
        </motion.h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10">
          <label htmlFor="sales-slider" className="block font-sans text-sm md:text-base text-white/70 mb-4">
            Your monthly Swiggy/Zomato sales?
          </label>

          <div className="mb-2 font-heading text-3xl md:text-4xl font-black text-white">
            <CountUp value={monthlySales} />
          </div>

          <input
            id="sales-slider"
            type="range"
            min={MIN_SALES}
            max={MAX_SALES}
            step={5000}
            value={monthlySales}
            onChange={(e) => setMonthlySales(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#e8792e] bg-white/10 mb-8 md:mb-10"
            style={{
              background: `linear-gradient(to right, #e8792e ${sliderPercent}%, rgba(255,255,255,0.1) ${sliderPercent}%)`,
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="bg-black/20 rounded-2xl p-5 md:p-6">
              <p className="text-white/60 font-sans text-xs md:text-sm mb-1">You're paying per month</p>
              <p className="font-heading text-2xl md:text-3xl font-black text-[#e8792e]">
                <CountUp value={monthlyLoss} />
              </p>
            </div>
            <div className="bg-black/20 rounded-2xl p-5 md:p-6">
              <p className="text-white/60 font-sans text-xs md:text-sm mb-1">That's per year</p>
              <p className="font-heading text-2xl md:text-3xl font-black text-[#c1272d]">
                <CountUp value={yearlyLoss} />
              </p>
            </div>
          </div>

          <p className="font-heading text-lg md:text-2xl font-bold text-white mb-8 md:mb-10">
            Our website pays for itself in{" "}
            <span className="text-[#e8792e]">{weeksToPayoff} week{weeksToPayoff === 1 ? "" : "s"}</span>.
          </p>

          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto h-12 md:h-14 px-8 rounded-full font-heading font-black text-sm md:text-base bg-[#c1272d] text-white hover:bg-[#a81f24] hover:scale-[1.03] transition-all"
          >
            <a href="#book">Stop Losing This Money — Book a Free Call</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
