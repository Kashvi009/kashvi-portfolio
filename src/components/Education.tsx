import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology - BTech",
    institution: "Guru Gobind Singh Indraprastha University",
    field: "Information Technology",
    period: "Current",
    number: "01",
  },
  {
    degree: "B.Sc (Prog.) Physical Science",
    institution: "Delhi University",
    field: "Computer Science Majors & Physical Science + Sociology Minors",
    period: "August 2023 - November 2023",
    number: "02",
  },
  {
    degree: "High School Diploma",
    institution: "Mira Model School",
    field: "Class 12th",
    period: "April 2021 - April 2023",
    number: "03",
  },
  {
    degree: "Middle School Diploma",
    institution: "Mira Model School",
    field: "Class 10th",
    period: "April 2012 - April 2021",
    number: "04",
  },
];

const Education = () => {
  return (
    <section className="section-padding bg-secondary/30" id="education">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education & Credentials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-wine-light mx-auto rounded-full" />
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={edu.number}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 relative overflow-hidden"
            >
              {/* Background Number */}
              <span className="absolute -right-4 -top-4 font-display text-[120px] font-bold text-primary/5 leading-none select-none">
                {edu.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      {edu.field}
                    </p>
                    <p className="text-muted-foreground/70 text-sm">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
