import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { LiveDashboard } from "@/components/live-dashboard";
import {
  caseStudies,
  featuredFilters,
  projects,
  technicalFilters,
  type CaseStudy,
  type FeaturedFilter,
  type TechnicalFilter,
} from "@/data/portfolio";
import { socialMeta } from "@/lib/og";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Case Studies, Machine Learning, Power BI & Tableau | Valentine Onyenobi" },
      {
        name: "description",
        content:
          "Featured case studies across strategy, consulting, operations and financial services, plus nine technical projects: XGBoost models, Power BI and Tableau dashboards.",
      },
      { property: "og:title", content: "Projects — Valentine Onyenobi" },
      {
        property: "og:description",
        content:
          "Featured case studies and hands-on machine learning / BI projects, with the reasoning attached.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialMeta("/projects"),
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  // Fully independent filter states — one per collection.
  const [featuredFilter, setFeaturedFilter] = useState<FeaturedFilter>("All");
  const [technicalFilter, setTechnicalFilter] = useState<TechnicalFilter>("All");

  const visibleCaseStudies = caseStudies.filter(
    (c) => featuredFilter === "All" || c.categories.includes(featuredFilter),
  );
  const visibleProjects = projects.filter(
    (p) => technicalFilter === "All" || p.category === technicalFilter,
  );

  // Counts are per-collection only — never against the combined portfolio.
  const featuredCount = (f: FeaturedFilter) =>
    f === "All"
      ? caseStudies.length
      : caseStudies.filter((c) => c.categories.includes(f)).length;
  const technicalCount = (f: TechnicalFilter) =>
    f === "All" ? projects.length : projects.filter((p) => p.category === f).length;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <p className="mono-label">Portfolio</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Projects, and the decisions behind them
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Each case study follows the same shape: the problem, the approach, the tools, and what it
          actually changed.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest">
          <span className="text-signal">
            {caseStudies.length + projects.length} Projects
          </span>
          <span className="text-muted-foreground">
            Featured Case Studies - {String(caseStudies.length).padStart(2, "0")}
          </span>
          <span className="text-muted-foreground">
            Technical Projects - {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      {/* SECTION 1 — Featured Case Studies */}
      <section className="mt-20" aria-labelledby="featured-case-studies">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="mono-label">Featured</span>
            <span className="hidden h-px max-w-24 flex-1 bg-gradient-to-r from-signal/60 to-transparent sm:block" />
          </div>
          <h2
            id="featured-case-studies"
            className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl"
          >
            Featured Case Studies
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Real business problems, strategic decisions and practical solutions.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <FilterBar
            filters={featuredFilters}
            active={featuredFilter}
            onChange={setFeaturedFilter}
            count={featuredCount}
          />
        </Reveal>

        {visibleCaseStudies.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {visibleCaseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <FeaturedCaseStudyCard caseStudy={c} index={i} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={100}>
            <div className="mt-10 rounded-lg border border-dashed border-border bg-surface/40 px-6 py-12 text-center">
              <p className="mono-label">In preparation</p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {featuredFilter === "All"
                  ? "Featured case studies from strategy, consulting, operations and financial services work are currently being prepared."
                  : `No featured case studies in ${featuredFilter} yet.`}
              </p>
            </div>
          </Reveal>
        )}
      </section>

      {/* SECTION 2 — Technical Projects */}
      <section className="mt-24" aria-labelledby="technical-projects">
        <Reveal>
          <p className="mono-label">Hands-on</p>
          <h2 id="technical-projects" className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Technical Projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Hands-on data, business intelligence and machine-learning work.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <FilterBar
            filters={technicalFilters}
            active={technicalFilter}
            onChange={setTechnicalFilter}
            count={technicalCount}
          />
        </Reveal>

        {visibleProjects.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="card-surface flex h-full flex-col p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="mono-label">{p.category}</span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.problem}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tools.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-sm border border-border bg-surface-strong px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 font-mono text-[11px] text-signal">
                    VIEW CASE STUDY
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={100}>
            <div className="mt-10 rounded-lg border border-dashed border-border bg-surface/40 px-6 py-12 text-center">
              <p className="text-sm text-muted-foreground">
                No technical projects in {technicalFilter} yet.
              </p>
            </div>
          </Reveal>
        )}
      </section>

      {/* Interactive dashboard */}
      <div className="mt-24">
        <Reveal>
          <p className="mono-label">Interactive</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            A dashboard you can actually click
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Built here in the browser on a sample retail dataset - filter by region, channel and
            period and every KPI and chart recalculates live. Same thinking I apply in Power BI and
            Tableau.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10">
            <LiveDashboard />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function FilterBar<T extends string>({
  filters,
  active,
  onChange,
  count,
}: {
  filters: readonly T[];
  active: T;
  onChange: (f: T) => void;
  count: (f: T) => number;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f}
          type="button"
          onClick={() => onChange(f)}
          aria-pressed={active === f}
          className={cn(
            "rounded-sm border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors",
            active === f
              ? "border-signal bg-signal text-primary-foreground"
              : "border-border text-muted-foreground hover:border-signal/50 hover:text-signal",
          )}
        >
          {f}
          <span className="ml-2 opacity-60">{count(f)}</span>
        </button>
      ))}
    </div>
  );
}

function FeaturedCaseStudyCard({ caseStudy: c, index }: { caseStudy: CaseStudy; index: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: c.slug }}
      className="card-surface group relative flex h-full flex-col overflow-hidden p-7 md:p-9"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-signal/70 via-signal/30 to-transparent" />
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {c.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-sm border border-signal/40 bg-signal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-signal"
            >
              {cat}
            </span>
          ))}
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold leading-snug md:text-[1.7rem]">
        {c.title}
      </h3>
      <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{c.context}</p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {c.capabilities.map((cap) => (
          <span
            key={cap}
            className="rounded-sm border border-border bg-surface-strong px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
          >
            {cap}
          </span>
        ))}
      </div>
      <div className="mt-7 flex items-center gap-2 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-widest text-signal">
        VIEW CASE STUDY
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
