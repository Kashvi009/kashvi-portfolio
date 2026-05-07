import { Users, Code2, GraduationCap, Award } from "lucide-react";
import Reveal from "@/components/Reveal";

const items = [
  {
    Icon: Code2,
    org: "Code Geeks Community",
    role: "CMO & Advisor",
    chips: ["500K+ impressions", "100K+ sponsorships", "10+ events"],
  },
  {
    Icon: Users,
    org: "Hack With India",
    role: "Core Member",
    chips: ["25,000+ registrations", "Microsoft + Google"],
  },
  {
    Icon: GraduationCap,
    org: "Bifröst EdTech",
    role: "Core Member",
    chips: ["50 orgs managed", "10+ departments"],
  },
  {
    Icon: Award,
    org: "Rotary",
    role: "Best Interactor · Multimedia Head",
    chips: ["Diamond Club"],
  },
];

const Leadership = () => {
  return (
    <section className="section-padding relative" id="leadership">
      <div className="container-narrow">
        <Reveal heading>
          <div className="section-label">
            <span className="w-8 h-px bg-primary" />
            Leadership
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Where I've <span className="text-gradient-yellow">led</span>.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ Icon, org, role, chips }, i) => (
            <Reveal key={org} delay={i * 80} duration={700}>
              <div className="card-dark p-6 group h-full">
                <Icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={22} />
                <h3 className="font-display text-lg font-bold mb-1 leading-tight">{org}</h3>
                <p className="text-xs text-muted-foreground mb-4">{role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {chips.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] font-mono px-2 py-1 rounded-full bg-secondary border border-border text-foreground/80"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
