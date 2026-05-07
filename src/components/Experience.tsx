import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const experiences = [
  {
    company: "QuickBlox",
    flag: "🇬🇧",
    location: "United Kingdom",
    role: "Founder's Office Assistant — Intern",
    duration: "Aug 2025 — Oct 2025",
    bullets: [
      "Drove adoption for 2 AI product lines — integrated APIs, stress-tested SDKs, shipped blogs, demos & onboarding.",
      "Led client meetings, pitched to prospects, owned customer success end-to-end.",
      "Grew community engagement 30% across LinkedIn, X, Instagram & Discord.",
    ],
    tags: ["DevRel", "AI/ML", "Founder's Office"],
  },
  {
    company: "Airports Authority of India",
    flag: "🇮🇳",
    location: "New Delhi",
    role: "Information Technology Intern",
    duration: "Jun 2025 — Jul 2025",
    bullets: [
      "Built 2 production-grade AI/ML solutions in Python + NLP, deployed across HR & healthcare.",
      "Presented work directly to senior AAI leadership.",
      "Contributed to Digi Yatra rollout, cybersecurity protocols & data centre operations.",
    ],
    tags: ["AI/ML", "Python", "Government"],
  },
  {
    company: "Freelance Consulting",
    flag: "🌍",
    location: "Remote",
    role: "Branding, Marketing & Tech Consultant",
    duration: "Jun 2023 — Present",
    bullets: [
      "Transformed 30+ client profiles via 50+ 1:1 sessions on CVs, portfolios & pitches.",
      "Scaled 10+ brands and 15+ profiles to 1M+ impressions — ~50% avg visibility growth.",
      "Spearheaded 5+ developer programs across 2,000+ community members; 40% lift in active participation.",
    ],
    tags: ["DevRel", "Growth", "Branding"],
  },
];

const Experience = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = trackRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            const i = Number((e.target as HTMLElement).dataset.idx);
            setActiveIdx(i);
          }
        });
      },
      { root, threshold: [0.6, 0.9] }
    );
    cardRefs.current.forEach((c) => c && obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const goTo = (i: number) => {
    const target = cardRefs.current[i];
    if (target && trackRef.current) {
      trackRef.current.scrollTo({ left: target.offsetLeft - trackRef.current.offsetLeft, behavior: "smooth" });
    }
  };

  const prev = () => goTo(Math.max(0, activeIdx - 1));
  const next = () => goTo(Math.min(experiences.length - 1, activeIdx + 1));

  return (
    <section className="section-padding relative" id="experience">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="section-label">
              <span className="w-8 h-px bg-primary" />
              Experience
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
              Where I've <span className="text-gradient-yellow">shipped</span>.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono uppercase tracking-widest">
              <span className="text-primary">{String(activeIdx + 1).padStart(2, "0")}</span>
              <span className="w-8 h-px bg-border" />
              <span>{String(experiences.length).padStart(2, "0")}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={activeIdx === 0}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
                aria-label="Previous"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                disabled={activeIdx === experiences.length - 1}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
                aria-label="Next"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="h-px bg-border mb-6 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-primary"
            style={{ width: `${progress}%`, transition: `width 200ms ${EASE}` }}
          />
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto px-6 md:px-12 lg:px-20 pb-6 no-scrollbar scroll-smooth"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {experiences.map((exp, i) => {
          const isActive = i === activeIdx;
          return (
            <article
              key={exp.company}
              ref={(el: HTMLDivElement | null) => { cardRefs.current[i] = el; }}
              data-idx={i}
              className="shrink-0 w-[88vw] md:w-[480px] card-dark p-7"
              style={{
                scrollSnapAlign: "start",
                transition: `transform 500ms ${EASE}, opacity 500ms ${EASE}, filter 500ms ${EASE}`,
                opacity: isActive ? 1 : 0.55,
                transform: isActive ? "scale(1)" : "scale(0.96)",
                filter: isActive ? "blur(0px)" : "blur(1px)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{exp.flag}</span>
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    {exp.location}
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold mb-1 leading-tight">{exp.company}</h3>
              <p className="text-primary font-medium text-sm mb-5">{exp.role}</p>

              <ul className="space-y-2.5 mb-6">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-foreground/80 border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
        <div className="shrink-0 w-6 md:w-12" />
      </div>
    </section>
  );
};

export default Experience;
