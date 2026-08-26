import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-data.jpg";
import { Reveal } from "@/components/reveal";
import { socialMeta } from "@/lib/og";
import {
  caseStudies,
  howIWork,
  profile,
  projects,
  regions,
  results,
  services,
  skillGroups,
  strengths,
} from "@/data/portfolio";

const featuredStudy = caseStudies.find((c) => c.slug === "kajco-credit-trust-infrastructure")!;
const previewProjects = ["marketing-analysis", "supply-chain-dashboard"].map(
  (slug) => projects.find((p) => p.slug === slug)!,
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valentine Onyenobi — Business & Data Analyst" },
      {
        name: "description",
        content:
          "Business strategy, data analytics, business intelligence and operations. Valentine Onyenobi helps organisations understand performance and make better decisions across the UK, Nigeria and the UAE.",
      },
      { property: "og:title", content: "Valentine Onyenobi — Business & Data Analyst" },
      {
        property: "og:description",
        content:
          "Strategy · Data · Business Intelligence · Operations. Combining strategic thinking with hands-on analytical capability.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialMeta("/"),
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1088}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="grid-canvas pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <Reveal>
            <p className="mono-label flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
              {profile.disciplines}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Valentine
              <br />
              <span className="text-signal-gradient">Onyenobi</span>
            </h1>
            <p className="mt-5 font-display text-xl font-medium text-foreground/90 sm:text-2xl">
              Business &amp; Data Analyst
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {profile.tagline} My experience spans the UK, Nigeria and the UAE. This applies
              whether I&apos;m joining a team, advising on a specific problem, or supporting a
              project.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-signal/60 hover:text-signal"
              >
                Work with me
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-signal/60 hover:text-signal"
              >
                <Linkedin className="h-3.5 w-3.5" />
                Connect on LinkedIn
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="grid h-11 w-11 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-signal/60 hover:text-signal"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Reveal>
            <p className="mono-label">About</p>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              <Reveal delay={80}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I&apos;m a Business &amp; Data Analyst, Founder and Consultant working across
                  strategy, data analytics, business intelligence, operations and financial services.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I combine business understanding with hands-on analytical capability to help
                  organisations solve complex problems, improve performance and make better
                  decisions.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal"
                >
                  Read my story
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="card-surface p-6">
                <p className="mono-label">The sequence</p>
                <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
                  {["Understand", "Analyse", "Strategise", "Execute"].map((step, i, arr) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-signal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                      {i < arr.length - 1 && (
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="mono-label">What I do</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Five places I add value
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="card-surface grid gap-6 p-6 md:grid-cols-[auto_1.4fr_1fr] md:p-8">
                <span className="font-mono text-sm text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.points.map((pt) => (
                      <span
                        key={pt}
                        className="rounded-sm border border-border bg-surface-strong px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                  <p className="mono-label">In practice</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.practice}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Reveal>
            <p className="mono-label">International experience</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              Three markets, one approach
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {regions.map((r, i) => (
              <Reveal key={r.country} delay={i * 90}>
                <div className="card-surface h-full p-6">
                  <span className="text-2xl" aria-hidden="true">
                    {r.flag}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{r.country}</h3>
                  <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
                    {r.focus}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 max-w-3xl text-muted-foreground">
              Different environments, different business cultures and stakeholder expectations -
              with a consistent focus on structured problem-solving and measurable outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="mono-label">Selected results</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">What it has produced</h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {results.map((r, i) => (
            <Reveal key={r.label} delay={i * 70} className="bg-surface">
              <div className="h-full p-6">
                <p className="font-display text-2xl font-bold text-signal">{r.value}</p>
                <p className="mt-3 text-sm font-medium">{r.label}</p>
                <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  {r.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Reveal>
            <p className="mono-label">How I work</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              A repeatable sequence, not a template
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {howIWork.map((s, i) => (
              <Reveal key={s.step} delay={i * 60} className="bg-surface">
                <li className="h-full p-6">
                  <span className="font-mono text-[11px] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{s.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="mono-label">Core strengths</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="card-surface h-full p-6">
                <h3 className="font-display text-lg font-semibold text-signal">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-16">
            <p className="mono-label">Toolkit</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.name} className="card-surface p-6">
                  <h3 className="font-display text-base font-semibold">{group.name}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-sm border border-border bg-surface-strong px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mono-label">Featured Work</p>
                <h2 className="mt-4 max-w-xl text-3xl font-bold sm:text-4xl">
                  A snapshot of the business problems I solve and the analytical work behind them
                </h2>
              </div>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal"
              >
                View All {caseStudies.length + projects.length} Projects
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          {/* Featured case study — high emphasis */}
          <Reveal delay={80}>
            <Link
              to="/projects/$slug"
              params={{ slug: featuredStudy.slug }}
              className="card-surface group relative mt-10 block overflow-hidden p-7 md:p-10"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-signal/70 via-signal/30 to-transparent" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="mono-label">Featured Case Study</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Financial Services", "Venture & Systems"].map((cat) => (
                    <span
                      key={cat}
                      className="rounded-sm border border-signal/40 bg-signal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-signal"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-snug md:text-3xl">
                {featuredStudy.title}
              </h3>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                Developing a structured decision-making layer that connects commercial behaviour,
                trust intelligence and financial infrastructure for emerging-market commerce.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-signal">
                View Case Study
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </Reveal>

          {/* Two compact technical projects */}
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {previewProjects.map((p, i) => (
              <Reveal key={p.slug} delay={120 + i * 80}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="card-surface flex h-full flex-col p-6"
                >
                  <span className="mono-label">{p.category}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.problem}
                  </p>
                  <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 font-mono text-[11px] text-signal">
                    VIEW CASE STUDY
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="scanline mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <Reveal>
            <p className="mono-label">Get in touch</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
              Open to roles and engagements in strategy, data, BI or operations
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              As a hire, a consultant, or a partner on a specific problem.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-signal px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Work with me
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-7 py-3.5 font-mono text-xs uppercase tracking-widest transition-colors hover:border-signal/60 hover:text-signal"
              >
                <Linkedin className="h-3.5 w-3.5" />
                Connect on LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
