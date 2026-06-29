import { Star, Linkedin, Globe, BadgeCheck } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experts } from "@/data/experts";

export default function ExpertsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experts"
        title={
          <>
            Get feedback from people who've{" "}
            <span className="text-gradient-brand">done it</span>
          </>
        }
        subtitle="Operators, investors, and specialists across 45+ domains. Book a consultation or invite them to review your startup."
      />

      <section className="pb-24">
        <div className="container-wide">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experts.map((ex, i) => (
              <Reveal key={ex.id} index={i % 3}>
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-card/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow-accent">
                  <div className="flex items-start justify-between">
                    <span
                      className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${ex.avatarColor} font-display text-lg font-bold text-white`}
                    >
                      {ex.initials}
                    </span>
                    {ex.available ? (
                      <Badge variant="success">
                        <span className="size-1.5 rounded-full bg-success" /> Available
                      </Badge>
                    ) : (
                      <Badge variant="default">Booked</Badge>
                    )}
                  </div>

                  <div className="mt-4 flex items-center gap-1.5">
                    <h3 className="font-display text-lg font-semibold">{ex.name}</h3>
                    <BadgeCheck className="size-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{ex.title}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                    <Badge variant="primary" className="text-[11px]">{ex.industry}</Badge>
                    <span className="text-muted-foreground">{ex.experienceYears} yrs</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Star className="size-3 fill-amber-400 text-amber-400" />
                      {ex.rating} ({ex.reviews})
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {ex.skills.map((s) => (
                      <Badge key={s} variant="default" className="text-[11px]">{s}</Badge>
                    ))}
                  </div>

                  <div className="mt-3 text-xs text-muted-foreground">
                    {ex.certifications.join(" · ")}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <div className="flex gap-2">
                      <a href={ex.linkedin} aria-label="LinkedIn" className="grid size-8 place-items-center rounded-full border border-white/[0.08] text-muted-foreground transition-colors hover:text-foreground">
                        <Linkedin className="size-3.5" />
                      </a>
                      <a href={ex.portfolio} aria-label="Portfolio" className="grid size-8 place-items-center rounded-full border border-white/[0.08] text-muted-foreground transition-colors hover:text-foreground">
                        <Globe className="size-3.5" />
                      </a>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{ex.rate}</span>
                  </div>

                  {/* TODO(backend): wire to /api/consultations POST */}
                  <Button className="mt-4 w-full" size="sm" disabled={!ex.available}>
                    {ex.available ? "Book consultation" : "Join waitlist"}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
