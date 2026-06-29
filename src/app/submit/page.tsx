import { Sparkles } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { industries } from "@/data/categories";

export const metadata = {
  title: "Submit your idea · Startup Nexus",
  description: "Describe your startup and get it routed to the right experts for a validation score.",
};

export default function SubmitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Submit your idea"
        title={
          <>
            Start with a paragraph.{" "}
            <span className="text-gradient-brand">We handle the rest</span>
          </>
        }
        subtitle="No deck required. Describe the problem and your solution — our classifier tags it and routes it to specialists for review."
      />

      <section className="pb-24">
        <div className="container-wide max-w-3xl">
          <Reveal>
            <div className="gradient-border glass-strong rounded-3xl p-6 sm:p-8">
              {/* TODO(backend): wire to POST /api/startups */}
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium">Startup name</label>
                  <input
                    type="text"
                    placeholder="e.g. MedLink"
                    className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">One-line tagline</label>
                  <input
                    type="text"
                    placeholder="Async triage that routes patients to the right care in minutes."
                    className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">The problem & your solution</label>
                  <textarea
                    rows={5}
                    placeholder="What problem are you solving, for whom, and how?"
                    className="mt-1.5 w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Industry</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {industries.map((ind) => (
                      <Badge key={ind} variant="outline" className="cursor-default">
                        {ind}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Sparkles className="size-3 text-accent" />
                    Or let AI categorize it automatically on submit.
                  </p>
                </div>

                <Button size="lg" className="w-full">
                  Submit for validation
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
