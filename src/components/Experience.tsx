import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "QuickBlox",
    role: "Founder's Office Assistant",
    period: "August 2025 - September 2025",
    location: "London, England",
    description: "Worked on API integrations, SDK testing, developer onboarding, technical blogs, and product demos. Managed social media calendars and assisted in client demos and platform training.",
    tags: ["API Integrations", "SDK Testing", "Developer Onboarding"],
  },
  {
    company: "Airports Authority of India",
    role: "IT Intern",
    period: "June 2025 - July 2025",
    location: "India",
    description: "Developed J.A.N.A.N.I., an AI-powered maternal health solution. Worked on Digi Yatra, cybersecurity, and airport data centre operations. Created HRMS Resume ATS Scanner for aviation sector.",
    tags: ["AI/ML", "Cybersecurity", "Data Centre Ops"],
  },
  {
    company: "Schmooze",
    role: "Marketing & Growth Intern",
    period: "February 2025 - April 2025",
    location: "Delhi, India",
    description: "Led meme-driven marketing strategies, increasing app engagement by 10%. Boosted 100+ downloads through user acquisition strategies and positioned Schmooze within the GenZ community.",
    tags: ["Growth Marketing", "User Acquisition", "GenZ Community"],
  },
  {
    company: "Aspirant Learning",
    role: "PR & Outreach Intern",
    period: "January 2024 - July 2024",
    location: "India",
    description: "Initiated partnerships with 20+ educational institutions, executed 10+ workshops and MUN conferences, and crafted outreach proposals that improved organizational presence across campuses.",
    tags: ["Partnerships", "Workshops", "Outreach"],
  },
];

const Experience = () => {
  return (
    <section className="section-padding bg-background" id="experience">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-wine-light mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-wine md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
