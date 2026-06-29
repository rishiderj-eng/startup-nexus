"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Lightbulb,
  LineChart,
  Code2,
  Brain,
  Coins,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface FloatItem {
  icon: LucideIcon;
  top: string;
  left: string;
  size: number;
  depth: number; // parallax strength
  delay: number;
  tint: string;
}

const items: FloatItem[] = [
  { icon: Rocket, top: "16%", left: "8%", size: 26, depth: 26, delay: 0, tint: "text-primary/70" },
  { icon: Lightbulb, top: "24%", left: "84%", size: 24, depth: 18, delay: 0.6, tint: "text-accent/70" },
  { icon: LineChart, top: "62%", left: "12%", size: 28, depth: 34, delay: 1.1, tint: "text-success/70" },
  { icon: Code2, top: "70%", left: "80%", size: 22, depth: 22, delay: 0.3, tint: "text-primary/60" },
  { icon: Brain, top: "40%", left: "92%", size: 20, depth: 40, delay: 0.9, tint: "text-accent/60" },
  { icon: Coins, top: "80%", left: "46%", size: 22, depth: 16, delay: 1.4, tint: "text-success/60" },
  { icon: Target, top: "12%", left: "54%", size: 20, depth: 30, delay: 0.5, tint: "text-primary/50" },
  { icon: Zap, top: "52%", left: "70%", size: 22, depth: 24, delay: 1.2, tint: "text-accent/50" },
];

/** Decorative floating icons that drift and respond subtly to the cursor. */
export function FloatingIcons() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: it.top,
              left: it.left,
              x: mouse.x * it.depth,
              y: mouse.y * it.depth,
            }}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: it.delay,
            }}
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-2.5 backdrop-blur-sm">
              <Icon className={it.tint} size={it.size} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
