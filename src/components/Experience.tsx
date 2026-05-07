import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "Branding, Marketing & Tech Consultant",
    company: "Freelancer (Full-time)",
    duration: "Jun 2023 — Present · New Delhi",
    primary: true,
    bullets: [
      "Personal Branding & Consulting: Transformed 30+ client profiles; revamped CVs, portfolios & pitches across 50+ 1:1 sessions.",
      "Marketing & Growth: Scaled 10+ brands and 15+ personal profiles to 1M+ impressions, driving ~50% avg visibility growth.",
      "DevRel & Tech Lead: Spearheaded 5+ developer programs across 2,000+ community members, lifting active participation by 40%.",
    ],
  },
  {
    role: "Founder's Office Assistant — Intern",
    company: "Injoit Ltd · QuickBlox",
    duration: "Aug 2025 — Oct 2025 · United Kingdom",
    bullets: [
      "DevRel & Pre-Sales: Drove adoption for 2 AI product lines — integrated APIs, stress-tested SDKs, shipped blogs, demos & onboarding.",
      "Led client meetings, pitched to prospects, and managed customer success touchpoints end-to-end.",
      "Owned content strategy across LinkedIn, X, Instagram & Discord — grew community engagement by 30%.",
    ],
  },
  {
    role: "Information Technology Intern",
    company: "Airports Authority of India",
    duration: "Jun 2025 — Jul 2025 · New Delhi",
    bullets: [
      "Built 2 production-grade AI/ML solutions in Python + NLP, deployed across HR & healthcare verticals.",
      "Presented work directly to senior leadership at AAI.",
      "Contributed to Digi Yatra rollout, cybersecurity protocols & airport data centre operations.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="section-padding relative" id="experience">
      <div className="container-narrow">
        <div className="section-label">
          <span className="w-8 h-px bg-primary" />
          Experience
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Where I've <span className="text-gradient-yellow">shipped</span>.
        </h2>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className={`group relative card-dark p-6 md:p-8 ${
                exp.primary ? "border-primary/40 bg-gradient-to-br from-primary/5 to-transparent" : ""
              }`}
            >
              {exp.primary && (
                <span className="absolute -top-2 left-6 px-3 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Currently
                </span>
              )}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium flex items-center gap-1">
                    {exp.company}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </div>
                <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
