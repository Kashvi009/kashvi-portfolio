import { useEffect, useState, useRef } from "react";

const stats = [
  { value: "1M+", label: "Total Impressions", description: "Social media reach across campaigns" },
  { value: "200K+", label: "Students Mentored", description: "Guided through workshops and events" },
  { value: "200+", label: "Events Curated", description: "Technical and leadership programs" },
  { value: "50+", label: "Judge Panels", description: "MUNs, debates, hackathons, ideathons" },
  { value: "30+", label: "Startup Collaborations", description: "Product, marketing, and growth projects" },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-wine-dark via-primary to-wine-dark relative overflow-hidden"
      id="impact"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Impact by Numbers
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            Building communities, mentoring talent, and driving growth across platforms
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300 ${
                isVisible ? 'animate-scale-in opacity-0' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <h3 className="text-primary-foreground font-medium mb-1">
                {stat.label}
              </h3>
              <p className="text-primary-foreground/60 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
