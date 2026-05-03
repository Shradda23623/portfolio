import { ArrowUpRight, Github } from "lucide-react";
import Section from "./Section";
import { PROJECTS } from "../lib/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      number="02"
      title="Selected projects"
      subtitle="Three production-grade apps shipped in 2026, each with a live demo and full source on GitHub."
    >
      <div className="space-y-16">
        {PROJECTS.map((p, i) => (
          <article key={p.slug} className="group">
            <div className="grid md:grid-cols-5 gap-8 md:gap-10">
              {/* Image */}
              <a
                href={p.liveUrl ?? p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`relative md:col-span-3 rounded-lg overflow-hidden border border-line bg-bg-elevated aspect-[16/10] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // graceful fallback if screenshot is missing
                    const t = e.currentTarget;
                    t.style.display = "none";
                    const sib = t.nextElementSibling as HTMLElement | null;
                    if (sib) sib.style.display = "flex";
                  }}
                />
                <div
                  style={{ display: "none" }}
                  className="absolute inset-0 items-center justify-center text-ink-dim font-mono text-sm"
                >
                  {p.name.toLowerCase()}.png
                </div>
                <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-bg/80 backdrop-blur text-[11px] text-ink-muted border border-line">
                  <span className="size-1.5 rounded-full bg-accent" />
                  {p.status}
                </div>
              </a>

              {/* Content */}
              <div className="md:col-span-2 flex flex-col">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs text-ink-dim">
                    {p.date}
                  </span>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed mb-4">
                  {p.tagline}
                </p>
                <ul className="space-y-2 text-sm text-ink-muted mb-5">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-accent mt-1.5 size-1 rounded-full bg-accent shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-bg-elevated border border-line text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-3">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent transition-colors"
                    >
                      Live demo <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    <Github className="size-3.5" /> Source
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
