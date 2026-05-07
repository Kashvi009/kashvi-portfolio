import { Award, Mic, Trophy, Star, GraduationCap, Globe } from "lucide-react";

const cards = [
  { icon: Mic, color: "accent", title: "Microsoft Speaker", desc: "Professional Speaker at Microsoft Season of Agents (Azure Developer Community)." },
  { icon: Star, color: "primary", title: "Student of the Year", desc: "Principal's Award for True Mira Spirit. Best Executive Award for college contributions." },
  { icon: GraduationCap, color: "accent", title: "SheFi '13 Full-Ride Scholar", desc: "8-week Web3 fellowship · Soroban Bootcamp (RiseIn & Stellar) · Codess.Cafe Mentee (3,000+ women)." },
  { icon: Globe, color: "primary", title: "The Residency · Delta II", desc: "Selected from 1,000+ international applicants. Featured on 7+ podcasts." },
  { icon: Award, color: "accent", title: "Rotary Distinctions", desc: "Best Interactor, Outstanding Multimedia Head & Diamond Club Awardee." },
  { icon: Trophy, color: "primary", title: "300+ Events · 10K+ Teams", desc: "50+ judge panels, 15+ speaker sessions, 2,000+ students impacted nationally." },
];

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

        <div className="relative card-dark p-8 md:p-12 mb-6 overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-accent/5">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <Trophy className="text-primary mb-4" size={32} />
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
              Sheratal Excellence Awards · 2026
            </p>
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Young Entrepreneur Award
            </h3>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Recognized for leadership, innovation, and shipping impact-driven initiatives at the national level.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((c) => {
            const Icon = c.icon;
            const colorClass = c.color === "accent" ? "text-accent" : "text-primary";
            return (
              <div key={c.title} className="card-dark p-6 group">
                <Icon className={`${colorClass} mb-4 group-hover:scale-110 transition-transform`} size={24} />
                <h3 className="font-display text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
