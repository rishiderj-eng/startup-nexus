import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { expertCategories } from "@/data/categories";

export function ExpertCategories() {
  return (
    <section className="relative py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Expertise on tap"
          title={
            <>
              Every discipline your{" "}
              <span className="text-gradient-brand">idea</span> needs
            </>
          }
          subtitle="From patent law to quantum computing, the right specialist is one match away. Our classifier routes your startup to the people who can actually move it forward."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {expertCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.name} index={i % 6}>
                <button className="group flex h-full w-full flex-col items-center gap-2.5 rounded-2xl border border-white/[0.06] bg-card/40 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-card/70">
                  <span className="grid size-10 place-items-center rounded-xl border border-white/[0.06] bg-white/[0.03] transition-colors group-hover:bg-white/[0.06]">
                    <Icon className={`size-5 ${cat.tint}`} />
                  </span>
                  <span className="text-xs font-medium leading-tight text-muted-foreground transition-colors group-hover:text-foreground">
                    {cat.name}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
