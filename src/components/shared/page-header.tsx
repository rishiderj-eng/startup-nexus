import { Reveal } from "./reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44">
      <div className="glow-blob -top-10 left-1/4 h-64 w-96 bg-primary/15" />
      <div className="glow-blob right-1/4 top-0 h-56 w-80 bg-accent/15" />
      <div className="container-wide relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal index={1}>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal index={2}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
