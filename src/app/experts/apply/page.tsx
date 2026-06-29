import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { industries } from "@/data/categories";

export const metadata = {
  title: "Join as an expert · Startup Nexus",
  description: "Apply to review startups, mentor founders, and earn on your own schedule.",
};

export default function ExpertApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join as an expert"
        title={
          <>
            Put your experience to{" "}
            <span className="text-gradient-brand">work</span>
          </>
        }
        subtitle="Review startups in your domain, mentor founders, and set your own rate. We vet every applicant to keep the bar high."
      />

      <section className="pb-24">
        <div className="container-wide max-w-3xl">
          <Reveal>
            <div className="gradient-border glass-strong rounded-3xl p-6 sm:p-8">
              {/* TODO(backend): wire to POST /api/experts/apply */}
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Full name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Years of experience</label>
                    <input
                      type="number"
                      placeholder="12"
                      className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">LinkedIn or portfolio</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/…"
                    className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Your domains</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {industries.map((ind) => (
                      <Badge key={ind} variant="outline" className="cursor-default">
                        {ind}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Why you'd be a great reviewer</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the startups or teams you've helped build."
                    className="mt-1.5 w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent/50"
                  />
                </div>

                <Button size="lg" className="w-full">
                  Submit application
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
