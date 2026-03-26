"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ShieldCheck, Zap, Code2, HeartHandshake, Eye, Rocket } from "lucide-react";

const ValueCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className="p-7 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl group"
    >
        <div className="mb-5 md:mb-8 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#BD9DFF]/10 flex items-center justify-center text-[#BD9DFF] group-hover:bg-[#BD9DFF] group-hover:text-black transition-all">
            <Icon size={20} className="md:hidden" strokeWidth={1} />
            <Icon size={24} className="hidden md:block" strokeWidth={1} />
        </div>
        <h3 className="text-xl md:text-2xl font-heading font-black tracking-tighter mb-3 md:mb-4 text-white group-hover:text-[#BD9DFF] transition-colors">
            {title}
        </h3>
        <p className="text-[#A1A1AA] font-sans font-extralight leading-relaxed italic opacity-80 group-hover:text-white transition-opacity text-sm md:text-base">
            {desc}
        </p>
    </motion.div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#BD9DFF] selection:text-black">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-24 md:pb-48">
        {/* Mission Hero */}
        <section className="relative py-12 md:py-24 px-5 md:px-8 mb-10 md:mb-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#BD9DFF]/5 blur-[160px] -z-10 rounded-full opacity-30" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10"
            >
                <div className="mb-6 md:mb-8 inline-flex items-center gap-3 px-4 md:px-5 py-2 md:py-2.5 bg-white/[0.03] rounded-full text-[#BD9DFF] border border-white/10 backdrop-blur-md">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">The Webthism Philosophy</span>
                </div>
                
                <h1 className="font-heading text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter mb-6 md:mb-10 leading-[0.85] text-white">
                    Engineered for <br />
                    <span className="text-[#BD9DFF] italic font-serif">Impact</span>
                </h1>
                
                <p className="max-w-3xl mx-auto text-[#A1A1AA] text-base md:text-xl font-sans font-extralight italic opacity-80 leading-relaxed px-2">
                    We founded Webthism to kill the &quot;Traditional Agency&quot; model. No hostage situations. No hidden fees. Just elite code that turns browsers into buyers.
                </p>
            </motion.div>
        </section>

        {/* Narrative Section */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-20 md:mb-48">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black tracking-tighter mb-6 md:mb-8 italic font-serif text-[#BD9DFF]">The Problem We Solve.</h2>
                <div className="space-y-5 md:space-y-8 text-base md:text-xl font-sans font-light text-[#A1A1AA] leading-relaxed">
                    <p>
                        For years, business owners have been stuck between two extremes: lone freelancers who disappear mid-project, or massive agencies that deliver &quot;pretty&quot; sites that drive zero revenue.
                    </p>
                    <p>
                        We saw companies being held hostage by proprietary platforms and spaghetti code that cost thousands to maintain. 
                        <strong> Webthism is the antidote.</strong>
                    </p>
                    <p>
                        We combined world-class engineering with conversion psychology to build sites that don&apos;t just look like a &quot;Studio&quot; project—they act like your #1 revenue-generating employee.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl md:rounded-[4rem] bg-white/[0.02] border border-white/5 overflow-hidden flex items-center justify-center group"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#BD9DFF]/20 to-transparent blur-3xl group-hover:opacity-40 transition-opacity" />
                <div className="relative z-10 text-[60px] sm:text-[100px] md:text-[200px] font-black text-[#BD9DFF]/10 select-none grayscale group-hover:grayscale-0 transition-all duration-700">
                    STUDIO
                </div>
                <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#BD9DFF] mb-1 md:mb-2">Webthism Core</p>
                    <p className="text-xs md:text-sm text-white/60 font-sans italic">Est. 2026. Built on Transparency and Pure Performance.</p>
                </div>
            </motion.div>
        </section>

        {/* Core Pillars Grid */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mb-20 md:mb-48">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <ValueCard 
                    icon={Code2}
                    title="Code Ownership"
                    desc="You own 100% of your build from day one. We don't believe in holding assets hostage. Our code is clean, documented, and yours."
                />
                <ValueCard 
                    icon={Zap}
                    title="Speed as a Feature"
                    desc="Every millisecond is lost revenue. We optimize every kilobyte to ensure your site is faster than 99% of the internet."
                />
                <ValueCard 
                    icon={Eye}
                    title="Total Transparency"
                    desc="Weekly updates, zero hidden fees, and clear communication. You are a partner in the process, not just a client."
                />
                <ValueCard 
                    icon={ShieldCheck}
                    title="Solid Foundation"
                    desc="No flimsy templates. Every build is architecture-driven for security, scalability, and long-term brand authority."
                />
                <ValueCard 
                    icon={HeartHandshake}
                    title="Reliable Teams"
                    desc="We're the team that actually picks up the phone. Reliable, predictable, and obsessed with your project's success."
                />
                <ValueCard 
                    icon={Rocket}
                    title="Conversion First"
                    desc="Pretty designs mean nothing if they don't sell. We engineer your site based on data and sales psychology."
                />
            </div>
        </section>

        {/* Closing Vision */}
        <section className="text-center px-5 md:px-8 relative">
            <div className="max-w-4xl mx-auto py-16 px-8 md:py-24 md:px-12 rounded-2xl md:rounded-[5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#BD9DFF]/5 to-transparent opacity-50" />
                 <h2 className="relative z-10 font-heading text-3xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-10 text-white tracking-tighter">
                   Let&apos;s Build Your <br />
                   <span className="text-[#BD9DFF] italic font-serif">Legacy</span>
                 </h2>
                 <p className="relative z-10 max-w-xl mx-auto text-[#A1A1AA] text-sm md:text-lg font-sans font-light italic opacity-60 mb-10 md:mb-16 px-2">
                   Join the founders who fired their old agencies and graduated to a high-performance digital ecosystem.
                 </p>
                 <a 
                    href="/#book" 
                    className="relative z-10 inline-flex px-8 md:px-14 py-4 md:py-6 bg-[#BD9DFF] text-black rounded-full font-heading font-black text-base md:text-xl hover:scale-110 shadow-[0_20px_60px_-15px_rgba(189,157,255,0.4)] transition-all"
                 >
                     Book Your Strategy Session
                 </a>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
