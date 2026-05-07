import { useState } from "react";
import Reveal from "@/components/Reveal";

const groups = [
  {
    key: "tech",
    title: "Technical",
    skills: ["Python", "HTML/CSS", "API Integration", "Git", "AI/ML", "Prompt Engineering", "Web3", "SaaS Tools"],
  },
  {
    key: "growth",
    title: "Product & Growth",
    skills: ["Roadmapping", "GTM Strategy", "OKRs", "SEO", "Funnel Optimization", "Social Media", "Biz Dev"],
  },
  {
    key: "pro",
    title: "Professional",
    skills: ["Public Speaking", "Event Management", "Content Creation", "Community Building", "Personal Branding"],
  },
];

const Skills = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="section-padding relative" id="skills">
      <div className="container-narrow">
        <Reveal heading>
          <div className="section-label">
            <span className="w-8 h-px bg-primary" />
            Skills
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient-yellow">stack</span>.
          </h2>
          <p className="text-sm text-muted-foreground mb-10 font-mono">
            Click a header to filter · click again to reset
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {groups.map((g, i) => {
            const isActive = active === g.key;
            const isDimmed = active && !isActive;
            return (
              <Reveal key={g.key} delay={i * 80} duration={500}>
                <div className={`transition-opacity duration-300 ${isDimmed ? "opacity-30" : "opacity-100"}`}>
                  <button
                    onClick={() => setActive(isActive ? null : g.key)}
                    className={`text-sm font-mono uppercase tracking-widest mb-4 transition-colors ${
                      isActive ? "text-primary" : "text-accent hover:text-primary"
                    }`}
                  >
                    /{g.title}
                    {isActive && <span className="ml-2">●</span>}
                  </button>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span key={s} className="pill text-sm py-2 px-4">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
