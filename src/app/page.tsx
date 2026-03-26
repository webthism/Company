import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Stakes } from "@/components/stakes";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { Process } from "@/components/process";
import { LeadMagnet } from "@/components/lead-magnet";
import { Booking } from "@/components/booking";
import { FAQAccordionBlock } from "@/components/ui/faq-accordion-block-shadcnui";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Popup } from "@/components/popup";

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
