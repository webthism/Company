"use client";

import { button, cn } from "@/lib/utils";
import { MaskReveal, Reveal } from "@/components/ui/reveal";

export const FinalCta = () => {
  return (
    <section id="book" className="relative w-full overflow-hidden bg-ink py-24 md:py-40 px-5 sm:px-6 border-t border-cream/10">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[36rem] w-[60rem] max-w-full rounded-full bg-brand/25 blur-[160px]" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        <MaskReveal
          className="font-heading text-[2.6rem] sm:text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.95] text-cream mb-8"
          lines={[
            "Ready to stop",
            <span key="l2" className="font-serif italic font-normal text-ember">losing money</span>,
            "to aggregators?",
          ]}
        />

        <Reveal delay={0.3} className="flex flex-col items-center">
          <p className="text-cream/60 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            Book a free 20-min strategy call. We&apos;ll look at your current setup and show you exactly what a commission-free website could do for your restaurant.
          </p>

          <a
            href="https://calendar.app.google/hcBDBD9ywLA8MRK17"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(button, "h-14 md:h-16 px-8 md:px-12 rounded-full font-heading font-black text-sm sm:text-base bg-brand text-white hover:bg-brand-bright transition-all hover:scale-[1.05] active:scale-[0.95] shadow-[0_0_60px_rgba(193,39,45,0.45)] mb-16")}
          >
            Book a Free 20-Min Website Strategy Call
          </a>
        </Reveal>

        <Reveal delay={0.2} className="w-full rounded-[2rem] border border-cream/10 bg-surface p-2 md:p-3 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
          <div className="relative w-full h-[650px] md:h-[700px] rounded-[1.5rem] bg-white overflow-hidden" data-lenis-prevent>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Goi0DwVVyg0AvW3y9ckRk3RrQ5k2fSxEiDbWNFSeVZnokG6jyPWwly5DWehBe5RCBssJBpJFT?gv=true"
              width="100%"
              height="100%"
              frameBorder="0"
              className="absolute top-0 left-0 w-full h-full"
              title="Book a Strategy Call"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
