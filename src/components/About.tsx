import { Sparkles, Target, Users, Lightbulb } from "lucide-react";

const expertise = [
  { icon: Target, title: "Product Marketing", description: "Strategic positioning and growth" },
  { icon: Lightbulb, title: "Software Development", description: "Building tech solutions" },
  { icon: Sparkles, title: "Business Strategy", description: "Data-driven decisions" },
  { icon: Users, title: "Community Building", description: "Connecting people & ideas" },
];

const About = () => {
  return (
    <section className="section-padding bg-background" id="about">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Builder at Heart
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-wine-light mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              I'm <span className="font-semibold text-primary">Kashvi Arora</span>, a builder who loves creating things that blend 
              tech, strategy, and storytelling. I've worked on multiple SaaS projects, diving deep into 
              product, management, and marketing, helping brands grow through data-driven and creative strategies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a personal brand strategist and growth advocate, I help people discover their voice 
              and amplify their impact. I've collaborated with <span className="text-foreground font-medium">30+ startups</span>, 
              mentored <span className="text-foreground font-medium">200K+ students</span>, and curated 
              <span className="text-foreground font-medium"> 200+ technical, leadership, and community events</span> across India.
            </p>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-muted overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-gold/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-wine-dark mx-auto mb-6 flex items-center justify-center shadow-wine">
                    <span className="font-display text-5xl md:text-6xl text-primary-foreground font-bold">KA</span>
                  </div>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest">
                    Public Speaker • Event Curator • Mentor
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Core Expertise */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">
            Core Expertise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={item.title}
                className="card-elevated p-6 text-center group hover:border-primary/20 border border-transparent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
