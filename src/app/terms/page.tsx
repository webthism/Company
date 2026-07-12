import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions — Webthism",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fdf6ec] py-20 px-5 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="font-logo text-2xl text-[#c1272d] mb-10 inline-block hover:opacity-80 transition-opacity">
          Webthism
        </Link>
        <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#2a211c] mb-2">
          Terms and Conditions
        </h1>
        <p className="text-sm text-[#2a211c]/50 mb-10">
          Effective Date: [Insert date] · Website: www.webthism.com
        </p>

        <div className="flex flex-col gap-8 text-[#2a211c]/80 leading-relaxed">
          <p>
            Welcome to Webthism. These Terms and Conditions (&quot;Terms&quot;) govern your use of our
            website and services. By accessing our website, downloading our free resources, or engaging
            our services, you agree to be bound by these Terms. If you do not agree, please do not use
            our website or services.
          </p>

          <Section title="1. About Us">
            <p>
              Webthism (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; &quot;the Company&quot;) is a web
              design and development service provider specializing in websites for restaurants and food
              businesses. Our registered contact email is admin@webthism.com.
            </p>
          </Section>

          <Section title="2. Our Services">
            <p>
              We offer website design and development packages (Starter, Growth, and Premium), including
              but not limited to:
            </p>
            <List items={[
              "Custom website design and development",
              "Digital menu integration",
              "Online reservation and ordering systems",
              "Content Management System (CMS) setup",
              "Search Engine Optimization (SEO), including Google Search Console and Google Webmaster Tools setup",
              "Google Business Profile setup and review management",
              "Third-party integrations (payment gateways, POS systems, delivery platforms such as Zomato and Swiggy, WhatsApp ordering)",
            ]} />
            <p>
              The exact scope of services depends on the package purchased, as outlined on our pricing
              page at the time of purchase. Any features not explicitly included in the selected package
              are considered out of scope unless agreed to in writing (including email) as a paid add-on.
            </p>
          </Section>

          <Section title={'3. Free Resource ("10 Things Your Restaurant Website Should Have")'}>
            <p>
              We offer a free downloadable PDF guide in exchange for your email address. By submitting
              your email, you agree to:
            </p>
            <List items={[
              "Receive the requested PDF via email",
              "Occasionally receive emails from us about our services, offers, or related content",
            ]} />
            <p>
              You may unsubscribe at any time using the link provided in our emails. We do not sell or
              rent your email address to third parties. See our Privacy Policy for details on how we
              handle your data.
            </p>
          </Section>

          <Section title="4. Payment Terms">
            <List items={[
              "A 50% advance payment is required before work begins on any package.",
              "The remaining 50% balance is due upon completion, before final handover/deployment of the live website.",
              "Payment must be made via the methods specified in your invoice.",
              "Work will not commence, and files/credentials will not be transferred, until payment terms are met.",
              "Prices listed on our website are subject to change without prior notice, but the price agreed upon at the time of order confirmation will be honored for that project.",
            ]} />
          </Section>

          <Section title="5. Project Timeline & Delivery">
            <List items={[
              "Estimated delivery timelines are provided per package (e.g., 7–10 days for Starter, 15–20 days for Growth, 25–30 days for Premium) and begin only after we receive all necessary content from the client (menu items, photos, text, logos, etc.) and the advance payment.",
              "Delays in providing content, feedback, or approvals by the client will extend the delivery timeline accordingly, and we are not liable for such delays.",
            ]} />
          </Section>

          <Section title="6. Revisions & Scope Changes">
            <List items={[
              "Each package includes a limited number of revision rounds as communicated at the time of purchase.",
              "Additional revisions or changes beyond the agreed scope will be billed separately at our standard rate.",
              "A “revision” refers to design or content adjustments within the original scope, not the addition of new pages, features, or functionality.",
            ]} />
          </Section>

          <Section title="7. Client Responsibilities">
            <p>To ensure timely delivery, the client agrees to:</p>
            <List items={[
              "Provide accurate and complete content (menu, images, business details, etc.) in a timely manner",
              "Respond to requests for feedback or approval within a reasonable time",
              "Ensure they have the rights to use any content, images, logos, or trademarks provided to us for use on the website",
              "Maintain their own account credentials for third-party services (e.g., Google Business Profile, payment gateways, delivery platforms) unless otherwise agreed",
            ]} />
          </Section>

          <Section title="8. Third-Party Services & Integrations">
            <p>
              Our services may involve integration with third-party platforms, including but not limited
              to Google Search Console, Google Webmaster Tools, Google Business Profile, payment gateways,
              POS systems, and food delivery platforms (Zomato, Swiggy, etc.).
            </p>
            <List items={[
              "We are not responsible for the uptime, policies, pricing, or changes made by these third-party platforms.",
              "Any fees, subscriptions, or transaction charges levied by third-party services are the client's responsibility, separate from our service fees.",
              "We will make reasonable efforts to ensure integrations function correctly at the time of delivery, but cannot guarantee continued compatibility if third-party platforms change their systems after project completion.",
            ]} />
          </Section>

          <Section title="9. Intellectual Property & Ownership">
            <List items={[
              "Upon full payment, the client owns the final website design and content created specifically for them.",
              "Webthism retains the right to showcase completed projects in our portfolio, marketing materials, and website unless the client requests otherwise in writing.",
              "Any underlying code frameworks, templates, or proprietary tools developed by Webthism for internal efficiency remain our property and are not transferred to the client.",
              "The client warrants that any content (images, logos, text) they provide does not infringe on any third party's intellectual property rights, and agrees to indemnify us against any claims arising from such content.",
            ]} />
          </Section>

          <Section title="10. Refund Policy">
            <List items={[
              "Before work begins: If a client cancels before any work has started, the advance payment is refundable minus a processing fee (if applicable).",
              "After work begins: Once design or development work has commenced, the advance payment becomes non-refundable, as it covers time and resources already committed.",
              "After delivery: No refunds will be issued once the final website has been delivered and approved by the client.",
              "Refund requests must be submitted in writing to admin@webthism.com and will be reviewed on a case-by-case basis.",
            ]} />
          </Section>

          <Section title="11. Website Maintenance & Support">
            <List items={[
              "Premium package clients receive 30 days of priority support post-launch for bug fixes related to the original scope of work.",
              "Ongoing maintenance, content updates, hosting, and domain renewal beyond the included support period are not included unless purchased separately as a maintenance plan.",
              "We are not responsible for issues arising from changes made by the client or third parties after project handover.",
            ]} />
          </Section>

          <Section title="12. Limitation of Liability">
            <p>To the fullest extent permitted by law, Webthism shall not be liable for:</p>
            <List items={[
              "Any indirect, incidental, or consequential damages arising from the use of our website or services",
              "Loss of business, revenue, or data resulting from website downtime, third-party platform changes, or client-side errors",
              "Any issues arising from content or credentials provided by the client",
            ]} />
            <p>
              Our total liability for any claim related to our services shall not exceed the amount paid
              by the client for the specific service in question.
            </p>
          </Section>

          <Section title="13. Confidentiality">
            <p>
              Both parties agree to keep confidential any proprietary business information shared during
              the course of the project, except where disclosure is required by law.
            </p>
          </Section>

          <Section title="14. Termination">
            <p>We reserve the right to refuse service or terminate an ongoing project if:</p>
            <List items={[
              "The client fails to make payments as agreed",
              "The client provides unlawful, offensive, or infringing content",
              "Communication or content required to proceed is not provided within a reasonable time",
            ]} />
            <p>
              In such cases, any advance payment made is non-refundable, and the client will be billed
              for work completed up to the point of termination.
            </p>
          </Section>

          <Section title="15. Privacy">
            <p>
              We respect your privacy. Information collected through our website (including email
              addresses submitted for our free PDF guide) is used solely for providing our services and
              communicating with you. For full details, please refer to our{" "}
              <Link href="/privacy" className="text-[#c1272d] hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </Section>

          <Section title="16. Governing Law & Jurisdiction">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any
              disputes arising out of or relating to these Terms shall be subject to the exclusive
              jurisdiction of the courts in Haryana.
            </p>
          </Section>

          <Section title="17. Changes to These Terms">
            <p>
              We reserve the right to update or modify these Terms at any time. Changes will be posted on
              this page with an updated effective date. Continued use of our website or services after
              changes constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="18. Contact Us">
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              <strong className="text-[#2a211c]">Webthism</strong>
              <br />
              Email:{" "}
              <a href="mailto:admin@webthism.com" className="text-[#c1272d] hover:underline">
                admin@webthism.com
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
