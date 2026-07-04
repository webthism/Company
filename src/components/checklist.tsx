"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKLIST = [
  { title: "Mobile-First Design", why: "75% of restaurant searches happen on phones. Not mobile-perfect = instant bounce." },
  { title: "High-Quality Food Photography", why: "People eat with their eyes first. Blurry photos = no orders." },
  { title: "Easy-to-Find Menu", why: "A hungry person shouldn't dig for your menu. 1–2 clicks max." },
  { title: "WhatsApp Ordering Integration", why: "One click to order directly, zero aggregator fees." },
  { title: "Table Reservation System", why: "Bookings captured while you sleep." },
  { title: "Business Hours + Google Maps", why: "Nothing kills a visit like \"Is it open?\" or getting lost." },
  { title: "Contact Info Everywhere", why: "Phone, email, WhatsApp — never make them search." },
  { title: "Customer Reviews & Ratings", why: "92% of people read reviews before visiting." },
  { title: "Fast Loading Speed (under 3 seconds)", why: "Every extra second = 7% fewer conversions." },
  { title: "Clear Call-to-Action Buttons", why: "Order Now, Book a Table, Call — dead simple." },
];

// Placeholder: wire this up to your email tool (Resend, Mailchimp, etc.) later.
async function submitChecklistLead(data: { name: string; email: string; restaurant: string }) {
  console.log("Checklist lead captured:", data);
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { success: true };
}

const LeadMagnetModal = ({ onClose }: { onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    await submitChecklistLead({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      restaurant: formData.get("restaurant") as string,
    });
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 backdrop-blur-sm px-5"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f3e9dc] flex items-center justify-center text-[#2a211c] hover:bg-[#e8dcc8] transition-colors"
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle2 size={48} className="mx-auto mb-4 text-[#c1272d]" />
            <h3 className="font-heading text-2xl font-black text-[#2a211c] mb-2">Check your email!</h3>
            <p className="font-sans text-sm text-[#7a6a5c]">Your checklist + audit request is on its way.</p>
          </div>
        ) : (
          <>
            <h3 className="font-heading text-2xl font-black text-[#2a211c] mb-2 pr-8">
              Download the Free Checklist + Get a Free Website Audit
            </h3>
            <p className="font-sans text-sm text-[#7a6a5c] mb-6">
              Tell us where to send it.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                name="name"
                required
                placeholder="Your name"
                className="h-12 px-4 rounded-xl border border-[#e8dcc8] bg-[#fdf6ec] font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#c1272d]"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="h-12 px-4 rounded-xl border border-[#e8dcc8] bg-[#fdf6ec] font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#c1272d]"
              />
              <input
                name="restaurant"
                required
                placeholder="Restaurant name"
                className="h-12 px-4 rounded-xl border border-[#e8dcc8] bg-[#fdf6ec] font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#c1272d]"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 rounded-xl font-heading font-black bg-[#c1272d] text-white hover:bg-[#a81f24] mt-2"
              >
                {isSubmitting ? "Sending…" : "Download"}
              </Button>
              <button
                type="button"
                onClick={onClose}
                className="text-center font-sans text-sm text-[#7a6a5c] hover:text-[#2a211c] transition-colors mt-1"
              >
                Maybe later
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export const Checklist = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="w-full py-16 md:py-28 px-5 md:px-8 bg-[#f3e9dc]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#2a211c] text-center mb-10 md:mb-14"
        >
          10 Things Every Restaurant Website Must Have
        </motion.h2>

        <div className="flex flex-col gap-4 mb-10 md:mb-14">
          {CHECKLIST.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.5) }}
              className="flex items-start gap-3 bg-white rounded-2xl p-4 md:p-5 border border-[#e8dcc8]"
            >
              <CheckCircle2 size={22} className="shrink-0 mt-0.5 text-[#c1272d]" />
              <div>
                <p className="font-heading font-bold text-[#2a211c]">{item.title}</p>
                <p className="font-sans text-sm text-[#7a6a5c]">{item.why}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-heading text-lg md:text-xl font-bold text-[#2a211c] mb-8">
          Most restaurant websites miss 7–8 of these. That's why they don't convert. We don't miss any.
        </p>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={() => setModalOpen(true)}
            className="h-12 md:h-14 px-8 rounded-full font-heading font-black text-sm md:text-base bg-[#c1272d] text-white hover:bg-[#a81f24] hover:scale-[1.03] transition-all"
          >
            Download the Free Checklist + Get a Free Website Audit
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && <LeadMagnetModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </section>
  );
};
