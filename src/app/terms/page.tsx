import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Webthism",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fdf6ec] py-20 px-5 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="font-logo text-2xl text-[#c1272d] mb-10 inline-block hover:opacity-80 transition-opacity">
          Webthism
        </Link>
        <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#2a211c] mb-8">
          Terms of Service
        </h1>
        <div className="flex flex-col gap-6 text-[#2a211c]/80 leading-relaxed">
          <p>
            {/* Placeholder: replace with your actual terms of service */}
            This is a placeholder terms of service page. Webthism will update this page with the terms
            governing use of our website and services.
          </p>
          <p>
            If you have questions in the meantime, reach us at{" "}
            <a href="mailto:admin@webthism.com" className="text-[#c1272d] hover:underline">
              admin@webthism.com
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}
