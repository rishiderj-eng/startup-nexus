"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FloatingIcons } from "@/components/shared/floating-icons";
import { ScoreRing } from "@/components/shared/score-ring";
import { scoreAxes } from "@/data/stats";

const previewScores = [88, 74, 91, 62, 80, 70];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* animated gradient blobs */}
      <div className="glow-blob -top-20 left-[10%] h-72 w-72 animate-float bg-primary/25" />
      <div
        className="glow-blob right-[8%] top-10 h-80 w-80 bg-accent/20"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="glow-blob bottom-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-success/10" />
      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <FloatingIcons />

      <div className="container-wide relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy */}
          <div className="flex flex-col items-start gap-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="primary" className="px-3 py-1">
                <Sparkles className="size-3" />
                Validate before you build
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              Build better
              <br />
              startups{" "}
              <span className="text-gradient-brand animate-gradient-pan">together</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              A global startup ecosystem where founders, experts, mentors, investors,
              developers, marketers, and product leaders collaborate to transform ideas
              into successful companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              {/* TODO(backend): wire to /signup */}
              <Button size="lg" asChild>
                <Link href="/signup">
                  Get started
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              {/* TODO(backend): wire to /experts/apply */}
              <Button size="lg" variant="secondary" asChild>
                <Link href="/experts">Join as expert</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex -space-x-2">
                {["from-primary to-accent", "from-emerald-400 to-teal-600", "from-orange-400 to-rose-600", "from-violet-400 to-purple-600"].map(
                  (c, i) => (
                    <span
                      key={i}
                      className={`size-7 rounded-full bg-gradient-to-br ${c} ring-2 ring-background`}
                    />
                  )
                )}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>trusted by 10,000+ founders</span>
              </div>
            </motion.div>
          </div>

          {/* Right: signature validation-score preview */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="gradient-border glass-strong rounded-3xl p-6 shadow-[0_40px_120px_-40px_rgba(37,99,235,0.4)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Live validation
                  </p>
                  <p className="font-display text-lg font-semibold">MedLink</p>
                </div>
                <Badge variant="success">
                  <span className="size-1.5 rounded-full bg-success" />
                  Verified
                </Badge>
              </div>

              <div className="mt-6 flex items-center gap-6">
                <ScoreRing score={78} />
                <div className="flex-1 space-y-2.5">
                  {scoreAxes.map((axis, i) => (
                    <div key={axis} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{axis}</span>
                        <span className="font-mono text-foreground">{previewScores[i]}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${previewScores[i]}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.08 }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-xs font-semibold text-white">
                    LF
                  </span>
                  <div className="text-xs">
                    <p className="font-medium">Dr. Lena Fischer</p>
                    <p className="text-muted-foreground">Healthcare expert · just reviewed</p>
                  </div>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* floating mini-badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-5 bottom-10 hidden rounded-2xl border border-white/[0.08] bg-card/80 p-3 backdrop-blur-xl sm:block"
            >
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Market fit
              </p>
              <p className="font-mono text-xl font-semibold text-success">+17 pts</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
