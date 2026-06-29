"use client";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";
import { CheckCircle2, Circle, FileText, MessageSquare, Target } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScoreRing } from "@/components/shared/score-ring";

const radarData = [
  { axis: "Innovation", value: 88 },
  { axis: "Feasibility", value: 74 },
  { axis: "Market Fit", value: 91 },
  { axis: "Legal", value: 62 },
  { axis: "Technology", value: 80 },
  { axis: "Funding", value: 70 },
];

const trendData = [
  { week: "W1", score: 52 },
  { week: "W2", score: 58 },
  { week: "W3", score: 64 },
  { week: "W4", score: 69 },
  { week: "W5", score: 74 },
  { week: "W6", score: 78 },
];

const tasks = [
  { label: "Add data-residency policy", done: true },
  { label: "Validate payer willingness to pay", done: true },
  { label: "Complete regulatory checklist", done: false },
  { label: "Refine financial model", done: false },
];

export function ValidationDashboard() {
  return (
    <section className="relative py-24">
      <div className="glow-blob left-0 top-1/3 h-72 w-72 bg-primary/10" />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Validation dashboard"
          title={
            <>
              Watch your score{" "}
              <span className="text-gradient-brand">climb</span>
            </>
          }
          subtitle="Every review, task, and milestone in one workspace. This is the cockpit founders live in between submission and verification."
        />

        <Reveal className="mt-14">
          <div className="gradient-border glass-strong rounded-3xl p-5 sm:p-7">
            {/* top bar */}
            <div className="flex flex-col gap-4 border-b border-white/[0.06] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 font-display text-base font-bold text-white">
                  M
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">MedLink</p>
                  <p className="text-sm text-muted-foreground">
                    Async triage for clinics · MVP stage
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="primary">Healthcare</Badge>
                <Badge variant="success">
                  <span className="size-1.5 rounded-full bg-success" /> Verified
                </Badge>
                <Badge variant="accent">Mentor: Dr. Fischer</Badge>
              </div>
            </div>

            {/* grid */}
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {/* score + radar */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="text-sm font-medium">Validation score</p>
                <div className="mt-3 flex items-center gap-4">
                  <ScoreRing score={78} size={104} stroke={9} />
                  <div className="h-32 flex-1">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData} outerRadius="80%">
                        <PolarGrid stroke="hsl(240 5% 20%)" />
                        <PolarAngleAxis
                          dataKey="axis"
                          tick={{ fill: "hsl(240 5% 55%)", fontSize: 8 }}
                        />
                        <Radar
                          dataKey="value"
                          stroke="hsl(221 83% 53%)"
                          fill="hsl(221 83% 53%)"
                          fillOpacity={0.35}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* trend */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Score over time</p>
                  <span className="font-mono text-xs text-success">+26 in 6 weeks</span>
                </div>
                <div className="mt-3 h-36">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData} margin={{ top: 6, right: 6, left: -24, bottom: 0 }}>
                      <defs>
                        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(258 90% 66%)" stopOpacity={0.5} />
                          <stop offset="100%" stopColor="hsl(258 90% 66%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="week"
                        tick={{ fill: "hsl(240 5% 55%)", fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "hsl(240 6% 10%)",
                          border: "1px solid hsl(240 5% 18%)",
                          borderRadius: 12,
                          fontSize: 12,
                        }}
                        labelStyle={{ color: "hsl(0 0% 80%)" }}
                      />
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="hsl(258 90% 66%)"
                        strokeWidth={2}
                        fill="url(#trendFill)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* funding + tasks */}
              <div className="flex flex-col gap-5">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Funding progress</span>
                    <span className="font-mono text-muted-foreground">$1.05M / $1.5M</span>
                  </div>
                  <Progress value={70} className="mt-3" />
                  <p className="mt-2 text-xs text-muted-foreground">Seed round · 70% committed</p>
                </div>

                <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Target className="size-4 text-accent" />
                    Tasks from reviews
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {tasks.map((t) => (
                      <li key={t.label} className="flex items-center gap-2 text-sm">
                        {t.done ? (
                          <CheckCircle2 className="size-4 shrink-0 text-success" />
                        ) : (
                          <Circle className="size-4 shrink-0 text-muted-foreground/50" />
                        )}
                        <span className={t.done ? "text-muted-foreground line-through" : ""}>
                          {t.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* footer stats */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: MessageSquare, label: "Expert reviews", value: "38" },
                { icon: FileText, label: "Documents", value: "12" },
                { icon: Target, label: "Milestones", value: "4 / 6" },
                { icon: CheckCircle2, label: "Community rating", value: "4.6" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <Icon className="size-4 text-muted-foreground" />
                    <div>
                      <p className="font-mono text-base font-semibold">{s.value}</p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
