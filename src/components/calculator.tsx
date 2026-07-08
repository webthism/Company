"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/ui/glow-effect";

const MIN_SALES = 50_000;
const MAX_SALES = 1_000_000;
const COMMISSION_RATE = 0.27;
const WEBSITE_COST = 50_000;

const formatINR = (value: number) =>
  `₹${Math.round(value).toLocaleString("en-IN")}`;

function CountUp({ value, format }: { value: number; format?: (n: number) => string }) {
  const spring = useSpring(value, { stiffness: 120, damping: 22 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    return spring.on("change", (latest) => setDisplay(latest));
  }, [spring]);

  return <>{format ? format(display) : Math.round(display)}</>;
}

export const Calculator = () => {
  const [monthlySales, setMonthlySales] = useState(300_000);

  const sliderPercent =
    ((monthlySales - MIN_SALES) / (MAX_SALES - MIN_SALES)) * 100;

  const monthlyLoss = monthlySales * COMMISSION_RATE;
  const yearlyLoss = monthlyLoss * 12;
  const paybackWeeks = Math.max(1, Math.ceil((WEBSITE_COST / monthlyLoss) * 4.33));

  return (
    <section className="w-full min-h-screen flex flex-col justify-center bg-[#2a211c] pt-[25vh] pb-20 px-5 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white text-center mb-16"
        >
          How Much Is <span className="text-[#e8792e] italic font-serif">Zomato/Swiggy</span> Really Costing You?
        </motion.h2>

        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-10 md:p-12">
          <div className="mb-10">
            <div className="flex items-baseline justify-between mb-4">
              <label className="text-white/60 text-sm sm:text-base font-medium">
                Your Monthly Sales via Aggregators
              </label>
              <span className="font-heading text-2xl sm:text-3xl font-black text-white">
                <CountUp value={monthlySales} format={formatINR} />
              </span>
            </div>
            <input
              type="range"
              min={MIN_SALES}
              max={MAX_SALES}
              step={10_000}
              value={monthlySales}
              onChange={(e) => setMonthlySales(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#e8792e]"
              style={{
                background: `linear-gradient(to right, #e8792e ${sliderPercent}%, rgba(255,255,255,0.15) ${sliderPercent}%)`,
              }}
            />
            <div className="flex justify-between text-white/40 text-xs sm:text-sm mt-2">
              <span>{formatINR(MIN_SALES)}</span>
              <span>{formatINR(MAX_SALES)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#2a211c] rounded-2xl p-6 border border-white/10">
              <p className="text-white/50 text-sm mb-2">You Lose Every Month</p>
              <p className="font-heading text-3xl sm:text-4xl font-black text-[#e8792e]">
                <CountUp value={monthlyLoss} format={formatINR} />
              </p>
            </div>
            <div className="bg-[#2a211c] rounded-2xl p-6 border border-white/10">
              <p className="text-white/50 text-sm mb-2">You Lose Every Year</p>
              <p className="font-heading text-3xl sm:text-4xl font-black text-[#c1272d]">
                <CountUp value={yearlyLoss} format={formatINR} />
              </p>
            </div>
          </div>

          <p className="text-center text-white/70 text-lg mb-8">
            A ₹50,000 website pays for itself in just{" "}
            <span className="font-heading font-black text-white">
              <CountUp value={paybackWeeks} /> week{paybackWeeks === 1 ? "" : "s"}
            </span>{" "}
            of savings.
          </p>

          <div className="flex justify-center">
            <div className="relative">
              <GlowEffect
                colors={["#e8792e", "#c1272d", "#e8792e"]}
                mode="colorShift"
                blur="strong"
                className="rounded-full"
              />
              <Button
                asChild
                size="lg"
                className="relative w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 rounded-full font-heading font-black text-sm sm:text-base md:text-lg bg-[#c1272d] text-white hover:bg-[#a81f24] transition-all hover:scale-[1.03] active:scale-[0.95] shadow-[0_10px_30px_rgba(193,39,45,0.35)]"
              >
                <a href="#book">Stop Losing Money — Get Your Website</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
