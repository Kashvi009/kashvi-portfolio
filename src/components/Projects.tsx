import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "J.A.N.A.N.I.",
    subtitle: "AI-Powered Maternal Health Platform",
    description: "Full-stack AI/ML platform delivering personalized maternal care — real-time health scoring, smart symptom analysis, AI chatbot, and PCOS tracking across every stage of pregnancy. Deployed in a production-like environment.",
    metrics: ["AI/ML", "Full-stack", "Healthcare"],
    tags: ["Python", "NLP", "AI Chatbot"],
    accent: "yellow",
  },
  {
    title: "Kartavya Events",
    subtitle: "Youth Leadership Venture",
    description: "Built a full-stack event management platform & ops infrastructure from scratch. Organized multiple youth conferences for 2,000+ participants with 60% profit margins.",
    metrics: ["500K+ impressions", "2,000+ attendees", "60% margins"],
    tags: ["Product", "Operations", "Growth"],
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
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display text-2xl md:text-3xl font-bold">{p.title}</h3>
                <ArrowUpRight
                  size={24}
                  className={`${p.accent === "red" ? "text-accent" : "text-primary"} group-hover:rotate-45 transition-transform`}
                />
              </div>
              <p className={`text-sm font-mono mb-4 ${p.accent === "red" ? "text-accent" : "text-primary"}`}>
                {p.subtitle}
              </p>

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

              <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
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
