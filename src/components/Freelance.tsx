import { User, TrendingUp, Code2 } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Personal Branding",
    description: "Revamped CVs and portfolios for 30+ clients; conducted 50+ personalized consulting sessions on public speaking, personal branding, and career development.",
    highlight: "50+ consulting sessions",
  },
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    description: "Strategized for 15+ profiles and 10+ brands, achieving 1M+ impressions and 50% growth in brand visibility through compelling narratives and innovative campaigns.",
    highlight: "50% visibility growth",
  },
  {
    icon: Code2,
    title: "Developer Relations",
    description: "Led 5+ developer engagement initiatives; managed technical operations, educational content, and community campaigns that increased tech participation by 40%.",
    highlight: "40% participation increase",
  },
];

const Freelance = () => {
  return (
    <section className="section-padding bg-secondary/30" id="services">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">
            Since October 2022
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Current Freelance Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building a diverse portfolio that combines personal branding, technical leadership, and creative strategy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-wine-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-wine">
                <service.icon className="text-primary-foreground" size={28} />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Highlight */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-sm font-medium text-foreground">
                  {service.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelance;
