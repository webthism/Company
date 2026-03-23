"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-64 bg-background">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-9xl font-black tracking-tighter mb-12"
        >
          Ready to <br /> Start?
        </motion.h2>
        
        <p className="text-muted-foreground text-xl md:text-2xl mb-16 font-sans font-extralight max-w-2xl mx-auto">
          Let's discuss how we can elevate your brand into the next dimension of digital excellence.
        </p>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 max-w-3xl mx-auto"
        >
          <div className="flex-1 relative group">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-20 bg-card/60 backdrop-blur-xl border border-white/10 rounded-full px-10 text-xl font-sans font-light focus:ring-primary focus:border-primary focus:ring-2 transition-all"
            />
          </div>
          <Button
            size="lg"
            className="h-20 px-12 bg-white text-black hover:bg-primary hover:text-on-primary rounded-full font-heading font-black text-xl transition-all whitespace-nowrap"
          >
            Submit Project
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
