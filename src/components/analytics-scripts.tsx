"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_EVENT, getStoredConsent } from "@/lib/cookie-consent";

export const AnalyticsScripts = () => {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === "accepted") setConsented(true);
    const onAccept = () => setConsented(true);
    window.addEventListener(COOKIE_CONSENT_EVENT, onAccept);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onAccept);
  }, []);

  if (!consented) return null;

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-KGPE4FTQ8D`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KGPE4FTQ8D');
        `}
      </Script>

      {/* Apollo Tracking Script */}
      <Script id="apollo-tracker" strategy="afterInteractive">
        {`
          function initApollo(){
            var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
            o.async=!0;
            o.defer=!0;
            o.onload=function(){
              var config = {appId:"69b791bcfae0f5001db5021c"};
              if(window.trackingFunctions) {
                window.trackingFunctions.onLoad(config);
              } else if (window.apollo) {
                 window.apollo.init(config);
              }
            };
            document.head.appendChild(o);
          }
          initApollo();
        `}
      </Script>
    </>
  );
};
