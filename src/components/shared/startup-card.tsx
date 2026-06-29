import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Startup } from "@/data/startups";

export function StartupCard({ startup }: { startup: Startup }) {
  return (
    <Link
      href={`/startups/${startup.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-white/[0.06] bg-card/50 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
    >
      <div className="flex items-start justify-between">
        <span
          className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br ${startup.logoColor} font-display text-base font-bold text-white`}
        >
          {startup.name[0]}
        </span>
        <div className="flex items-center gap-2">
          {startup.verified && (
            <Badge variant="success">
              <span className="size-1.5 rounded-full bg-success" /> Verified
            </Badge>
          )}
          <ArrowUpRight className="size-4 text-muted-foreground/50 transition-colors group-hover:text-foreground" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <h3 className="font-display text-lg font-semibold">{startup.name}</h3>
        <Badge variant="default" className="text-[11px]">{startup.stage}</Badge>
      </div>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {startup.tagline}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <div className="flex items-center gap-3">
          <Badge variant="primary" className="text-[11px]">{startup.industry}</Badge>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="size-3 fill-amber-400 text-amber-400" />
            {startup.communityRating}
          </span>
        </div>
        <div className="text-right">
          <p className="font-mono text-lg font-semibold leading-none text-gradient-brand">
            {startup.score}
          </p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">score</p>
        </div>
      </div>
    </Link>
  );
}
