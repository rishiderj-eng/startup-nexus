"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go]);

  const t = testimonials[index];

  return (
    <section className="relative py-24">
      <div className="glow-blob right-1/4 top-1/2 h-72 w-72 bg-accent/10" />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by{" "}
              <span className="text-gradient-brand">both sides</span> of the table
            </>
          }
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="gradient-border glass-strong relative rounded-3xl p-8 sm:p-10">
            <Quote className="size-8 text-primary/40" />
            <div className="relative mt-4 min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-display text-xl font-medium leading-relaxed text-balance sm:text-2xl">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span
                      className={`grid size-11 place-items-center rounded-full bg-gradient-to-br ${t.avatarColor} text-sm font-semibold text-white`}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p className="font-medium">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-gradient-to-r from-primary to-accent" : "w-1.5 bg-white/15"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous"
                  className="grid size-9 place-items-center rounded-full border border-white/[0.08] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next"
                  className="grid size-9 place-items-center rounded-full border border-white/[0.08] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
