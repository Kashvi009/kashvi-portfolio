const accolades = [
  "Young Entrepreneur Award 2026 — Sheratal Excellence",
  "Speaker · Microsoft Season of Agents",
  "Principal's Award — True Mira Spirit",
  "SheFi '13 Full-Ride Scholar (Web3)",
  "The Residency · Delta Chapter II — 1000+ applicants",
  "Codess.Cafe Mentee — 3,000+ women",
  "Featured on 7+ Podcasts",
  "50+ Judge Panels",
  "Soroban Accelerated Bootcamp",
];

const Recognition = () => {
  return (
    <section className="py-16" id="recognition">
      <div className="container-narrow px-6 md:px-12 lg:px-20 mb-8">
        <div className="section-label">
          <span className="w-8 h-px bg-primary" />
          Recognition
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Awarded, featured & <span className="text-gradient-yellow">trusted</span>.
        </h2>
      </div>

      <div className="relative overflow-hidden border-y border-border bg-card/20 py-5 group">
        <div
          className="flex gap-3 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {[...accolades, ...accolades, ...accolades].map((a, i) => (
            <span
              key={i}
              className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-secondary/60 text-sm text-foreground/85 hover:border-primary/50 hover:text-primary transition-colors"
            >
              <span className="text-primary mr-2">✦</span>
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
