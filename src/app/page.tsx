import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

// Lazy load below-the-fold/heavy components
const Services = dynamic(() => import("@/components/services").then(m => m.Services));
const Stakes = dynamic(() => import("@/components/stakes").then(m => m.Stakes));
const Portfolio = dynamic(() => import("@/components/portfolio").then(m => m.Portfolio), {
  loading: () => <div className="h-96 animate-pulse bg-white/5 mx-5 rounded-3xl" />,
});
const Testimonials = dynamic(() => import("@/components/testimonials").then(m => m.Testimonials), {
  loading: () => <div className="h-96 animate-pulse bg-white/5 mx-5 rounded-3xl" />,
});
const Process = dynamic(() => import("@/components/process").then(m => m.Process));
const LeadMagnet = dynamic(() => import("@/components/lead-magnet").then(m => m.LeadMagnet));
const Booking = dynamic(() => import("@/components/booking").then(m => m.Booking));
const FAQAccordionBlock = dynamic(() => import("@/components/ui/faq-accordion-block-shadcnui").then(m => m.FAQAccordionBlock));
const Contact = dynamic(() => import("@/components/contact").then(m => m.Contact));
const Footer = dynamic(() => import("@/components/footer").then(m => m.Footer));
const Popup = dynamic(() => import("@/components/popup").then(m => m.Popup));

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services /> {/* Value Stack */}
      <Stakes />
      <Portfolio />
      <Testimonials />
      <Process />
      <LeadMagnet />
      <section id="book" className="py-16 md:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-8 md:mb-12 text-center">
            Book Your Free <span className="text-primary italic font-serif">Strategy Call</span>
          </h2>
          <Booking />
        </div>
      </section>
      <FAQAccordionBlock />
      <Contact />
      <Footer />
      <Popup />
    </main>
  );
}
