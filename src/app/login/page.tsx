import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export const metadata = { title: "Log in · Startup Nexus" };

export default function LoginPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-32">
      <div className="glow-blob -top-10 left-1/3 h-72 w-96 bg-primary/15" />
      <div className="glow-blob bottom-0 right-1/4 h-64 w-80 bg-accent/15" />
      <Reveal>
        <div className="gradient-border glass-strong w-full max-w-md rounded-3xl p-8">
          <Link href="/" className="font-display text-lg font-semibold">
            Startup<span className="text-gradient-brand">Nexus</span>
          </Link>
          <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Log in to track your validation score and reviews.
          </p>

          {/* TODO(backend): wire to POST /api/auth/login */}
          <div className="mt-6 space-y-3">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50"
            />
            <Button className="w-full">Log in</Button>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New here?{" "}
            <Link href="/signup" className="text-foreground underline-offset-4 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
