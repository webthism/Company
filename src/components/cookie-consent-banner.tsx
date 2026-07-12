"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_KEY, getStoredConsent } from "@/lib/cookie-consent";

export const CookieConsentBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (getStoredConsent()) return;
    const timer = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const choose = (value: "accepted" | "necessary") => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setShow(false);
    if (value === "accepted") {
      // Analytics/marketing scripts (GA, Hotjar, Apollo) pick this up via AnalyticsScripts.
      window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-5 left-5 right-5 max-[600px]:bottom-3 max-[600px]:left-3 max-[600px]:right-3",
        "mx-auto max-w-[620px] z-[9999] rounded-2xl bg-[#2a211c] text-white",
        "px-6 py-[22px] shadow-[0_20px_40px_rgba(0,0,0,0.25)]",
        "flex flex-wrap items-center gap-[18px] max-[600px]:flex-col max-[600px]:items-stretch",
        "transition-transform duration-[400ms] ease-in-out",
        show ? "translate-y-0" : "translate-y-[140%]"
      )}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="flex-1 min-w-[260px] text-sm leading-relaxed text-white/80">
        We use cookies to improve your experience and understand how visitors use our site. See our{" "}
        <Link href="/privacy" className="text-[#e8792e] underline hover:text-[#e8792e]/80">
          Privacy Policy
        </Link>{" "}
        for details.
      </div>
      <div className="flex gap-2.5 shrink-0 max-[600px]:justify-stretch">
        <button
          id="cb-necessary"
          onClick={() => choose("necessary")}
          className="max-[600px]:flex-1 rounded-full border border-[#4a3b36] bg-transparent px-[18px] py-[11px] text-[13px] font-bold text-white whitespace-nowrap cursor-pointer"
        >
          Necessary Only
        </button>
        <button
          id="cb-accept"
          onClick={() => choose("accepted")}
          className="max-[600px]:flex-1 rounded-full bg-[#c1272d] px-[18px] py-[11px] text-[13px] font-bold text-white whitespace-nowrap cursor-pointer hover:bg-[#a81f24]"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};
