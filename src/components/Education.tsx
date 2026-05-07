const education = [
  {
    period: "2023 — 2027",
    degree: "B.Tech, Information Technology",
    institute: "Guru Gobind Singh Indraprastha University",
    score: "8.55 CGPA",
  },
  {
    period: "2023",
    degree: "Senior Secondary (Class XII), CBSE",
    institute: "Mira Model School, New Delhi",
    score: "80.4%",
  },
  {
    period: "2021",
    degree: "Secondary (Class X), CBSE",
    institute: "Mira Model School, New Delhi",
    score: "92.8%",
  },
];

const Education = () => {
  return (
    <section className="section-padding relative" id="education">
      <div className="container-narrow">
        <div className="section-label">
          <span className="w-8 h-px bg-primary" />
          Education
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Academic <span className="text-gradient-yellow">record</span>.
        </h2>

        <div className="card-dark overflow-hidden">
          {education.map((e, i) => (
            <div
              key={e.period}
              className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-6 md:p-8 transition-colors hover:bg-primary/5 ${
                i !== education.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="font-mono text-sm text-muted-foreground md:w-32 shrink-0">{e.period}</span>
              <div className="flex-1">
                <h3 className="font-display text-lg md:text-xl font-bold">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.institute}</p>
              </div>
              <span className="font-display font-bold text-primary text-lg md:text-xl md:w-28 md:text-right">
                {e.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
