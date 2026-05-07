import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "J.A.N.A.N.I.",
    subtitle: "AI Maternal Health Platform",
    tags: ["Full-Stack", "AI/ML", "Social Impact"],
    line: "Personalized maternal care with real-time health scoring, AI chatbot, and PCOS tracking.",
    callout: "Production-deployed",
    reveal: ["Python", "NLP", "Full-Stack", "AI Chatbot"],
    accent: "yellow" as const,
  },
  {
    title: "Kartavya Events",
    subtitle: "Youth Leadership Venture",
    tags: ["Product", "Growth", "Events"],
    line: "Built ops infrastructure from scratch for 2,000+ participant conferences.",
    callout: "60% margins · 500K+ impressions",
    reveal: ["Platform", "Operations", "Marketing", "Finance"],
    accent: "red" as const,
  },
];

const Projects = () => {
  return (
    <section className="section-padding relative" id="projects">
      <div className="container-narrow">
        <Reveal heading>
          <div className="section-label">
            <span className="w-8 h-px bg-primary" />
            Projects
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Things I've <span className="text-gradient-yellow">built</span>.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const isRed = p.accent === "red";
            return (
              <Reveal key={p.title} delay={i * 80} duration={700}>
                <article
                  className={`group relative card-dark ${isRed ? "card-dark-red" : ""} p-8 md:p-10 min-h-[420px] flex flex-col overflow-hidden cursor-pointer h-full`}
                >
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          isRed
                            ? "border-accent/30 text-accent bg-accent/5"
                            : "border-primary/30 text-primary bg-primary/5"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className={`text-sm font-mono mb-6 ${isRed ? "text-accent" : "text-primary"}`}>
                    {p.subtitle}
                  </p>

                  <p className="text-muted-foreground text-base leading-relaxed mb-6">{p.line}</p>

                  <div
                    className={`inline-flex items-start text-sm font-semibold mb-auto ${
                      isRed ? "text-accent" : "text-primary"
                    }`}
                  >
                    → {p.callout}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
                      What I owned
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.reveal.map((r) => (
                        <span key={r} className="text-xs font-mono text-foreground/80">
                          /{r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div
                      className={`flex items-center justify-between px-8 py-4 ${
                        isRed ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <span className="font-semibold text-sm">Read Case Study</span>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
