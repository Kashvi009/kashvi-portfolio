const items = [
  "Builder",
  "Strategist",
  "Public Speaker",
  "DevRel",
  "Microsoft Speaker",
  "Young Entrepreneur Award '26",
  "SheFi Scholar",
  "300+ Events",
  "1M+ Impressions",
  "Hackathon Mentor",
  "Community Builder",
];

const Marquee = () => {
  return (
    <div className="relative border-y border-border bg-card/30 overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 font-display text-2xl md:text-4xl font-bold text-foreground/80 hover:text-primary transition-colors"
          >
            {item}
            <span className="text-accent ml-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
