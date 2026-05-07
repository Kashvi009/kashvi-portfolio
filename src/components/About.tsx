const About = () => {
  return (
    <section className="section-padding relative" id="about">
      <div className="container-narrow">
        <div className="section-label">
          <span className="w-8 h-px bg-primary" />
          About
        </div>

        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-8">
          I <span className="text-primary">build</span>, I <span className="text-accent">lead</span>, I <span className="text-gradient-yellow">execute</span>.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A <span className="text-foreground font-semibold">builder</span> shipping SaaS products and scaling them with measurable impact.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A <span className="text-foreground font-semibold">strategist</span> connecting brand, product, and community at scale.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A <span className="text-foreground font-semibold">tech-enabled creator</span> turning ideas into shipped, polished outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
