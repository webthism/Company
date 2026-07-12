import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Webthism",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fdf6ec] py-20 px-5 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="font-logo text-2xl text-[#c1272d] mb-10 inline-block hover:opacity-80 transition-opacity">
          Webthism
        </Link>
        <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#2a211c] mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#2a211c]/50 mb-10">
          Effective Date: [Insert date] · Website: www.webthism.com
        </p>

        <div className="flex flex-col gap-8 text-[#2a211c]/80 leading-relaxed">
          <p>
            Webthism (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; &quot;the Company&quot;) respects
            your privacy and is committed to protecting the personal information you share with us. This
            Privacy Policy explains what information we collect, how we use it, and the choices you have.
            By using our website or services, you agree to the practices described in this policy.
          </p>

          <Section title="1. Information We Collect">
            <p className="font-semibold text-[#2a211c]">a) Information you provide directly:</p>
            <List items={[
              "Your name and email address when you sign up to receive our free “10 Things Your Restaurant Website Should Have” PDF guide",
              "Your name, email, phone number, and business details when you contact us for a quote or engage our services",
              "Content you provide for your website (menu items, photos, logos, business information) as part of a purchased package",
            ]} />
            <p className="font-semibold text-[#2a211c]">b) Information collected automatically:</p>
            <List items={[
              "IP address, browser type, device information, and pages visited, collected via standard website analytics",
              "Cookies and similar tracking technologies (see Section 3 below)",
            ]} />
            <p className="font-semibold text-[#2a211c]">c) Information from third-party tools:</p>
            <List items={[
              "Data from Google Search Console and Google Webmaster Tools, used to monitor and improve website performance for our clients' sites",
              "Aggregated, non-identifying performance data from any analytics tools connected to your website",
            ]} />
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <List items={[
              "Deliver the free PDF guide you requested, via our email platform, Brevo",
              "Send occasional marketing emails about our services, offers, or related content from contact@webthism.com (you can unsubscribe anytime)",
              "Respond to inquiries and provide quotes",
              "Design, build, and deliver your website and related services",
              "Set up and manage Google Search Console, Webmaster Tools, and Google Business Profile on your behalf, where applicable",
              "Improve our website and services based on usage patterns",
              "Comply with legal obligations",
            ]} />
            <p>
              We do not sell, rent, or trade your personal information to third parties for their
              marketing purposes.
            </p>
          </Section>

          <Section title="3. Cookies and Tracking Technologies">
            <p>
              Our website uses cookies and similar technologies to remember your preferences, understand
              how visitors use our site, and improve site performance.
            </p>
            <p>
              When you first visit our website, you&apos;ll see a cookie consent banner allowing you to
              choose:
            </p>
            <List items={[
              "Accept All — enables analytics and marketing cookies in addition to essential ones",
              "Necessary Only — limits us to cookies required for the website to function",
            ]} />
            <p>
              Your choice is saved so you won&apos;t be asked again on future visits. You can also
              control or disable cookies at any time through your browser settings, though this may
              affect certain features of our website.
            </p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>
              Depending on the package or services you purchase, we may integrate with or share limited
              information with third-party platforms, including:
            </p>
            <List items={[
              "Brevo — used to send our free PDF guide and manage email marketing communications",
              "Google Search Console / Webmaster Tools — for SEO monitoring and search performance",
              "Google Business Profile — for local listing and review management",
              "Payment gateways — to process payments for your website's online ordering functionality",
              "POS systems and food delivery platforms (e.g., Zomato, Swiggy) — for order integration",
              "WhatsApp Business API/tools — for order notifications, where applicable",
            ]} />
            <p>
              These third parties have their own privacy policies governing how they handle data, and we
              encourage you to review them. We are not responsible for the data practices of third-party
              platforms once information is shared as part of an integration you&apos;ve requested.
            </p>
          </Section>

          <Section title="5. Data Sharing and Disclosure">
            <p>We may share your information:</p>
            <List items={[
              "With third-party service providers listed above, only as needed to deliver our services",
              "If required by law, regulation, legal process, or government request",
              "To protect the rights, property, or safety of Webthism, our clients, or others",
              "In connection with a business transfer (merger, acquisition, or sale of assets), where your information may be transferred as part of that transaction",
            ]} />
            <p>We do not share your personal data with unrelated third parties for advertising purposes.</p>
          </Section>

          <Section title="6. Data Security">
            <p>
              We take reasonable technical and organizational measures to protect your personal
              information from unauthorized access, alteration, disclosure, or destruction. However, no
              method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>We retain your personal information for as long as necessary to:</p>
            <List items={[
              "Provide our services to you",
              "Comply with legal, accounting, or reporting obligations",
              "Resolve disputes and enforce our agreements",
            ]} />
            <p>
              If you unsubscribe from our email list, we will stop sending marketing emails but may
              retain your email in Brevo for record-keeping purposes unless you request deletion.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>You have the right to:</p>
            <List items={[
              "Access the personal information we hold about you",
              "Correct inaccurate or incomplete information",
              "Request deletion of your personal information, subject to any legal or contractual obligations that require us to retain it",
              "Unsubscribe from marketing emails at any time via the link in our emails",
              "Change your cookie preference at any time by clearing your browser's saved consent and revisiting our site",
              "Object to or restrict certain processing of your data",
            ]} />
            <p>
              To exercise any of these rights, contact us at admin@webthism.com. We will respond within a
              reasonable timeframe.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our website and services are not directed at individuals under 18. We do not knowingly
              collect personal information from children. If you believe a child has provided us with
              personal information, please contact us so we can remove it.
            </p>
          </Section>

          <Section title="10. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or
              legal requirements. Any changes will be posted on this page with an updated effective date.
              We encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>
              This Privacy Policy is governed by the laws of India, and any disputes relating to it shall
              be subject to the exclusive jurisdiction of the courts in Haryana.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or how we handle
              your data, please contact us at:
            </p>
            <p>
              <strong className="text-[#2a211c]">Webthism</strong>
              <br />
              Email:{" "}
              <a href="mailto:admin@webthism.com" className="text-[#c1272d] hover:underline">
                admin@webthism.com
              </a>
              <br />
              Marketing/newsletter queries:{" "}
              <a href="mailto:contact@webthism.com" className="text-[#c1272d] hover:underline">
                contact@webthism.com
              </a>
              <br />
              Website: www.webthism.com
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-heading text-xl font-bold text-[#2a211c]">{title}</h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 flex flex-col gap-1.5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
