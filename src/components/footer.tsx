"use client";

export const Footer = () => {
  return (
    <footer className="bg-black w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="bg-gradient-to-br from-zinc-900 to-black p-16 rounded-[3rem] border border-white/5 text-center mb-24">
          <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tighter mb-8 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
            Ready to <span className="text-primary italic font-serif">Dominate</span> Your Market?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto font-sans font-light">
            Stop guessing. Let's build a website that becomes your #1 revenue-generating employee.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-5 rounded-full font-heading font-black text-lg transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(189,157,255,0.3)] cursor-pointer">
              Book Your Free Strategy Call
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white px-12 py-5 rounded-full font-heading font-black text-lg transition-all hover:scale-105 border border-white/10 cursor-pointer">
              View Work
            </button>
          </div>
        </div>

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
