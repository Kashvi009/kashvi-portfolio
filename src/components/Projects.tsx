import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "J.A.N.A.N.I.",
    description: "AI-powered maternal health solution built during AAI internship — combines ML triage with accessible UX for at-risk mothers.",
    metrics: ["AI/ML", "Healthcare", "Govt. project"],
    tags: ["Python", "ML", "Full-stack"],
    accent: "yellow",
  },
  {
    title: "Kartavya Events",
    description: "End-to-end event curation platform powering 200+ events, hackathons, and judge panels with national-level reach.",
    metrics: ["200+ events", "10K+ teams", "50+ judges"],
    tags: ["Growth", "Operations", "Community"],
    accent: "red",
  },
];

const Projects = () => {
  return (
    <section className="section-padding relative" id="projects">
      <div className="container-narrow">
        <div className="section-label">
          <span className="w-8 h-px bg-primary" />
          Projects
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Things I've <span className="text-gradient-yellow">built</span>.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group card-dark ${p.accent === "red" ? "card-dark-red" : ""} p-8 cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-2xl md:text-3xl font-bold">{p.title}</h3>
                <ArrowUpRight
                  size={24}
                  className={`${p.accent === "red" ? "text-accent" : "text-primary"} group-hover:rotate-45 transition-transform`}
                />
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                      p.accent === "red"
                        ? "bg-accent/10 text-accent border border-accent/20"
                        : "bg-primary/10 text-primary border border-primary/20"
                    }`}
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-muted-foreground font-mono">
                    /{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
