import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-line bg-bg-elevated text-xs text-ink-muted">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          Available for SDE / Frontend roles, 2026
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          Hi, I'm Shradda <span className="text-accent">—</span>
          <br />
          full-stack developer
          <br />
          shipping React, Supabase
          <br />
          and Flutter apps.
        </h1>
        <p className="mt-8 max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed">
          MCA candidate at Lovely Professional University. I build
          <span className="text-ink"> production-grade web and mobile apps</span> —
          marketplaces with real Stripe payments, rental platforms with
          realtime chat and 2FA, and cross-platform health trackers with
          ML-Kit OCR. I care about clean architecture, security, and the
          last 10% of polish.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-bg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            See my work
            <ArrowDown className="size-4" />
          </a>
          <a
            href="/Shradda_Bharti_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-line text-sm text-ink hover:bg-bg-elevated transition-colors"
          >
            Download CV
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" /> Punjab, India
          </span>
          <a
            href="mailto:shradda141@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
          >
            <Mail className="size-3.5" /> shradda141@gmail.com
          </a>
          <a
            href="https://github.com/Shradda23623"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
          >
            <Github className="size-3.5" /> Shradda23623
          </a>
          <a
            href="https://linkedin.com/in/bharti-shradda"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
          >
            <Linkedin className="size-3.5" /> bharti-shradda
          </a>
        </div>
      </div>
    </section>
  );
}
