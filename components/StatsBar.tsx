import CounterStat from "./CounterStat";

const STATS = [
  { value: 150, suffix: "+", label: "Projects delivered" },
  { value: 8,   suffix: "",  label: "Years established" },
  { value: 5,   suffix: "",  label: "States licensed" },
  { value: 0,   suffix: "",  label: "Site safety incidents" },
];

export default function StatsBar() {
  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <CounterStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
