"use client";

import Link from "next/link";
import { useState } from "react";
import { Hexagon, Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Explore Startups", href: "/explore" },
      { label: "Experts", href: "/experts" },
      { label: "Investors", href: "/investors" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Forums", href: "/community" },
      { label: "Events", href: "/community" },
      { label: "Hackathons", href: "/community" },
      { label: "News Feed", href: "/community" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Templates", href: "/resources" },
      { label: "Blog", href: "/resources" },
      { label: "Courses", href: "/resources" },
      { label: "Grants", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");

  // TODO(backend): POST /api/newsletter { email }
  const subscribe = () => {
    if (!email) return;
    setEmail("");
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-background">
      <div className="glow-blob left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 bg-primary/10" />
      <div className="container-wide relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Hexagon className="size-4 text-white" fill="white" />
              </span>
              <span className="font-display text-base font-semibold">Startup Nexus</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A global ecosystem where founders and experts collaborate to turn ideas
              into validated, investable companies.
            </p>

            <div className="mt-2">
              <p className="mb-2 text-sm font-medium">Get the weekly founder brief</p>
              <div className="flex max-w-sm items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 pl-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@startup.com"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <Button size="icon" className="size-9 shrink-0" onClick={subscribe} aria-label="Subscribe">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <p className="text-sm font-semibold">{col.title}</p>
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Startup Nexus. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid size-9 place-items-center rounded-full border border-white/[0.08] text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
