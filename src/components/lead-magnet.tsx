"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "./ui/form-base";
import { Field, FieldLabel, Input, FieldError, FormButton } from "./ui/form-components";
import { sendBlueprintAccess } from "@/app/actions/blueprint";
import { useState } from "react";

export const LeadMagnet = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section className="relative py-48 bg-black overflow-hidden border-t border-white/5">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#BD9DFF]/5 blur-[160px] -z-10 rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="mb-10 inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] rounded-full text-[#BD9DFF] border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD9DFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BD9DFF]"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Free Resource</span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-10 text-white leading-[0.9]">
              The 2026 <br />
              <span className="text-[#BD9DFF] italic font-serif">Growth</span> <br />
              Blueprint
            </h2>
            
            <p className="text-[#A1A1AA] text-xl font-sans font-extralight mb-16 max-w-lg leading-relaxed italic opacity-80">
              Discover the exact "conversion-first" framework we use to build 7-figure digital ecosystems for our partners.
            </p>
            
            <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#BD9DFF]/10 blur-[80px] rounded-full group-hover:bg-[#BD9DFF]/20 transition-colors duration-700" />
              
              <Form 
                className="gap-6" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setError(null);
                  
                  const formData = new FormData(e.currentTarget as HTMLFormElement);
                  const name = formData.get("name") as string;
                  const email = formData.get("email") as string;
                  
                  try {
                    const result = await sendBlueprintAccess(email, name);
                    if (result.success) {
                      setIsSuccess(true);
                    } else {
                      setError(result.error || "Submission failed. Please check your config.");
                      console.error("Submission failed:", result.error);
                    }
                  } catch (error) {
                    setError("An unexpected error occurred.");
                    console.error("Submission error:", error);
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div className="grid grid-cols-1 gap-6">
                  <Field name="name">
                    <FieldLabel className="text-[#BD9DFF]">Full Name</FieldLabel>
                    <Input name="name" placeholder="Jane Doe" required className="border-white/5 bg-white/5" />
                  </Field>

                  <Field name="email">
                    <FieldLabel className="text-[#BD9DFF]">Email Address</FieldLabel>
                    <Input name="email" placeholder="you@example.com" required type="email" className="border-white/5 bg-white/5" />
                  </Field>
                </div>
                
                <FormButton 
                  type="submit" 
                  className="w-full mt-4 h-16 text-xl"
                  loading={isSubmitting}
                  disabled={isSuccess}
                >
                  {isSuccess ? "Access Sent!" : "Get Instant Access"}
                </FormButton>

                {error && (
                  <p className="text-red-400 text-xs text-center mt-2 font-mono opacity-80">
                    {error}
                  </p>
                )}

                <p className="text-[10px] text-center text-[#A1A1AA] font-sans tracking-[0.2em] uppercase opacity-40">
                   Join 2,400+ Elite Business Owners 
                </p>
              </Form>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative perspective-2000 hidden lg:block"
          >
            {/* 3D Document Mockup */}
            <motion.div
              whileHover={{ rotateY: -15, rotateX: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              className="relative aspect-[3/4] max-w-[450px] mx-auto group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#BD9DFF]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full w-full bg-[#111111] rounded-[3.5rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-16">
                {/* PDF Chrome-like Header */}
                <div className="flex gap-2 mb-12 opacity-30">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>

                <div className="mt-auto">
                    <div className="mb-8 w-16 h-1 w-full bg-gradient-to-r from-[#BD9DFF] to-transparent rounded-full opacity-50" />
                    <FileText size={80} strokeWidth={1} className="text-[#BD9DFF] mb-8" />
                    <h3 className="font-heading text-4xl font-black tracking-tighter text-white mb-4 leading-tight">
                        WebGrowth <br />
                        <span className="text-[#BD9DFF]">Blueprint</span> <br />
                        2026
                    </h3>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        <CheckCircle size={14} className="text-[#BD9DFF]" />
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#A1A1AA]">Expert PDF Guide + Video</p>
                    </div>
                </div>

                {/* Abstract Blueprint Lines */}
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
