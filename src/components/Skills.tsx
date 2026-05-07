const groups = [
  {
    title: "Technical",
    skills: ["Python", "JavaScript", "React", "AI/ML", "APIs & SDKs", "SQL", "Git", "Cybersecurity"],
  },
  {
    title: "Product & Growth",
    skills: ["Product Strategy", "DevRel", "Growth Marketing", "User Acquisition", "Content Strategy", "Brand Building", "SEO"],
  },
  {
    title: "Professional",
    skills: ["Public Speaking", "Community Building", "Event Curation", "Leadership", "Partnerships", "Mentorship"],
  },
];

const Skills = () => {
  return (
    <section className="section-padding relative" id="skills">
      <div className="container-narrow">
        <div className="section-label">
          <span className="w-8 h-px bg-primary" />
          Skills
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          The <span className="text-gradient-yellow">stack</span>.
        </h2>

        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">
                /{g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="pill text-sm py-2 px-4">
                    {s}
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

export default Skills;
