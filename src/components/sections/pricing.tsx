import Link from "next/link";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { pricingTiers } from "@/data/testimonials";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Start free.{" "}
              <span className="text-gradient-brand">Scale</span> when you're ready
            </>
          }
          subtitle="Founders, experts, and funds each get a plan built for how they actually use the platform."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.name} index={i}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1",
                  tier.highlighted
                    ? "gradient-border border-transparent bg-card/70 shadow-glow-accent"
                    : "border-white/[0.06] bg-card/40 hover:border-white/15"
                )}
              >
                {tier.badge && (
                  <Badge variant="accent" className="absolute -top-2.5 right-5">
                    {tier.badge}
                  </Badge>
                )}
                <p className="font-display text-lg font-semibold">{tier.name}</p>
                <div className="mt-3 flex items-end gap-1">
                  <span className="font-display text-4xl font-semibold tracking-tight">
                    {tier.price}
                  </span>
                  {tier.cadence && (
                    <span className="pb-1 text-sm text-muted-foreground">{tier.cadence}</span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-success/15">
                        <Check className="size-3 text-success" />
                      </span>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* TODO(backend): wire each CTA to checkout / signup flow */}
                <Button
                  className="mt-6 w-full"
                  variant={tier.highlighted ? "default" : "secondary"}
                  asChild
                >
                  <Link href="/signup">{tier.cta}</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
