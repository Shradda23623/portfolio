import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";

const LINKS = [
  {
    label: "Email",
    value: "shradda141@gmail.com",
    href: "mailto:shradda141@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Shradda23623",
    href: "https://github.com/Shradda23623",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bharti-shradda",
    href: "https://linkedin.com/in/bharti-shradda",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      number="04"
      title="Let's talk"
      subtitle="If you're hiring full-stack or frontend developers — or just want to chat about a side project — my inbox is open."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {LINKS.map((l) => {
          const Icon = l.icon;
          return (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group rounded-lg border border-line bg-bg-elevated p-5 hover:border-accent transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className="size-5 text-ink-muted group-hover:text-accent transition-colors" />
                <ArrowUpRight className="size-4 text-ink-dim group-hover:text-ink transition-colors" />
              </div>
              <div className="text-xs text-ink-dim uppercase tracking-wider mb-1">
                {l.label}
              </div>
              <div className="text-sm text-ink font-mono break-all">
                {l.value}
              </div>
            </a>
          );
        })}
      </div>

      <a
        href="/Shradda_Bharti_CV.pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-line text-sm text-ink hover:bg-bg-elevated transition-colors"
      >
        Download CV (PDF)
      </a>
    </Section>
  );
}
