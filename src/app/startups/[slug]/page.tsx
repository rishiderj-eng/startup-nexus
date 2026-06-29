import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  BadgeCheck,
  Target,
  Users,
  Globe2,
  Banknote,
  Boxes,
  Swords,
  CheckCircle2,
  Circle,
  ArrowLeft,
  Play,
  FileText,
  MessageSquare,
} from "lucide-react";
import { ScoreRing } from "@/components/shared/score-ring";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { startups, getStartup, type Startup } from "@/data/startups";

// TODO(backend): replace with generated paths from GET /api/startups
export function generateStaticParams() {
  return startups.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const startup = getStartup(slug);
  if (!startup) return { title: "Startup not found · Startup Nexus" };
  return {
    title: `${startup.name} · Startup Nexus`,
    description: startup.tagline,
  };
}

const axisLabels: { key: keyof Startup["breakdown"]; label: string }[] = [
  { key: "innovation", label: "Innovation" },
  { key: "feasibility", label: "Feasibility" },
  { key: "marketFit", label: "Market Fit" },
  { key: "legalReadiness", label: "Legal Readiness" },
  { key: "technology", label: "Technology" },
  { key: "fundingReadiness", label: "Funding Readiness" },
];

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Target;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-card/50 p-5 backdrop-blur-xl">
      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <Icon className="size-3.5" />
        {label}
      </p>
      <div className="mt-2 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default async function StartupProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const startup = getStartup(slug);
  if (!startup) notFound();

  return (
    <>
      {/* header */}
      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
        <div className="glow-blob -top-10 left-1/4 h-64 w-96 bg-primary/15" />
        <div className="glow-blob right-1/4 top-0 h-56 w-80 bg-accent/15" />
        <div className="container-wide relative">
          <Reveal>
            <Link
              href="/explore"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> Back to explore
            </Link>
          </Reveal>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <Reveal index={1}>
              <div className="flex items-center gap-4">
                <span
                  className={`grid size-16 place-items-center rounded-2xl bg-gradient-to-br ${startup.logoColor} font-display text-2xl font-bold text-white`}
                >
                  {startup.name[0]}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                      {startup.name}
                    </h1>
                    {startup.verified && <BadgeCheck className="size-6 text-primary" />}
                  </div>
                  <p className="mt-1 max-w-xl text-muted-foreground">{startup.tagline}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Badge variant="primary">{startup.industry}</Badge>
                    <Badge variant="default">{startup.stage}</Badge>
                    {startup.verified ? (
                      <Badge variant="success">
                        <span className="size-1.5 rounded-full bg-success" /> Verified
                      </Badge>
                    ) : (
                      <Badge variant="accent">In review</Badge>
                    )}
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />
                      {startup.communityRating} · {startup.reviewsCount} reviews
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal index={2}>
              <div className="flex items-center gap-3">
                {/* TODO(backend): wire to /api/startups/[slug]/deck */}
                <Button variant="secondary" size="lg">
                  <FileText className="size-4" /> Pitch deck
                </Button>
                <Button size="lg">
                  <Play className="size-4" /> View demo
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide grid gap-5 lg:grid-cols-3">
          {/* main column */}
          <div className="space-y-5 lg:col-span-2">
            <Reveal>
              <Field icon={Target} label="Problem">
                {startup.problem}
              </Field>
            </Reveal>
            <Reveal>
              <Field icon={CheckCircle2} label="Solution">
                {startup.solution}
              </Field>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal>
                <Field icon={Users} label="Target audience">
                  {startup.targetAudience}
                </Field>
              </Reveal>
              <Reveal index={1}>
                <Field icon={Globe2} label="Market size">
                  {startup.marketSize}
                </Field>
              </Reveal>
              <Reveal>
                <Field icon={Boxes} label="Business model">
                  {startup.businessModel}
                </Field>
              </Reveal>
              <Reveal index={1}>
                <Field icon={Banknote} label="Revenue model">
                  {startup.revenueModel}
                </Field>
              </Reveal>
            </div>

            <Reveal>
              <Field icon={Swords} label="Competitors">
                <div className="flex flex-wrap gap-2">
                  {startup.competitors.map((c) => (
                    <Badge key={c} variant="outline">{c}</Badge>
                  ))}
                </div>
              </Field>
            </Reveal>

            {/* roadmap */}
            <Reveal>
              <div className="rounded-2xl border border-white/[0.06] bg-card/50 p-5 backdrop-blur-xl">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Roadmap
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {startup.roadmap.map((r) => (
                    <div
                      key={r.quarter}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                    >
                      {r.done ? (
                        <CheckCircle2 className="size-4 shrink-0 text-success" />
                      ) : (
                        <Circle className="size-4 shrink-0 text-muted-foreground/40" />
                      )}
                      <div>
                        <p className="font-mono text-xs text-muted-foreground">{r.quarter}</p>
                        <p className={`text-sm ${r.done ? "text-muted-foreground" : ""}`}>
                          {r.goal}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* expert reviews */}
            <Reveal>
              <div className="rounded-2xl border border-white/[0.06] bg-card/50 p-5 backdrop-blur-xl">
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <MessageSquare className="size-3.5" /> Expert reviews
                </p>
                <div className="mt-4 space-y-4">
                  {startup.reviews.map((rv, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{rv.expert}</p>
                          <p className="text-xs text-muted-foreground">{rv.role}</p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star
                              key={s}
                              className={`size-3.5 ${
                                s < rv.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {rv.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* sidebar */}
          <div className="space-y-5">
            {/* score */}
            <Reveal>
              <div className="gradient-border glass-strong rounded-3xl p-6 text-center">
                <div className="flex justify-center">
                  <ScoreRing score={startup.score} />
                </div>
                <div className="mt-5 space-y-3 text-left">
                  {axisLabels.map((a) => {
                    const val = startup.breakdown[a.key];
                    return (
                      <div key={a.key}>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">{a.label}</span>
                          <span className="font-mono">{val}</span>
                        </div>
                        <Progress value={val} className="mt-1.5 h-1.5" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* founder + funding */}
            <Reveal index={1}>
              <div className="rounded-2xl border border-white/[0.06] bg-card/50 p-5 backdrop-blur-xl">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Founder
                </p>
                <p className="mt-1.5 font-display text-lg font-semibold">{startup.founder}</p>

                <div className="mt-4 flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Funding needed</p>
                    <p className="font-mono text-base font-semibold text-success">
                      {startup.fundingNeeded}
                    </p>
                  </div>
                  {/* TODO(backend): wire to /api/meetings POST */}
                  <Button size="sm">Invest</Button>
                </div>
              </div>
            </Reveal>

            {/* hiring */}
            <Reveal index={2}>
              <div className="rounded-2xl border border-white/[0.06] bg-card/50 p-5 backdrop-blur-xl">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Hiring
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {startup.hiring.map((role) => (
                    <Badge key={role} variant="default">{role}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
