import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/portfolio";
import { socialMeta } from "@/lib/og";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} - Valentine Onyenobi`;
    return {
      meta: [
        { title },
        { name: "description", content: project.problem },
        { property: "og:title", content: title },
        { property: "og:description", content: project.problem },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...socialMeta(`/projects/${project.slug}`),
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-28 text-center">
      <h1 className="text-3xl font-bold">Project not found</h1>
      <p className="mt-3 text-muted-foreground">That case study doesn&apos;t exist.</p>
      <Link
        to="/projects"
        className="mt-8 inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground"
      >
        All projects
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length]!;

  const sections = [
    { label: "The problem", body: project.problem },
    { label: "Approach", body: project.approach },
    { label: "Outcome", body: project.outcome },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-signal"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All projects
      </Link>

      <Reveal>
        <p className="mono-label mt-10">{project.category}</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{project.title}</h1>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          <div className="bg-surface p-5">
            <p className="mono-label">{project.metric.label}</p>
            <p className="mt-2 font-display text-lg font-semibold text-signal">
              {project.metric.value}
            </p>
          </div>
          <div className="bg-surface p-5">
            <p className="mono-label">Stack</p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-border bg-surface-strong px-2 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 space-y-12">
        {sections.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <section>
              <p className="mono-label">
                {String(i + 1).padStart(2, "0")} - {s.label}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group inline-flex flex-col gap-1"
          >
            <span className="mono-label">Next project</span>
            <span className="inline-flex items-center gap-2 font-display text-lg font-semibold transition-colors group-hover:text-signal">
              {next.title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-signal/60 hover:text-signal"
          >
            Discuss a project
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
