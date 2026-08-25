import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { certifications, profile, skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Valentine Onyenobi, Business & Data Analyst" },
      {
        name: "description",
        content:
          "Valentine Onyenobi is a London-based Business & Data Analyst with experience across strategy, consulting, analytics, business intelligence and operations in the UK, UAE and Nigeria.",
      },
      { property: "og:title", content: "About — Valentine Onyenobi, Business & Data Analyst" },
      {
        property: "og:description",
        content: "Analytics, consulting and fintech — the background behind the work.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <p className="mono-label">About</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Analytics is the easy half. Getting a decision changed is the job.
        </h1>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6">
          {profile.summary.map((para, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="text-lg leading-relaxed text-muted-foreground">{para}</p>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div className="card-surface mt-4 p-6">
              <p className="mono-label">Certifications</p>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="space-y-5">
          <Reveal delay={120}>
            <div className="card-surface p-6">
              <p className="mono-label">Profile</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-[11px] text-muted-foreground">Based in</dt>
                  <dd className="mt-1">{profile.location}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] text-muted-foreground">Focus</dt>
                  <dd className="mt-1">
                    Data analysis, business intelligence, process improvement
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] text-muted-foreground">Delivered across</dt>
                  <dd className="mt-1">United Kingdom · United Arab Emirates · Nigeria</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] text-muted-foreground">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${profile.email}`} className="text-signal hover:underline">
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {skillGroups.slice(0, 2).map((g, i) => (
            <Reveal key={g.name} delay={200 + i * 90}>
              <div className="card-surface p-6">
                <p className="mono-label">{g.name}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-border bg-surface-strong px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={120}>
        <div className="mt-16 flex flex-wrap gap-3 border-t border-border pt-10">
          <Link
            to="/experience"
            className="group inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-signal/60 hover:text-signal"
          >
            Full experience
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            See the projects
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
