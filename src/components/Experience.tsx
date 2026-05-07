import { useRef, useEffect, useState, useCallback } from "react";

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

const HINT_KEY = "exp-drag-hint-dismissed";

const Experience = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [showHint, setShowHint] = useState(true);

  // Hint dismissal
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(HINT_KEY)) {
      setShowHint(false);
    }
  }, []);
  const dismissHint = useCallback(() => {
    if (showHint) {
      setShowHint(false);
      try { localStorage.setItem(HINT_KEY, "1"); } catch {}
    }
  }, [showHint]);

  // Progress bar
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

  // Active card observer
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

  // Pointer-based momentum drag
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0; // px/ms
    let raf = 0;
    let pointerId = -1;

    const onDown = (e: PointerEvent) => {
      // Ignore on links/buttons inside cards
      if ((e.target as HTMLElement).closest("a,button")) return;
      isDown = true;
      pointerId = e.pointerId;
      el.setPointerCapture(pointerId);
      el.style.cursor = "grabbing";
      startX = e.clientX;
      lastX = e.clientX;
      lastT = performance.now();
      startScroll = el.scrollLeft;
      velocity = 0;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const dx = e.clientX - startX;
      el.scrollLeft = startScroll - dx;
      const now = performance.now();
      const dt = now - lastT;
      if (dt > 0) {
        const instant = (e.clientX - lastX) / dt; // px/ms
        // Smooth velocity over last ~100ms
        velocity = velocity * 0.6 + instant * 0.4;
      }
      lastX = e.clientX;
      lastT = now;
      if (Math.abs(dx) > 6) dismissHint();
    };

    const flick = () => {
      // velocity in px/ms — convert to px/frame approx
      let v = -velocity * 16; // px per ~16ms frame, inverted for scroll direction
      const step = () => {
        if (Math.abs(v) < 0.5) return;
        el.scrollLeft += v;
        v *= 0.92;
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const onUp = () => {
      if (!isDown) return;
      isDown = false;
      el.style.cursor = "grab";
      try { el.releasePointerCapture(pointerId); } catch {}
      flick();
    };

    el.style.cursor = "grab";
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("pointerleave", onUp);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("pointerleave", onUp);
    };
  }, [dismissHint]);

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
          <p
            className="text-sm text-muted-foreground font-mono hidden md:block transition-opacity duration-500"
            style={{ opacity: showHint ? 1 : 0 }}
          >
            ← drag to scroll →
          </p>
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
        className="flex gap-5 overflow-x-auto px-6 md:px-12 lg:px-20 pb-6 select-none no-scrollbar"
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
                transition: `transform 350ms ${EASE}, opacity 350ms ${EASE}`,
                opacity: isActive ? 1 : 0.6,
                transform: isActive ? "scale(1)" : "scale(0.97)",
              }}
              onMouseEnter={(e) => {
                if (isActive) (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = isActive ? "scale(1)" : "scale(0.97)";
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
