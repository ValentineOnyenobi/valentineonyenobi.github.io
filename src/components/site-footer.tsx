import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid h-9 w-9 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="grid h-9 w-9 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Valentine"
            className="grid h-9 w-9 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Valentine Onyenobi, CMgr</span>
          <div className="flex gap-4">
            <Link to="/projects" className="hover:text-signal">
              Projects
            </Link>
            <Link to="/experience" className="hover:text-signal">
              Experience
            </Link>
            <Link to="/contact" className="hover:text-signal">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
