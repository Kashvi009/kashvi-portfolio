import { Award, Mic, Trophy, Star } from "lucide-react";

const Achievements = () => {
  return (
    <section className="section-padding relative" id="achievements">
      <div className="container-narrow">
        <div className="section-label">
          <span className="w-8 h-px bg-primary" />
          Achievements
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Recognition & <span className="text-gradient-yellow">awards</span>.
        </h2>

        {/* Hero achievement */}
        <div className="relative card-dark p-8 md:p-12 mb-6 overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-accent/5">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <Trophy className="text-primary mb-4" size={32} />
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
              National Award
            </p>
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Young Entrepreneur Award
            </h3>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Recognized at the national level for innovation, leadership, and shipping impact-driven initiatives.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="card-dark p-6 group">
            <Mic className="text-accent mb-4 group-hover:scale-110 transition-transform" size={24} />
            <h3 className="font-display text-xl font-bold mb-2">Microsoft Speaker</h3>
            <p className="text-sm text-muted-foreground">Spoke at Microsoft-led sessions on tech, growth & community.</p>
          </div>
          <div className="card-dark p-6 group">
            <Star className="text-primary mb-4 group-hover:scale-110 transition-transform" size={24} />
            <h3 className="font-display text-xl font-bold mb-2">Student of the Year</h3>
            <p className="text-sm text-muted-foreground">Awarded for academic excellence + leadership impact.</p>
          </div>
          <div className="card-dark p-6 group">
            <Award className="text-accent mb-4 group-hover:scale-110 transition-transform" size={24} />
            <h3 className="font-display text-xl font-bold mb-2">300+ Events · 10K+ Teams</h3>
            <p className="text-sm text-muted-foreground">Curated, judged & mentored at scale across India.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
