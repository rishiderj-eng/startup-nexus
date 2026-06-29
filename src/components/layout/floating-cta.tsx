"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

/** Floating "Submit your idea" CTA that fades in once the user scrolls past the hero. */
export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-6 z-40"
        >
          {/* TODO(backend): wire to /submit */}
          <Link
            href="/submit"
            className="gradient-button group shadow-[0_14px_40px_-12px_hsl(var(--primary)/0.7)]"
          >
            <Sparkles className="size-4" />
            Submit your idea
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
