import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/data/portfolio";
import { socialMeta } from "@/lib/og";
import {
  ArchitectureFlow,
  EvidenceCards,
  ProcessFlow,
  RiskFrameworkGrid,
  StatusBadge,
} from "@/components/case-study-visuals";

export function caseStudyPage(slug: string) {
  const study = caseStudies.find((c) => c.slug === slug);

  return {
    head: () => {
      if (!study) {
        return {
          meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }],
        };
      }
      const title = `${study.title} — Valentine Onyenobi`;
      return {
        meta: [
          { title },
          { name: "description", content: study.executiveSummary },
          { property: "og:title", content: title },
          { property: "og:description", content: study.executiveSummary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
          ...socialMeta(`/projects/${study.slug}`),
        ],
      };
    },
    component: () => <CaseStudyDetail slug={slug} />,
  };
}

function CaseStudyNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-28 text-center">
      <h1 className="text-3xl font-bold">Case study not found</h1>
      <p className="mt-3 text-muted-foreground">That case study doesn&apos;t exist.</p>
      <Link
        to="/projects"
        className="mt-8 inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground"
      >
        Back to Featured Case Studies
      </Link>
    </div>
  );
}

function CaseStudyDetail({ slug }: { slug: string }) {
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return <CaseStudyNotFound />;

  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const prev = index > 0 ? caseStudies[index - 1] : null;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : null;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <Reveal>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-signal"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Featured Case Studies
        </Link>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10">
          <p className="mono-label">{study.organisation}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{study.title}</h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.displayCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-sm border border-signal/40 bg-signal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-signal"
              >
                {cat}
              </span>
            ))}
          </div>
          {study.status && <StatusBadge status={study.status} className="mt-6" />}
          {study.confidentiality && (
            <p className="mono-label mt-6 text-amber">{study.confidentiality}</p>
          )}
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {study.executiveSummary}
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <section className="mt-16">
          <p className="mono-label">The Problem</p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {study.problem}
          </p>
        </section>
      </Reveal>

      {study.workedOn && (
        <Reveal delay={120}>
          <section className="mt-16">
            <p className="mono-label">What I Worked On</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {study.workedOn.map((item) => (
                <li
                  key={item}
                  className="card-surface flex items-start gap-3 p-4 font-display text-sm font-medium"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      )}

      {study.architecture && (
        <ArchitectureFlow
          title={study.architecture.title}
          steps={study.architecture.steps}
          className="mt-16"
        />
      )}

      {study.riskFramework && <RiskFrameworkGrid items={study.riskFramework} className="mt-16" />}

      {study.processFlow && (
        <ProcessFlow
          title={study.processFlow.title}
          steps={study.processFlow.steps}
          className="mt-16"
        />
      )}

      {study.approach?.map((section, i) => (
        <Reveal key={section.title} delay={i * 80}>
          <section className="mt-16">
            <p className="mono-label">{section.title}</p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {section.body}
            </p>
          </section>
        </Reveal>
      ))}

      {study.evidence && <EvidenceCards items={study.evidence} className="mt-16" />}

      <Reveal delay={100}>
        <section className="mt-16 border-l-2 border-signal bg-surface/50 p-6 md:p-8">
          <p className="mono-label">Outcome</p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {study.outcome}
          </p>
        </section>
      </Reveal>

      <Reveal delay={120}>
        <section className="mt-16">
          <p className="mono-label">What This Demonstrates</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.demonstrates.map((item) => (
              <span
                key={item}
                className="rounded-sm border border-border bg-surface-strong px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={140}>
        <section className="mt-16">
          <p className="mono-label">My Role</p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {study.role}
          </p>
        </section>
      </Reveal>

      {study.reflection && (
        <Reveal delay={160}>
          <blockquote className="mt-16 border-l-2 border-signal/60 pl-6 md:pl-8">
            <p className="font-display text-xl italic leading-relaxed text-foreground">
              &ldquo;{study.reflection}&rdquo;
            </p>
          </blockquote>
        </Reveal>
      )}

      <Reveal delay={180}>
        <nav className="mt-20 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-[10rem]">
            {prev ? (
              <Link
                to="/projects/$slug"
                params={{ slug: prev.slug }}
                className="group inline-flex flex-col gap-1"
              >
                <span className="mono-label">Previous Case Study</span>
                <span className="inline-flex items-center gap-2 font-display text-lg font-semibold transition-colors group-hover:text-signal">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-signal/60 hover:text-signal"
          >
            Back to Featured Case Studies
          </Link>

          <div className="min-w-[10rem] sm:text-right">
            {next ? (
              <Link
                to="/projects/$slug"
                params={{ slug: next.slug }}
                className="group inline-flex flex-col gap-1"
              >
                <span className="mono-label">Next Case Study</span>
                <span className="inline-flex items-center gap-2 font-display text-lg font-semibold transition-colors group-hover:text-signal">
                  {next.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>
      </Reveal>
    </div>
  );
}
