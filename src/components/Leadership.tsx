import { Users } from "lucide-react";

const items = [
  {
    org: "Code Geeks",
    role: "Community Lead",
    impact: "Grew dev community & ran workshops for 1000+ students.",
  },
  {
    org: "Hack With India",
    role: "Mentor & Organizer",
    impact: "Mentored 50+ teams across national-level hackathons.",
  },
  {
    org: "Bifröst",
    role: "Strategist",
    impact: "Drove brand & community programs across student campuses.",
  },
];

const Leadership = () => {
  return (
    <section className="section-padding relative" id="leadership">
      <div className="container-narrow">
        <div className="section-label">
          <span className="w-8 h-px bg-primary" />
          Leadership
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Where I've <span className="text-gradient-yellow">led</span>.
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i.org} className="card-dark p-6 group">
              <Users className="text-primary mb-4 group-hover:scale-110 transition-transform" size={20} />
              <h3 className="font-display text-xl font-bold mb-1">{i.org}</h3>
              <p className="text-sm text-accent font-medium mb-3">{i.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{i.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
