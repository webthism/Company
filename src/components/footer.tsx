"use client";

export const Footer = () => {
  return (
    <footer className="bg-black w-full py-16 px-8 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto">
        <div className="text-2xl font-black text-white tracking-widest uppercase">
          WebThism
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
          © 2024 WebThism. Crafted in the Void.
        </div>
      </div>
    </footer>
  );
};
