import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/portfolio";
import { socialMeta } from "@/lib/og";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Hire Valentine Onyenobi, Business & Data Analyst" },
      {
        name: "description",
        content:
          "Get in touch with Valentine Onyenobi for Business & Data Analyst roles, BI dashboard builds or consulting engagements. Based in London, working globally.",
      },

      { property: "og:title", content: "Contact - Valentine Onyenobi, Business & Data Analyst" },
      {
        property: "og:description",
        content: "Data analysis, BI dashboards and consulting. Let's talk about your data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialMeta("/contact"),
    ],
  }),
  component: Contact,
});

const projectTypes = ["Full-time role", "Dashboard build", "Data analysis", "Consulting"];

function Contact() {
  const [type, setType] = useState(projectTypes[0]!);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Record<string, string> = {};
    if (name.length < 2) next["name"] = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next["email"] = "Enter a valid email address.";
    if (message.length < 15) next["message"] = "Give me a little more detail (15+ characters).";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    data.set("_subject", `${type} enquiry from ${name}`);
    data.set("enquiryType", type);

    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mgaekeer", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSent(true);
        form.reset();
        setType(projectTypes[0]!);
        toast.success("Message sent", {
          description: "Thanks - I'll get back to you shortly.",
        });
      } else {
        toast.error("Something went wrong", {
          description: `Please email me directly at ${profile.email}.`,
        });
      }
    } catch {
      toast.error("Something went wrong", {
        description: `Please email me directly at ${profile.email}.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <p className="mono-label">Contact</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Tell me what decision you&apos;re trying to make
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Open to data analyst roles and consulting work. Send a few lines about the data or the
          problem and I&apos;ll come back with how I&apos;d approach it.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal delay={80}>
          <form onSubmit={onSubmit} noValidate className="card-surface p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors["name"]}>
                <input
                  name="name"
                  id="name"
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                />
              </Field>
              <Field label="Email" error={errors["email"]}>
                <input
                  name="email"
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                />
              </Field>
            </div>

            <fieldset className="mt-6">
              <legend className="mono-label">Enquiry type</legend>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {projectTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    aria-pressed={type === t}
                    className={`rounded-sm border px-3 py-2 font-mono text-[11px] transition-colors ${
                      type === t
                        ? "border-signal bg-signal text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-signal/50 hover:text-signal"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-6">
              <Field label="Message" error={errors["message"]}>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="What data do you have, and what are you trying to decide?"
                  className="w-full resize-y rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-3.5 w-3.5" />
              {submitting ? "Sending..." : "Send message"}
            </button>

            {sent && (
              <p className="mt-4 font-mono text-[11px] text-signal">
                Message sent - I&apos;ll get back to you shortly.
              </p>
            )}
          </form>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={140}>
            <div className="card-surface p-6">
              <p className="mono-label">Direct</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-signal" />
                  <a href={`mailto:${profile.email}`} className="hover:text-signal">
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-signal" />
                  {profile.location}
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 shrink-0 text-signal" />
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-signal"
                  >
                    /in/valentineonyenobi
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Github className="h-4 w-4 shrink-0 text-signal" />
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-signal"
                  >
                    ValentineOnyenobi
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card-surface p-6">
              <p className="mono-label">What I take on</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                I take on strategy & consulting, data & BI, ML, operations, and fintech
                engagements - pick the closest match above.
              </p>

            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={label.toLowerCase()} className="mono-label block">
        {label}
      </label>
      <div className="mt-2.5">{children}</div>
      {error && <p className="mt-2 font-mono text-[11px] text-destructive">{error}</p>}
    </div>
  );
}
