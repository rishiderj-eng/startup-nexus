import {
  FileText,
  Presentation,
  Calculator,
  Scale,
  Coins,
  BookOpen,
  PlayCircle,
  GraduationCap,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Resources · Startup Nexus",
  description:
    "Templates, financial models, legal docs, grant opportunities, blogs, videos, and courses to move your startup forward.",
};

// TODO(backend): replace with GET /api/resources/templates
const templates = [
  { icon: FileText, title: "Business plan", description: "A lean, investor-ready plan you fill in section by section.", format: "DOCX · PDF" },
  { icon: Presentation, title: "Pitch deck", description: "The 11-slide structure that closes pre-seed and seed rounds.", format: "PPTX · KEY" },
  { icon: Calculator, title: "Financial model", description: "Three-statement model with cohorts, runway, and scenarios.", format: "XLSX" },
  { icon: Scale, title: "Legal documents", description: "SAFEs, founder agreements, NDAs, and IP assignment templates.", format: "DOCX" },
];

// TODO(backend): replace with GET /api/resources/grants
const grants = [
  { name: "Climate Innovation Fund", amount: "Up to $250K", region: "Global", deadline: "Rolling", industries: ["Climate", "Energy"] },
  { name: "Digital Health Accelerator Grant", amount: "Up to $150K", region: "US · EU", deadline: "Aug 30", industries: ["Healthcare"] },
  { name: "AgriTech Seed Program", amount: "Up to $100K", region: "Africa · S. Asia", deadline: "Sep 15", industries: ["Agriculture"] },
  { name: "Women Founders Catalyst", amount: "Up to $200K", region: "Global", deadline: "Rolling", industries: ["All"] },
];

// TODO(backend): replace with GET /api/resources/learn
const learn = [
  { icon: BookOpen, kind: "Blog", title: "Why a validation score beats a business plan", meta: "8 min read", tint: "from-blue-400 to-indigo-600" },
  { icon: PlayCircle, kind: "Video", title: "Teardown: turning a 58 into an 84", meta: "22 min", tint: "from-violet-400 to-purple-600" },
  { icon: GraduationCap, kind: "Course", title: "Fundraising from first principles", meta: "6 lessons", tint: "from-emerald-400 to-teal-600" },
  { icon: BookOpen, kind: "Blog", title: "Reconciliation as a startup wedge", meta: "6 min read", tint: "from-orange-400 to-rose-600" },
  { icon: PlayCircle, kind: "Video", title: "What investors actually read first", meta: "14 min", tint: "from-cyan-400 to-sky-600" },
  { icon: GraduationCap, kind: "Course", title: "0→1 product for technical founders", meta: "9 lessons", tint: "from-amber-400 to-yellow-600" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title={
          <>
            Everything you need to go from{" "}
            <span className="text-gradient-brand">idea to raise</span>
          </>
        }
        subtitle="Battle-tested templates, live grant opportunities, and a growing library of blogs, videos, and courses."
      />

      {/* templates */}
      <section className="pb-4">
        <div className="container-wide">
          <SectionHeading
            align="left"
            title="Startup templates"
            subtitle="Don't start from a blank page. Every template is reviewed by operators on the platform."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {templates.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.title} index={i % 4}>
                  <div className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-card/50 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
                    <span className="grid size-10 place-items-center rounded-xl bg-white/[0.04] text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold">{t.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {t.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {t.format}
                      </span>
                      {/* TODO(backend): wire to /api/resources/download */}
                      <Download className="size-4 text-muted-foreground/50 transition-colors group-hover:text-foreground" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* grants */}
      <section className="py-14">
        <div className="container-wide">
          <SectionHeading
            align="left"
            eyebrow="Funding"
            title="Grant opportunities"
            subtitle="Non-dilutive capital, matched to your industry and stage."
          />
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.06] bg-card/50 backdrop-blur-xl">
            {grants.map((g, i) => (
              <Reveal key={g.name} index={i}>
                <div className="flex flex-col gap-3 border-b border-white/[0.06] p-5 last:border-0 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-success/15 text-success">
                      <Coins className="size-5" />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold">{g.name}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span>{g.region}</span>
                        <span className="text-muted-foreground/40">·</span>
                        <span>Deadline: {g.deadline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pl-13 sm:pl-0">
                    <div className="flex flex-wrap gap-1.5">
                      {g.industries.map((ind) => (
                        <Badge key={ind} variant="default" className="text-[11px]">{ind}</Badge>
                      ))}
                    </div>
                    <span className="font-mono text-sm font-semibold text-success">{g.amount}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* learn */}
      <section className="pb-24">
        <div className="container-wide">
          <SectionHeading
            align="left"
            title="Blogs, videos & courses"
            subtitle="Learn from teardowns, operator playbooks, and structured courses."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {learn.map((l, i) => {
              const Icon = l.icon;
              return (
                <Reveal key={l.title} index={i % 3}>
                  <a
                    href="#"
                    className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-card/50 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow-accent"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`grid size-10 place-items-center rounded-xl bg-gradient-to-br ${l.tint} text-white`}
                      >
                        <Icon className="size-5" />
                      </span>
                      <Badge variant="accent" className="text-[11px]">{l.kind}</Badge>
                    </div>
                    <h3 className="mt-4 flex-1 font-display text-base font-semibold leading-snug">
                      {l.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">
                      <span className="text-xs text-muted-foreground">{l.meta}</span>
                      <ArrowUpRight className="size-4 text-muted-foreground/50 transition-colors group-hover:text-foreground" />
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
