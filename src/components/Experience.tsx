import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "Freelance · Personal Brand Strategist",
    company: "Self-employed",
    duration: "2023 — Present",
    primary: true,
    bullets: [
      "Scaled creator & founder personal brands to 1M+ combined impressions.",
      "Delivered branding, content & growth strategy across 30+ clients.",
      "Built systems for DevRel, social, and community-led growth.",
    ],
  },
  {
    role: "Founder's Office Assistant",
    company: "QuickBlox",
    duration: "Aug 2025 — Sep 2025 · London",
    bullets: [
      "Owned API integrations, SDK testing, and developer onboarding flows.",
      "Shipped technical blogs, product demos, and training assets.",
      "Ran social media calendar & supported client demos end-to-end.",
    ],
  },
  {
    role: "IT Intern",
    company: "Airports Authority of India",
    duration: "Jun 2025 — Jul 2025",
    bullets: [
      "Built J.A.N.A.N.I., an AI-powered maternal health solution.",
      "Worked on Digi Yatra, cybersecurity, and data centre operations.",
      "Created HRMS Resume ATS Scanner for the aviation sector.",
    ],
  },
  {
    role: "Marketing & Growth Intern",
    company: "Schmooze",
    duration: "Feb 2025 — Apr 2025",
    bullets: [
      "Drove 10% engagement lift via meme-led growth experiments.",
      "Acquired 100+ downloads through targeted GenZ campaigns.",
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
