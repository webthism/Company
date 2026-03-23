"use client";

import { useEffect } from "react";

export const Calendly = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full h-[700px] bg-black border border-white/5 rounded-3xl overflow-hidden shadow-2xl" 
      data-url="https://calendly.com/your-calendly-id/30min?hide_event_type_details=1&hide_gdpr_banner=1"
    />
  );
};
