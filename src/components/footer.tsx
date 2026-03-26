"use client";

export const Footer = () => {
  return (
    <footer className="bg-black w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-24">
        <div className="flex flex-col items-center gap-8 md:gap-10 md:flex-row md:justify-between">
          <div className="text-2xl md:text-3xl font-normal font-logo text-white">
            Webthism
          </div>
          
          <nav aria-label="Social links" className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { label: "Twitter", href: "https://x.com/webthism" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/aayush-kumar18/" },
              { label: "Instagram", href: "https://www.instagram.com/webthism" },
              { label: "Privacy", href: "/privacy" },
              { label: "Support", href: "/support" },
              { label: "Email", href: "mailto:admin@webthism.com" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" && social.label !== "Privacy" && social.label !== "Support" ? "_blank" : undefined}
                rel={social.label !== "Email" && social.label !== "Privacy" && social.label !== "Support" ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="font-sans text-xs text-muted-foreground tracking-[0.2em] uppercase hover:text-primary transition-all underline-offset-8 hover:underline"
              >
                {social.label}
              </a>
            ))}
          </nav>
          
          <div className="font-sans text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase opacity-40">
            © 2026 Webthism. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
