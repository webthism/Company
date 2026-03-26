import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | Webthism",
  description: "Get technical support or have your questions answered by the Webthism team. We're here to help you craft extraordinary digital experiences.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 selection:bg-primary/30">
      {/* Background Grid - Matching site theme */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] pointer-events-none opacity-20" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <header className="mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-4 text-white">
            Support – <span className="text-[#BD9DFF] italic font-serif text-white">Webthism</span>
          </h1>
          <p className="text-[#A1A1AA] font-sans font-light text-lg max-w-2xl leading-relaxed">
            If you need help or have any questions about our website or services, we&apos;re here to assist you.
          </p>
        </header>

        <div className="grid gap-16">
          {/* Contact Section */}
          <section className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
               Contact Us
            </h2>
            <div className="space-y-4">
              <p className="text-[#A1A1AA]">
                Reach out directly via email. We aim to respond to all queries within <strong className="text-white">24–48 hours</strong>.
              </p>
              <a 
                href="mailto:admin@webthism.com" 
                className="inline-flex items-center gap-2 text-[#BD9DFF] hover:text-[#A984FF] transition-all font-bold text-2xl underline underline-offset-8"
              >
                admin@webthism.com
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-heading font-black tracking-tighter text-white mb-10">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-8">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-[#BD9DFF]">1.</span> What is Webthism?
                </h3>
                <p className="text-[#A1A1AA] pl-7">
                  Webthism is a boutique digital craft agency specialized in building high-performance, custom-coded web experiences for bold brands and startups.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-[#BD9DFF]">2.</span> I found an issue. What should I do?
                </h3>
                <p className="text-[#A1A1AA] pl-7">
                  Please email us at <a href="mailto:admin@webthism.com" className="text-white hover:text-[#BD9DFF]">admin@webthism.com</a> with details and screenshots if possible. Your feedback helps us maintain our premium standards.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-[#BD9DFF]">3.</span> Do you collect user data?
                </h3>
                <p className="text-[#A1A1AA] pl-7">
                  We use advanced analytics tools to improve the user experience of our agency site. See our <Link href="/privacy" className="text-[#BD9DFF] hover:underline">Privacy Policy</Link> for full details.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Support Section */}
          <section className="pt-12 border-t border-white/10">
            <div className="bg-gradient-to-br from-[#BD9DFF]/5 to-transparent p-8 rounded-3xl border border-[#BD9DFF]/10">
              <h2 className="text-2xl font-heading font-bold text-white mb-6">Technical Support</h2>
              <p className="text-[#A1A1AA] mb-6">
                If you are facing technical issues, please include the following in your email to help us solve it faster:
              </p>
              <ul className="grid gap-3 text-[#D4D4D8] font-sans">
                <li className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-[#BD9DFF]" />
                  Device type (e.g., iPhone 15, MacBook Pro)
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-[#BD9DFF]" />
                  Browser (e.g., Chrome, Safari)
                </li>
                <li className="size-1.5 flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-[#BD9DFF]" />
                  Screenshot of the issue
                </li>
              </ul>
            </div>
          </section>

          <footer className="text-center pt-10 opacity-40 text-xs uppercase tracking-widest">
            Thank you for using Webthism — Digital Alchemy for the Bold.
          </footer>
        </div>
      </div>
    </main>
  );
}
