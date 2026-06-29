import { ArrowDown } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { howItWorks } from "@/data/stats";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="glow-blob right-0 top-20 h-72 w-72 bg-accent/10" />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From a paragraph to a{" "}
              <span className="text-gradient-brand">Verified Startup</span>
            </>
          }
          subtitle="A guided pipeline that turns a raw idea into a scored, investor-ready company — one reviewed step at a time."
        />

        {/* The numbered markers here are real: this is an ordered pipeline. */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {howItWorks.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step} index={i % 3}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-card/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-sm text-muted-foreground/60">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  {step.tags && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {step.tags.map((tag) => (
                        <Badge key={tag} variant="default" className="text-[11px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* connector arrow on large screens, except last column items */}
                  {i < howItWorks.length - 1 && (
                    <ArrowDown className="absolute bottom-4 right-4 size-4 text-muted-foreground/30" />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
