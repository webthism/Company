"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Full code ownership from day one. No more agency hostage situations. Webthism is truly transparent.",
    by: "Aayush, Founder at TaskSquare",
    imgSrc: "https://i.pravatar.cc/150?img=11"
  },
  {
    tempId: 1,
    testimonial: "Other devs left us with spaghetti code that cost $3k/mo to maintain. Webthism rebuilt it from scratch, cutting our costs by 80%.",
    by: "Mahesh, CTO at Myhealthmylab",
    imgSrc: "https://i.pravatar.cc/150?img=12"
  },
  {
    tempId: 2,
    testimonial: "After being ghosted by two freelancers mid-project, Webthism's constant updates and reliability were a absolute breath of fresh air.",
    by: "Harsh, Managing Director at HealthX",
    imgSrc: "https://i.pravatar.cc/150?img=13"
  },
  {
    tempId: 3,
    testimonial: "Our last project stalled for 6 months with zero updates. Webthism quoted 4 weeks and delivered in 3. No excuses, just results.",
    by: "Adarsh Tyagi, Founder at LandGrow",
    imgSrc: "https://i.pravatar.cc/150?img=14"
  },
  {
    tempId: 4,
    testimonial: "Our leads tripled. Webthism turned our 'pretty' site into a high-performance conversion machine.",
    by: "Sarthak, Head of Growth at Bestie",
    imgSrc: "https://i.pravatar.cc/150?img=15"
  },
  {
    tempId: 5,
    testimonial: "Migration disasters wiped our traffic before. Webthism handled our rebuild with perfect redirects—zero SEO loss, only massive gains.",
    by: "Elena, CEO at Vanguard",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 6,
    testimonial: "Most agencies feel transactional. Webthism took true ownership of our vision and delivered a site that actually matches their portfolio.",
    by: "Siddharth, Founder at NovaStudio",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 7,
    testimonial: "Zero hidden fees or invoice surprises. Webthism delivered more than promised, exactly on budget.",
    by: "Sarah, Marketing Director at BrightLink",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 8,
    testimonial: "Site hacks and crashes used to keep me up at night. Since switching to Webthism's custom-coded architecture, our site is rock solid.",
    by: "James, Ops Lead at ApexForce",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 9,
    testimonial: "We were stuck with a lone freelancer who disappeared. Webthism provides a professional team that actually scales with our growth.",
    by: "Maya, Creative Director at Lumina",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-[#BD9DFF] text-black border-[#BD9DFF]" 
          : "z-0 bg-[#0B0B0B] text-white/80 border-white/10 hover:border-[#BD9DFF]/50 backdrop-blur-md"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #27272A" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-white/10"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <div className="mb-6 relative">
          <img
            src={testimonial.imgSrc}
            alt={`${testimonial.by.split(',')[0]}`}
            className="h-16 w-14 bg-muted object-cover object-top rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
            style={{
              boxShadow: "4px 4px 0px rgba(0,0,0,0.5)"
            }}
          />
      </div>
      <h3 className={cn(
        "text-lg sm:text-2xl font-semibold leading-tight mb-4",
        isCenter ? "text-black" : "text-white"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic font-sans",
        isCenter ? "text-black/70" : "text-[#A1A1AA]"
      )}>
        — {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-black py-20"
      style={{ height: 750 }}
    >
        {/* Background Grid - Matching Global Style */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)] pointer-events-none" />

      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      
      {/* Custom Controls */}
      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-4 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-16 w-16 items-center justify-center text-2xl transition-all rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-[#BD9DFF] hover:text-black hover:border-[#BD9DFF] shadow-xl"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-16 w-16 items-center justify-center text-2xl transition-all rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-[#BD9DFF] hover:text-black hover:border-[#BD9DFF] shadow-xl"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
