import { ArrowRight, Download, Linkedin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: 1000000, label: "Impressions", suffix: "+", display: "1M" },
  { value: 300, label: "Events Curated", suffix: "+", display: "300" },
  { value: 50, label: "Judge Panels", suffix: "+", display: "50" },
];

const Counter = ({ target, display, suffix }: { target: number; display: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setDone(true);
    };
    requestAnimationFrame(step);
  }, [target]);

  return (
    <span>
      {done ? display : count >= 1000 ? `${(count / 1000).toFixed(0)}K` : count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="home">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-glow-pulse" />

      <div className="relative z-10 container-narrow px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities · New Delhi, India
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] mb-6 animate-fade-up stagger-1">
            <span className="text-gradient">Kashvi</span>
            <br />
            <span className="text-foreground">Arora.</span>
          </h1>

          <p className="text-xl md:text-3xl font-display font-medium text-foreground/90 max-w-3xl mb-4 animate-fade-up stagger-2">
            Builder at the intersection of{" "}
            <span className="text-primary">tech</span>,{" "}
            <span className="text-accent">leadership</span>, and growth.
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-up stagger-3">
            Shipped SaaS products. Scaled communities to 1M+ impressions. Led 250+ initiatives. I turn ambiguous problems into executed outcomes.
          </p>

          <div className="flex flex-wrap gap-3 mb-16 animate-fade-up stagger-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold transition-all hover:shadow-yellow hover:scale-[1.02]"
            >
              Contact Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/kashvi15"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-secondary border border-border text-foreground rounded-full font-semibold transition-all hover:border-accent/60 hover:text-accent hover:shadow-red"
            >
              <Linkedin size={18} />
              Visit LinkedIn
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1tcLdSJ3uyFL95JEgHFkP3vwJNakqrKCL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-border text-foreground rounded-full font-semibold transition-all hover:border-primary/50 hover:text-primary"
            >
              <Download size={18} />
              View Resume
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl animate-fade-up stagger-5">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-primary/40 pl-4 md:pl-6">
                <div className="font-display text-3xl md:text-5xl font-bold text-gradient-yellow leading-none mb-2">
                  <Counter target={s.value} display={s.display} suffix={s.suffix} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
