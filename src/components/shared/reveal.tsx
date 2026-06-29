"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

interface RevealProps {
  children: ReactNode;
  /** stagger index */
  index?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}

/**
 * Fades + slides children up when they scroll into view.
 * Reduced-motion users get an instant, static reveal (handled in globals.css).
 */
export function Reveal({ children, index = 0, className, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}
