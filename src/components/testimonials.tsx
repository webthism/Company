"use client";

import { motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3">
            <h2 className="font-heading text-4xl font-black mb-6 tracking-tighter leading-tight">
              Clients who trust <br /> the void.
            </h2>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <ArrowLeft size={20} className="text-muted-foreground" />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <ArrowRight size={20} className="text-white" />
              </button>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <div className="bg-card p-12 md:p-20 rounded-[3rem] border border-white/5 relative glass shadow-2xl">
              <Quote size={80} className="text-primary/10 absolute top-12 left-12" strokeWidth={1} />
              <p className="text-xl md:text-3xl font-sans font-extralight italic leading-relaxed mb-12 relative z-10 text-white/90">
                "WebThism transformed our digital presence from a standard landing page into a visual journey. Their attention to detail and creative vision is unmatched in the industry."
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-white/10">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9rypZsvR6ueKZai3YheNKeL4eqO2dOEtjoKzAxglQgpPWwFCDyooA5FcDhq1CpZGIC88B48NqTYI7pTjTJixFKz-g1_SRgUWXdRyprA3IZE7UsNf8RfucR1pEH49bVM8aqS6vVODoSLja3HG-pyeKIDQh4vBjzHxQ9AXiX1f2G4LnT--QF3kMqfTOL6V3BnlBN9UU0SrpBKZk0UpB8hPIl2aT558adt_zM6i7mpkCrPzbT4wvDGpAuioWYb6iW3VFw6aVVPt_wDY"
                    alt="Marcus Thorne"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading font-black text-lg">Marcus Thorne</p>
                  <p className="text-sm font-sans font-light text-muted-foreground tracking-widest uppercase">CEO, Arclight Tech</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
