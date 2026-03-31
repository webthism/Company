"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Grilli",
    category: "Restaurant & Fine Dining",
    description: "An ultra-premium restaurant experience featuring a luxurious dark theme with gold accents. Optimized for high-end dining brands with smooth animations and interactive menus.",
    image: "https://aayushsearching.github.io/Restraunt-Template2/assets/images/hero-slider-1.jpg",
    link: "https://aayushsearching.github.io/Restraunt-Template2/",
    color: "#E4C590",
  },
  {
    title: "Finflow",
    category: "SaaS Dashboard",
    description: "Comprehensive financial management platform for startups. Real-time data visualization and complex resource planning made simple.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "#",
    color: "#60A5FA",
  },
  {
    title: "AuraWellness",
    category: "Health & Fitness",
    description: "A meditation and mindfulness app designed to reduce stress. Minimalist UI with calming animations and personalized journeys.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
    link: "#",
    color: "#34D399",
  },
  {
    title: "Starlight Agency",
    category: "Creative Portfolio",
    description: "High-impact portfolio for a global creative agency. Featuring experimental navigation and bold typography.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    color: "#F87171",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Grid - Consistent with design system */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 text-white">
              Selected <span className="text-[#BD9DFF] italic font-serif uppercase">Work</span>
            </h1>
            <p className="max-w-2xl mx-auto text-[#A1A1AA] text-lg md:text-2xl font-sans font-light leading-relaxed px-2">
              We don't just build websites. We craft digital experiences that redefine industries and drive massive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group relative"
              >
                <Link href={project.link} target={project.link !== "#" ? "_blank" : undefined} className={project.link === "#" ? "pointer-events-none" : ""}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-[#BD9DFF] text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-[0_0_30px_rgba(189,157,255,0.4)]">
                          <ArrowUpRight size={40} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-4">
                        <span 
                          className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border"
                          style={{ 
                            color: project.color, 
                            borderColor: `${project.color}33`, 
                            backgroundColor: `${project.color}11` 
                          }}
                        >
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-heading text-3xl md:text-5xl font-black tracking-tighter text-white group-hover:text-[#BD9DFF] transition-colors leading-none">
                        {project.title}
                      </h3>
                      <p className="text-[#A1A1AA] text-lg md:text-xl font-sans font-light leading-relaxed max-w-lg opacity-80 group-hover:opacity-100 transition-opacity">
                        {project.description}
                      </p>
                    </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-48 bg-black relative overflow-hidden border-t border-white/5">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-[#BD9DFF]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-heading text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter mb-12 text-white leading-[0.9]"
          >
            Have a project <br />in <span className="text-primary italic font-serif">mind?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/#book" 
              className="inline-flex items-center gap-6 bg-[#BD9DFF] text-black px-12 py-6 rounded-full font-heading font-black text-xl md:text-2xl uppercase tracking-tighter hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl shadow-[#BD9DFF]/20"
            >
              Start a Conversation
              <ArrowUpRight size={28} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
