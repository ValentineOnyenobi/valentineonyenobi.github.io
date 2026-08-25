import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { certifications, education, experience } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Education — Valentine Onyenobi, Business & Data Analyst" },
      {
        name: "description",
        content:
          "Career timeline of Valentine Onyenobi: founder at Kajco Finance, data analyst trainee in London, managing consultant and project manager across the UAE and Nigeria.",
      },
      {
        property: "og:title",
        content: "Experience & Education — Valentine Onyenobi, Business & Data Analyst",
      },
      {
        property: "og:description",
        content: "A decade of consulting, project delivery and analytics across three regions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <p className="mono-label">Timeline</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Experience &amp; education
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Consulting, project delivery and fintech across the UK, UAE and Nigeria - the operational
          grounding behind the analytics work.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-14 lg:grid-cols-[1.7fr_1fr]">
        <div className="relative border-l border-border pl-8">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 70}>
              <article className="relative pb-12 last:pb-0">
                <span
                  className={`absolute -left-[2.28rem] top-1.5 h-3 w-3 rounded-full border-2 ${
                    job.current
                      ? "animate-pulse border-signal bg-signal"
                      : "border-border bg-background"
                  }`}
                />
                <p className="font-mono text-[11px] uppercase tracking-widest text-signal-dim">
                  {job.period}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold">{job.role}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {job.company} · {job.place}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal/70" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="space-y-5">
          <Reveal>
            <div className="card-surface p-6">
              <p className="mono-label">Education</p>
              <div className="mt-5 space-y-6">
                {education.map((e) => (
                  <div key={e.qualification}>
                    <p className="font-display text-base font-semibold">{e.qualification}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                    <p className="mt-1 font-mono text-[11px] text-signal-dim">{e.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-surface p-6">
              <p className="mono-label">Certifications</p>
              <ul className="mt-5 space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}
