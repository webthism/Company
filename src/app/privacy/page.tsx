import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Webthism",
  description: "Learn how Webthism collects, uses, and protects your information. Our privacy commitment to our clients and visitors.",
};

export default function PrivacyPage() {
  const effectiveDate = "March 27, 2026";

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 selection:bg-primary/30">
      {/* Background Grid - Matching site theme */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] pointer-events-none opacity-20" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <header className="mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-4">
            Privacy <span className="text-[#BD9DFF] italic font-serif">Policy</span>
          </h1>
          <p className="text-[#A1A1AA] font-sans font-light tracking-wide uppercase text-sm">
            Effective Date: {effectiveDate}
          </p>
        </header>

        <section className="space-y-12 font-sans text-[#D4D4D8] leading-relaxed">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[#A1A1AA] mb-10">
              At <strong className="text-white">Webthism</strong> (https://www.webthism.com), we value your privacy. This Privacy Policy explains how we collect, use, and protect your information.
            </p>

            <div className="grid gap-12">
              <article>
                <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-[#BD9DFF]">01.</span> Information We Collect
                </h2>
                <p>
                  We may collect non-personal information such as browser type, device information, pages visited, and IP address through analytics tools like Google Analytics 4. This data helps us understand how visitors interact with our boutique studio's digital experience.
                </p>
              </article>

              <article>
                <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-[#BD9DFF]">02.</span> Use of Information
                </h2>
                <p>
                  We use this data to improve our website, analyze traffic patterns, and enhance the overall user experience of our high-end web services. Your data allows us to refine our digital craft and provide more personalized content.
                </p>
              </article>

              <article>
                <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-[#BD9DFF]">03.</span> Cookies
                </h2>
                <p>
                  We use cookies to store information about visitors’ preferences and to optimize site performance. You can disable cookies through your individual browser settings if you wish to opt-out.
                </p>
              </article>

              <article>
                <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-[#BD9DFF]">04.</span> Third-Party Services
                </h2>
                <p>
                  We use <strong className="text-white">Google Analytics</strong> and <strong className="text-white">Hotjar</strong>, which may collect and process data according to their respective privacy policies. We leverage these tools only to gather insights into site usage and performance.
                </p>
              </article>

              <article>
                <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-[#BD9DFF]">05.</span> Data Protection
                </h2>
                <p>
                  We do not sell, trade, or rent users’ personal identification information to others. We are committed to maintaining the security and confidentiality of any information shared with us.
                </p>
              </article>

              <article>
                <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-[#BD9DFF]">06.</span> Your Consent
                </h2>
                <p>
                  By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
              </article>

              <article>
                <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-[#BD9DFF]">07.</span> Updates
                </h2>
                <p>
                  We may update this policy from time to time. We encourage visitors to frequently check this page for any changes. Your continued use of the site after any change in this Privacy Policy will constitute your acceptance of such change.
                </p>
              </article>

              <article className="pt-8 border-t border-white/10">
                <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-[#BD9DFF]">08.</span> Contact Us
                </h2>
                <p>
                  If you have any questions or require more information regarding our privacy practices, please contact us directly at:
                </p>
                <a 
                  href="mailto:admin@webthism.com" 
                  className="inline-block mt-4 text-[#BD9DFF] hover:text-[#A984FF] transition-colors font-bold text-lg underline underline-offset-8"
                >
                  admin@webthism.com
                </a>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
