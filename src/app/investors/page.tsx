import { Briefcase, Building2, Layers, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { investors } from "@/data/experts";

export const metadata = {
  title: "Investors · Startup Nexus",
  description:
    "Connect with seed and growth-stage investors actively backing validated startups across every industry.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investors"
        title={
          <>
            Capital that backs{" "}
            <span className="text-gradient-brand">validated</span> ideas
          </>
        }
        subtitle="Funds and angels source here precisely because every startup is already scored and de-risked. Filter by stage, check size, and thesis — then request a meeting."
      />

      <section className="pb-24">
        <div className="container-wide">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {investors.map((inv, i) => (
              <Reveal key={inv.id} index={i % 2}>
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-card/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${inv.avatarColor} font-display text-lg font-bold text-white`}
                    >
                      {inv.initials}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{inv.name}</h3>
                      <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Building2 className="size-3.5" />
                        {inv.firm}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                      <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                        <TrendingUp className="size-3" /> Stage
                      </p>
                      <p className="mt-1 text-sm font-medium">{inv.stage}</p>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                      <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                        <Briefcase className="size-3" /> Check size
                      </p>
                      <p className="mt-1 font-mono text-sm font-medium">{inv.checkSize}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Preferred industries
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {inv.industries.map((ind) => (
                        <Badge key={ind} variant="primary" className="text-[11px]">
                          {ind}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Layers className="size-4" />
                    <span>
                      <span className="font-mono text-foreground">{inv.portfolioCount}</span>{" "}
                      portfolio companies
                    </span>
                    <span className="text-muted-foreground/40">·</span>
                    <span>{inv.notable.join(", ")}</span>
                  </div>

                  {/* TODO(backend): wire to /api/meetings POST */}
                  <Button className="mt-auto w-full" size="sm" variant="secondary">
                    Request a meeting
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
