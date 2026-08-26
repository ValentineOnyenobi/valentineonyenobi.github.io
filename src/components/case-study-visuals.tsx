import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function StatusBadge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-sm border border-signal/40 bg-signal/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-signal",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
      {status}
    </span>
  );
}

export function ArchitectureFlow({
  title,
  steps,
  className,
}: {
  title: string;
  steps: string[];
  className?: string;
}) {
  return (
    <Reveal>
      <section className={cn("card-surface overflow-hidden p-6 md:p-8", className)}>
        <p className="mono-label">{title}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="rounded-sm border border-signal/40 bg-signal/10 px-4 py-3 text-center">
                <p className="font-mono text-[11px] uppercase tracking-widest text-signal">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 font-display text-sm font-semibold">{step}</p>
              </div>
              {i < steps.length - 1 && <ArrowRight className="h-4 w-4 text-signal/60" />}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export function ProcessFlow({
  title,
  steps,
  className,
}: {
  title: string;
  steps: string[];
  className?: string;
}) {
  return (
    <Reveal>
      <section className={cn("card-surface overflow-hidden p-6 md:p-8", className)}>
        <p className="mono-label">{title}</p>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-stretch">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-1 items-center gap-4">
              <div className="flex flex-1 rounded-sm border border-border bg-surface-strong px-5 py-4">
                <p className="font-display text-sm font-semibold">{step}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-signal md:block" />
              )}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export function RiskFrameworkGrid({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <Reveal>
      <section className={cn("card-surface overflow-hidden p-6 md:p-8", className)}>
        <p className="mono-label">Risk & Control Framework</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-sm border border-border bg-surface-strong px-4 py-3"
            >
              <p className="font-display text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export function EvidenceCards({
  items,
  className,
}: {
  items: { value: string; label: string; note?: string }[];
  className?: string;
}) {
  return (
    <Reveal>
      <section className={cn("grid gap-4 sm:grid-cols-2", className)}>
        {items.map((item) => (
          <div key={item.label} className="card-surface signal-glow p-6 md:p-8">
            <p className="font-display text-4xl font-bold text-signal">{item.value}</p>
            <p className="mt-2 font-medium">{item.label}</p>
            {item.note && <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>}
          </div>
        ))}
      </section>
    </Reveal>
  );
}
