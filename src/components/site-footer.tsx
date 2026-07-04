"use client";

export const SiteFooter = () => {
  return (
    <footer className="w-full bg-[#2a211c] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-10 md:py-14 flex flex-col items-center gap-6 text-center">
        <p className="font-logo text-2xl text-white">Webthism</p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-xs text-white/60">
          {/* Placeholder: replace with real contact details */}
          <a href="mailto:hello@webthism.com" className="hover:text-white transition-colors">hello@webthism.com</a>
          <a href="tel:+919999999999" className="hover:text-white transition-colors">+91 99999 99999</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
        </div>

        <div className="flex gap-5">
          {/* Placeholder: replace with real social links */}
          <a href="https://instagram.com/webthism" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 5.4a4.44 4.44 0 1 0 0 8.88 4.44 4.44 0 0 0 0-8.88Zm0 7.32a2.88 2.88 0 1 1 0-5.76 2.88 2.88 0 0 1 0 5.76Zm4.62-7.5a1.04 1.04 0 1 1-2.07 0 1.04 1.04 0 0 1 2.07 0Z"/></svg>
          </a>
          <a href="https://linkedin.com/company/webthism" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>
          </a>
        </div>

        <a href="/privacy" className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors underline underline-offset-4">
          Privacy Policy
        </a>

        <p className="font-sans text-[10px] text-white/30">© 2026 Webthism. All rights reserved.</p>
      </div>
    </footer>
  );
};
