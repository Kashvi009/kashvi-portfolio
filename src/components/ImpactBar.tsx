import { useReveal, useCountUp } from "@/hooks/useReveal";

const stats = [
  { value: 1000000, label: "Impressions Driven", display: (n: number) => `${(n / 1000000).toFixed(n >= 1000000 ? 0 : 1)}M+` },
  { value: 2000, label: "Developers Reached", display: (n: number) => `${(n / 1000).toFixed(0)}K+` },
  { value: 30, label: "Clients Transformed", display: (n: number) => `${n}+` },
  { value: 25000, label: "Event Registrations", display: (n: number) => `${(n / 1000).toFixed(0)}K+` },
  { value: 300, label: "Events Curated", display: (n: number) => `${n}+` },
];

const StatItem = ({ s, start, last }: { s: typeof stats[number]; start: boolean; last: boolean }) => {
  const v = useCountUp(s.value, 1400, start);
  return (
    <div className={`flex-1 px-4 md:px-6 py-6 ${!last ? "md:border-r border-border/50" : ""}`}>
      <div className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-none mb-2 tracking-tight">
        {s.display(v)}
      </div>
      <div className="text-[11px] md:text-xs text-muted-foreground uppercase tracking-[0.18em]">
        {s.label}
      </div>
    </div>
  );
};

const ImpactBar = () => {
  const { ref, visible } = useReveal<HTMLDivElement>(0.25);
  return (
    <section id="impact" className="border-y border-border bg-card/20">
      <div ref={ref} className="container-narrow px-4 md:px-12 lg:px-20 flex flex-col md:flex-row divide-y md:divide-y-0 divide-border/50">
        {stats.map((s, i) => (
          <StatItem key={s.label} s={s} start={visible} last={i === stats.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default ImpactBar;
