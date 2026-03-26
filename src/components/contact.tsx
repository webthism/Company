"use client";

import { submitProjectLead } from "@/app/actions/contact";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    
    try {
      const result = await submitProjectLead(email);
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setError(result.error || "Failed to submit. Please check your config.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setError("An unexpected error occurred.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-64 bg-background">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          viewport={{ once: true }}
          className="font-heading text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter mb-6 md:mb-12"
        >
          Ready to <br /> Start?
        </motion.h2>
        
        <p className="text-muted-foreground text-base md:text-2xl mb-10 md:mb-16 font-sans font-extralight max-w-2xl mx-auto px-2">
          Let&apos;s discuss how we can elevate your brand into the next dimension of digital excellence.
        </p>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:flex-row md:gap-6 max-w-3xl mx-auto items-stretch md:items-center"
        >
          <div className="flex-1 relative group w-full">
            <Input
              name="email"
              type="email"
              placeholder={status === "success" ? "Received!" : "Enter your email"}
              disabled={status === "success" || status === "submitting"}
              required
              className="h-14 md:h-20 bg-card/60 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-10 text-base md:text-xl font-sans font-light focus:ring-primary focus:border-primary focus:ring-2 transition-all"
            />
          </div>
          <Button
            size="lg"
            type="submit"
            disabled={status === "success" || status === "submitting"}
            className="h-14 md:h-20 px-8 md:px-12 bg-white text-black hover:bg-primary hover:text-on-primary rounded-full font-heading font-black text-base md:text-xl transition-all whitespace-nowrap min-w-[160px] md:min-w-[200px] flex items-center justify-center"
          >
            {status === "submitting" ? (
              <Loader2 className="animate-spin" />
            ) : status === "success" ? (
              "Done!"
            ) : (
              "Submit Project"
            )}
          </Button>
        </motion.form>
        {error && (
          <p className="text-red-400 text-xs text-center mt-6 font-mono opacity-80">
            {error}
          </p>
        )}
      </div>
    </section>
  );
};
