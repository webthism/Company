"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LeadMagnet = () => {
  return (
    <section className="py-32 bg-primary/5 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary border border-primary/20">
              <span className="text-xs font-bold tracking-widest uppercase">Free Growth Resource</span>
            </div>
            <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
              Download Our <br />
              <span className="text-primary italic font-serif">2026 Website</span> <br />
              Checklist
            </h2>
            <p className="text-muted-foreground text-xl font-sans font-light mb-12 max-w-lg leading-relaxed">
              Discover the exact framework we use to build high-converting websites. 
              Avoid the common mistakes that are costing you leads.
            </p>
            
            <div className="bg-zinc-900/50 p-8 rounded-[2rem] border border-white/10 backdrop-blur-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Website URL</label>
                    <input type="url" placeholder="https://yourwebsite.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Email Address</label>
                    <input type="email" placeholder="you@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Biggest Problem Right Now</label>
                  <input type="text" placeholder="e.g., Not enough leads, Slow loading..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Monthly Revenue (Optional)</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                    <option className="bg-zinc-900">$0 - $10k</option>
                    <option className="bg-zinc-900">$10k - $50k</option>
                    <option className="bg-zinc-900">$50k - $200k</option>
                    <option className="bg-zinc-900">$200k+</option>
                  </select>
                </div>

                <Button
                  size="lg"
                  className="w-full py-8 rounded-2xl font-heading font-black text-lg bg-primary text-primary-foreground hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(189,157,255,0.2)]"
                >
                  Download My Free Checklist
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 aura-glow opacity-30" />
            <div className="relative bg-zinc-900 aspect-[4/5] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="p-12 h-full flex flex-col justify-end relative z-20">
                <FileText size={64} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-heading font-black tracking-tighter text-white mb-2">WebGrowth Blueprint 2026</h3>
                <p className="text-muted-foreground font-sans text-sm tracking-widest uppercase">Expert PDF Guide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
