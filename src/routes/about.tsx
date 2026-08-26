import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile, skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Valentine Onyenobi, Business & Data Analyst" },
      {
        name: "description",
        content:
          "Business & Data Analyst, Founder and Consultant working across strategy, data analytics, business intelligence, operations and financial services.",
      },
      { property: "og:title", content: "About — Valentine Onyenobi, Business & Data Analyst" },
      {
        property: "og:description",
        content:
          "Business & Data Analyst, Founder and Consultant working across strategy, data analytics, business intelligence, operations and financial services.",
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
          About Valentine Onyenobi
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Business & Data Analyst · Founder & Consultant
        </p>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-12">
          <Reveal delay={90}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a Business & Data Analyst, Founder and Consultant working across business
                strategy, data analytics, business intelligence, operations and financial services.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My experience spans the UK, Nigeria and the UAE, and my career has developed across
                administration, financial services, operations, project management, strategy,
                consulting and data analytics. That progression has shaped how I approach problems
                today: I combine an understanding of how businesses operate with the ability to work
                directly with data and translate evidence into practical business decisions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am most interested in the space between a business problem and the decision that
                needs to be made.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-surface p-6 md:p-8">
              <p className="mono-label">How I Got Here</p>
              <div className="mt-5 space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  My career did not begin in data analytics.
                </p>
                <p className="leading-relaxed">
                  I started with experience in administration and financial services, including
                  pension account administration, transaction processing, reconciliations and
                  reporting. That early experience gave me a strong foundation in accuracy,
                  documentation, financial processes and working with organisational information.
                </p>
                <p className="leading-relaxed">
                  From there, I moved into operations and project management, where my
                  responsibilities expanded into procurement, vendor management, workforce
                  coordination, project delivery and operational reporting. In one role, digital
                  workflow improvements contributed to an approximately 25% increase in office
                  productivity, while improved vendor and procurement management was associated
                  with an approximately 15% reduction in operating costs.
                </p>
                <p className="leading-relaxed">
                  That experience led me further into business strategy and consulting, where I
                  worked on business development, process improvement, operational performance,
                  workforce initiatives and strategic planning.
                </p>
                <p className="leading-relaxed">
                  Alongside that work, I completed an MBA in Global Business, strengthening the
                  strategic and commercial perspective I bring to business problems.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="card-surface p-6 md:p-8">
              <p className="mono-label">Why Data Became Part of My Work</p>
              <div className="mt-5 space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  The more strategic my work became, the more important it was to understand the
                  evidence behind a decision rather than relying only on experience or assumptions.
                </p>
                <p className="leading-relaxed">
                  That led me deeper into data analytics and business intelligence.
                </p>
                <p className="leading-relaxed">
                  I developed hands-on capability across SQL, Python, Power BI, Tableau, Excel, R,
                  DAX, data modelling, ETL/ELT and machine learning, working across data
                  preparation, transformation, analysis, visualisation and predictive modelling.
                </p>
                <p className="leading-relaxed">
                  My analytical experience includes automating data-preparation workflows,
                  transforming large datasets using SQL, integrating different data sources,
                  building interactive dashboards and using analysis to support business planning
                  and operational decisions.
                </p>
                <p className="leading-relaxed">
                  That changed how I think about my role.
                </p>
                <p className="leading-relaxed">
                  I don't want to produce analysis simply because the data is available. I want to
                  understand what the analysis should help someone decide.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="card-surface p-6 md:p-8">
              <p className="mono-label">Founder Perspective</p>
              <div className="mt-5 space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  My work as a founder has strengthened that perspective further.
                </p>
                <p className="leading-relaxed">
                  With Kajco Finance, I have been developing inclusive digital lending and credit
                  infrastructure, including a retailer credit system built around merchant
                  onboarding, behavioural scoring and credit assessment.
                </p>
                <p className="leading-relaxed">
                  Building around a real financial-services problem requires a different level of
                  thinking.
                </p>
                <p className="leading-relaxed">
                  The questions are not simply:
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal/70" />
                    What data do we have?
                  </li>
                </ul>
                <p className="leading-relaxed">
                  They become:
                </p>
                <ul className="space-y-2 pl-4">
                  {[
                    "What problem are we solving?",
                    "Who is affected by it?",
                    "What information actually matters?",
                    "How should the decision be made?",
                    "What should the process look like?",
                    "What should we measure?",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal/70" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed">
                  That experience has reinforced my preference for practical strategy -
                  understanding the commercial objective first, then determining how data, processes,
                  analysis and technology can contribute to a useful solution.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={210}>
            <div className="card-surface p-6 md:p-8">
              <p className="mono-label">Where I Operate Today</p>
              <div className="mt-5 space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  Today, I work across strategy, analytics and execution.
                </p>
                <p className="leading-relaxed">
                  I can approach a problem from the strategic side, work directly with the
                  underlying data, understand the operational implications and translate the
                  findings into a practical course of action.
                </p>
                <p className="leading-relaxed">
                  My experience across different markets and professional environments has also
                  taught me to adapt the approach to the organisation, rather than forcing every
                  problem into the same framework.
                </p>
                <p className="leading-relaxed">
                  The common thread across my work is simple:
                </p>
                <p className="text-lg font-medium text-foreground">
                  Understand the problem. Work with the evidence. Make the decision better.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap gap-3 border-t border-border pt-10">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-signal/60 hover:text-signal"
              >
                Explore my projects
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Work with me
              </Link>
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
            <Reveal key={g.name} delay={280 + i * 90}>
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
    </div>
  );
}
