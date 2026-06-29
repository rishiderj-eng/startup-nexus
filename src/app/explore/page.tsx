"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { StartupCard } from "@/components/shared/startup-card";
import { Reveal } from "@/components/shared/reveal";
import { startups } from "@/data/startups";

const filters = ["All", ...Array.from(new Set(startups.map((s) => s.industry)))];

export default function ExplorePage() {
  const [active, setActive] = useState("All");

  // TODO(backend): replace local filter with GET /api/startups?industry=
  const filtered = useMemo(
    () => (active === "All" ? startups : startups.filter((s) => s.industry === active)),
    [active]
  );

  return (
    <>
      <PageHeader
        eyebrow="Explore startups"
        title={
          <>
            Discover startups being{" "}
            <span className="text-gradient-brand">validated</span> right now
          </>
        }
        subtitle="Browse ideas in motion. Every score is earned through expert review and community feedback — not self-reported."
      />

      <section className="pb-24">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                  active === f
                    ? "border-transparent bg-gradient-to-r from-primary to-accent text-white"
                    : "border-white/[0.08] text-muted-foreground hover:border-white/20 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s, i) => (
              <Reveal key={s.id} index={i % 3}>
                <StartupCard startup={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
