import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#impact", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container-narrow px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display font-bold text-lg tracking-tight"
          >
            Kashvi<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("#contact")}
              className="ml-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:shadow-yellow transition-all"
            >
              Hire Me
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground z-[60] relative"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col justify-center px-8 gap-2">
          {navLinks.map((l, i) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={`text-left font-display text-4xl font-bold py-2 transition-all duration-500 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              } hover:text-primary`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
