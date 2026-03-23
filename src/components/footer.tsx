"use client";

export const Footer = () => {
  return (
    <footer className="bg-black w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-3xl font-normal font-logo text-white">
            Webthism
          </div>
          
          <div className="flex flex-wrap justify-center gap-10">
            {["Twitter", "LinkedIn", "Instagram", "Email"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-sans text-xs text-muted-foreground tracking-[0.2em] uppercase hover:text-primary transition-all underline-offset-8 hover:underline"
              >
                {social}
              </a>
            ))}
          </div>
          
          <div className="font-sans text-xs text-muted-foreground tracking-widest uppercase opacity-40">
            © 2026 Webthism. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
