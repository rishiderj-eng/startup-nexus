import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/shared/reveal";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="relative border-y border-white/[0.06] py-14">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} index={i} className="flex flex-col items-center text-center">
              <span className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="text-gradient-brand">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
              </span>
              <span className="mt-2 text-sm text-muted-foreground">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
