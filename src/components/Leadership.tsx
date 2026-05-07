import { Users } from "lucide-react";

const items = [
  {
    org: "Code Geeks Community",
    role: "CMO & Advisor",
    impact: "Executed 10+ events, secured 100K+ in sponsorships, managed 8,000+ applications & drove 500K+ impressions.",
  },
  {
    org: "Hack With India",
    role: "Core Member",
    impact: "Co-organized large-scale hackathons (25,000+ registrations) in collaboration with Microsoft & Google.",
  },
  {
    org: "Bifröst EdTech",
    role: "Core Member",
    impact: "Managed 50 organizations & curated curricula across 10+ departments to expand student opportunities.",
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
