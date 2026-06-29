import {
  MessagesSquare,
  CalendarDays,
  Code2,
  Building,
  Network,
  Mic,
  Flame,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Community · Startup Nexus",
  description:
    "Discussion forums, founder meetups, hackathons, AMAs, and a live news feed — the social layer of the startup ecosystem.",
};

// TODO(backend): replace with GET /api/community/spaces
const spaces = [
  {
    icon: MessagesSquare,
    title: "Discussion forums",
    description: "Topic threads on fundraising, GTM, hiring, and product. Searchable and expert-moderated.",
    meta: "2,140 active threads",
    tint: "from-blue-400 to-indigo-600",
  },
  {
    icon: CalendarDays,
    title: "Founder meetups",
    description: "Local and virtual meetups matched to your stage and city. RSVP in one tap.",
    meta: "38 upcoming",
    tint: "from-violet-400 to-purple-600",
  },
  {
    icon: Code2,
    title: "Hackathons",
    description: "Themed build sprints with prizes, expert judges, and fast-track validation reviews.",
    meta: "Next: AI for Climate",
    tint: "from-emerald-400 to-teal-600",
  },
  {
    icon: Building,
    title: "Incubators & accelerators",
    description: "Browse partner programs and apply directly with your validated profile attached.",
    meta: "62 partners",
    tint: "from-orange-400 to-rose-600",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Smart intros to founders, operators, and investors based on what you're building.",
    meta: "Matchmaking weekly",
    tint: "from-cyan-400 to-sky-600",
  },
  {
    icon: Mic,
    title: "AMAs",
    description: "Live ask-me-anything sessions with operators who've been through it. Recorded for later.",
    meta: "Thursdays, 5pm UTC",
    tint: "from-amber-400 to-yellow-600",
  },
];

// TODO(backend): replace with GET /api/community/feed
const feed = [
  {
    author: "Sofia Marin",
    initials: "SM",
    color: "from-blue-400 to-indigo-600",
    time: "2h",
    text: "Ledgerly just hit a validation score of 84 after shipping the multi-currency module. Huge thanks to the finance reviewers.",
    tag: "Milestone",
  },
  {
    author: "Daniel Cho",
    initials: "DC",
    color: "from-violet-400 to-purple-600",
    time: "5h",
    text: "Hosting an AMA on unit economics for marketplace startups this Thursday. Bring your messiest spreadsheets.",
    tag: "AMA",
  },
  {
    author: "Kofi Mensah",
    initials: "KM",
    color: "from-lime-400 to-green-600",
    time: "1d",
    text: "FieldSense is looking for an embedded engineer to join the field-trial sprint. Remote-friendly, equity included.",
    tag: "Hiring",
  },
  {
    author: "Grace Lin",
    initials: "GL",
    color: "from-emerald-400 to-teal-600",
    time: "1d",
    text: "We're opening 5 pre-seed slots at Terra Ventures for climate startups with a score above 75. Verified profiles only.",
    tag: "Funding",
  },
];

// TODO(backend): replace with GET /api/community/trending
const trending = [
  "Pricing for usage-based SaaS",
  "Getting your first 10 design partners",
  "Cap tables for solo founders",
  "When to hire a clinical advisor",
  "Reconciliation as a wedge",
  "On-device AI vs. cloud",
];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title={
          <>
            The people who turn ideas into{" "}
            <span className="text-gradient-brand">companies</span>
          </>
        }
        subtitle="Forums, meetups, hackathons, and AMAs — plus a live feed of what's happening across the ecosystem right now."
      />

      <section className="pb-12">
        <div className="container-wide">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {spaces.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} index={i % 3}>
                  <div className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-card/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow-accent">
                    <span
                      className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br ${s.tint} text-white`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <span className="font-mono text-xs text-muted-foreground">{s.meta}</span>
                      <ArrowUpRight className="size-4 text-muted-foreground/50 transition-colors group-hover:text-foreground" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide grid gap-5 lg:grid-cols-3">
          {/* news feed */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex items-center gap-2">
                <Flame className="size-4 text-accent" />
                <h2 className="font-display text-xl font-semibold">News feed</h2>
              </div>
            </Reveal>
            <div className="mt-4 space-y-4">
              {feed.map((p, i) => (
                <Reveal key={i} index={i}>
                  <article className="rounded-2xl border border-white/[0.06] bg-card/50 p-5 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid size-9 place-items-center rounded-full bg-gradient-to-br ${p.color} text-xs font-bold text-white`}
                      >
                        {p.initials}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{p.author}</p>
                        <p className="text-xs text-muted-foreground">{p.time} ago</p>
                      </div>
                      <Badge variant="primary" className="text-[11px]">{p.tag}</Badge>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* trending */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2">
                <TrendingUp className="size-4 text-primary" />
                <h2 className="font-display text-xl font-semibold">Trending topics</h2>
              </div>
            </Reveal>
            <Reveal index={1}>
              <div className="mt-4 rounded-2xl border border-white/[0.06] bg-card/50 p-2 backdrop-blur-xl">
                {trending.map((t, i) => (
                  <a
                    key={t}
                    href="#"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="font-mono text-sm text-muted-foreground/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-muted-foreground">{t}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
