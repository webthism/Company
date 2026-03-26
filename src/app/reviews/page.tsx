"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { testimonials } from "@/constants/testimonials";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#BD9DFF] selection:text-black">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-24 md:pb-48">
        {/* Hero Section */}
        <header className="relative px-5 md:px-8 py-12 md:py-24 mb-10 md:mb-20 overflow-hidden text-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#BD9DFF]/5 blur-[120px] -z-10 rounded-full opacity-30" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <div className="mb-6 md:mb-8 inline-flex items-center gap-3 px-4 md:px-5 py-2 md:py-2.5 bg-white/[0.03] rounded-full text-[#BD9DFF] border border-white/10 backdrop-blur-md">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Voices from Real Business</span>
                </div>
                
                <h1 className="font-heading text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter mb-5 md:mb-8 leading-[0.85]">
                    Proven <br />
                    <span className="text-[#BD9DFF] italic font-serif">Performance</span>
                </h1>
                
                <p className="max-w-2xl mx-auto text-[#A1A1AA] text-base md:text-xl font-sans font-extralight italic opacity-80 leading-relaxed px-2">
                    Don&apos;t take our word for it. Hear from the founders and CTOs who fired their old agencies and switched to Webthism.
                </p>
            </motion.div>
        </header>

        {/* Global Grid of Reviews */}
        <section className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {testimonials.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                        whileHover={{ y: -8 }}
                        className="group relative p-7 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-[#BD9DFF]/40 backdrop-blur-xl transition-all duration-500 overflow-hidden"
                    >
                        {/* Quote Icon Glow */}
                        <div className="absolute -top-4 -right-4 text-[#BD9DFF]/5 group-hover:text-[#BD9DFF]/10 transition-colors">
                            <Quote size={80} className="md:hidden" strokeWidth={3} aria-hidden="true" />
                            <Quote size={120} className="hidden md:block" strokeWidth={3} aria-hidden="true" />
                        </div>
                        
                        <div className="mb-5 md:mb-8 h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-[#BD9DFF]/10 flex items-center justify-center text-[#BD9DFF] group-hover:bg-[#BD9DFF] group-hover:text-black transition-all duration-500">
                            <Quote size={16} className="md:hidden" aria-hidden="true" />
                            <Quote size={20} className="hidden md:block" aria-hidden="true" />
                        </div>

                        <blockquote className="relative z-10 text-base md:text-xl font-heading font-medium leading-relaxed mb-8 md:mb-10 text-white/90 group-hover:text-white transition-colors">
                            &quot;{review.testimonial}&quot;
                        </blockquote>

                        <div className="flex items-center gap-4 md:gap-5 mt-auto">
                            <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0 bg-muted">
                                <Image 
                                  src={review.imgSrc} 
                                  alt={`Photo of ${review.by}`} 
                                  fill 
                                  className="object-cover" 
                                  sizes="48px"
                                  priority={index < 3}
                                />
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-heading font-bold text-sm md:text-base text-white group-hover:text-[#BD9DFF] transition-colors truncate">{review.by.split(',')[0]}</h4>
                                <p className="text-[9px] md:text-[10px] text-[#A1A1AA] uppercase tracking-widest font-sans font-bold truncate">{review.by.split(',').slice(1).join(',').trim()}</p>
                            </div>
                        </div>

                        {/* Hover Aura */}
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#BD9DFF]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Closing CTA */}
        <section className="mt-24 md:mt-48 text-center px-5 md:px-8">
            <div className="max-w-4xl mx-auto p-10 md:p-16 rounded-2xl md:rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#BD9DFF]/5 to-transparent opacity-50" />
                 <h2 className="relative z-10 font-heading text-2xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8">Ready to be our <span className="text-[#BD9DFF] italic font-serif">Next success</span> story?</h2>
                 <Link 
                    href="/#book" 
                    className="relative z-10 inline-flex px-8 md:px-12 py-4 md:py-5 bg-[#BD9DFF] text-black rounded-full font-heading font-black text-base md:text-xl hover:scale-105 transition-transform whitespace-nowrap"
                 >
                     Book Your Strategy Session
                 </Link>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
