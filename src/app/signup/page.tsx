import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export const metadata = { title: "Sign up · Startup Nexus" };

export default function SignupPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-32">
      <div className="glow-blob -top-10 right-1/3 h-72 w-96 bg-accent/15" />
      <div className="glow-blob bottom-0 left-1/4 h-64 w-80 bg-primary/15" />
      <Reveal>
        <div className="gradient-border glass-strong w-full max-w-md rounded-3xl p-8">
          <Link href="/" className="font-display text-lg font-semibold">
            Startup<span className="text-gradient-brand">Nexus</span>
          </Link>
          <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight">
            Create your account
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Validate your idea for free. No card required.
          </p>

          {/* TODO(backend): wire to POST /api/auth/signup */}
          <div className="mt-6 space-y-3">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent/50"
            />
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent/50"
            />
            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent/50"
            />
            <Button className="w-full">Create account</Button>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-foreground underline-offset-4 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
