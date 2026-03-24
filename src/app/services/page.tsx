"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { 
  Star, 
  Database, 
  MessageSquare, 
  ShieldCheck, 
  BarChart3, 
  Zap, 
  Share2, 
  Megaphone, 
  Facebook, 
  Search, 
  Globe, 
  MapPin 
} from "lucide-react";
import { CyberneticBentoGrid } from "@/components/ui/cybernetic-bento-grid";

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#BD9DFF] selection:text-black">
      <Navbar />
      
      <main className="pt-32 pb-48">
        {/* Header */}
        <header className="relative py-24 px-8 mb-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#BD9DFF]/5 blur-[120px] -z-10 rounded-full opacity-30" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10"
            >
                <div className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] rounded-full text-[#BD9DFF] border border-white/10 backdrop-blur-md">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Webthism Studio</span>
                </div>
                
                <h1 className="font-heading text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white">
                    Our <br />
                    <span className="text-[#BD9DFF] italic font-serif">Services</span>
                </h1>
                
                <p className="max-w-xl mx-auto text-[#A1A1AA] text-xl font-sans font-extralight italic opacity-80 leading-relaxed italic">
                    Simple, transparent, and built for performance. These are the tools we use to dominate your market.
                </p>
            </motion.div>
        </header>

        {/* Services Bento Grid */}
        <section className="max-w-7xl mx-auto px-8 relative">
            <CyberneticBentoGrid />
            
            {/* Background Blur Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#BD9DFF]/5 blur-[120px] -z-10 rounded-full" />
        </section>

        {/* CTA */}
        <section className="mt-48 text-center px-8">
            <div className="max-w-4xl mx-auto p-20 rounded-[4rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#BD9DFF]/10 to-transparent opacity-50" />
                 <h2 className="relative z-10 font-heading text-4xl md:text-7xl font-black mb-12">The foundation <br /> of <span className="text-[#BD9DFF] italic font-serif">your growth.</span></h2>
                 <a 
                    href="/#book" 
                    className="relative z-10 inline-flex px-14 py-6 bg-[#BD9DFF] text-black rounded-full font-heading font-black text-xl hover:scale-110 shadow-[0_20px_60px_-15px_rgba(189,157,255,0.4)] transition-all"
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
