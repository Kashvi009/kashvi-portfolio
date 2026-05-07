import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = ["Product Builder", "DevRel Engineer", "Growth Strategist", "Community Architect"];

const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % ROLES.length), 2500);
    return () => clearInterval(t);
  }, [paused]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      id="home"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/3 -left-20 w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-[140px]" />

      <div className="relative z-10 container-narrow px-6 md:px-12 lg:px-20 w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Open to Product · DevRel · Growth roles
          </div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-[6rem] font-bold leading-[0.9] tracking-tight mb-6 animate-fade-up stagger-1">
            <span className="text-gradient">Kashvi</span>
            <br />
            <span className="text-foreground">Arora.</span>
          </h1>

          <div
            className="h-10 md:h-12 mb-5 flex items-center animate-fade-up stagger-2"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <span className="text-sm md:text-base font-mono text-muted-foreground mr-3">/</span>
            <div className="relative">
              {ROLES.map((r, i) => (
                <span
                  key={r}
                  className={`absolute left-0 top-0 whitespace-nowrap font-display text-2xl md:text-4xl font-semibold transition-all duration-500 ${
                    i === idx
                      ? "opacity-100 translate-y-0 text-primary"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  {r}
                </span>
              ))}
              <span className="invisible font-display text-2xl md:text-4xl font-semibold">
                {ROLES.reduce((a, b) => (a.length > b.length ? a : b))}
              </span>
            </div>
          </div>

          <p className="text-lg md:text-2xl font-display text-foreground/85 max-w-2xl mb-10 animate-fade-up stagger-3 leading-snug">
            Builder at the intersection of <span className="text-primary">tech</span>,{" "}
            <span className="text-accent">leadership</span>, and growth.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-up stagger-4">
            <button
              onClick={() => scrollTo("#projects")}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold transition-all hover:shadow-yellow hover:scale-[1.02]"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://drive.google.com/file/d/1tcLdSJ3uyFL95JEgHFkP3vwJNakqrKCL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary border border-border text-foreground rounded-full font-semibold transition-all hover:border-primary/50 hover:text-primary"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Geometric visual right */}
        <div className="hidden lg:flex lg:col-span-4 justify-center items-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 border border-primary/40 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-6 border border-accent/30 rounded-full animate-[spin_22s_linear_infinite_reverse]" />
            <div className="absolute inset-14 border border-primary/20 rounded-full animate-[spin_18s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-mono text-xs text-muted-foreground tracking-[0.3em] text-center">
                BUILD<br />
                <span className="text-primary">·</span> LEAD <span className="text-primary">·</span><br />
                SHIP
              </div>
            </div>
            <div className="absolute -top-2 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 shadow-yellow" />
            <div className="absolute -bottom-2 left-1/2 w-2 h-2 bg-accent rounded-full -translate-x-1/2" />
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("#impact")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
