import Section from "./Section";

export default function About() {
  return (
    <Section id="about" number="01" title="About">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-ink-muted leading-relaxed">
          <p>
            I'm a Masters of Computer Applications candidate at Lovely
            Professional University, with a Bachelor of Computer Applications
            from CT Group of Institutions. I work primarily in the React /
            TypeScript / Supabase ecosystem on the web, and Flutter / Firebase
            for mobile.
          </p>
          <p>
            Most of my time goes into shipping <span className="text-ink">end-to-end
            features</span>: schema design, RLS policies, payment flows, real-time
            messaging, BLE integrations, scanner pipelines — the full stack, not
            just the surface. I'm interested in the parts that are easy to skip and
            hard to recover from later: auth, security, error handling, and
            offline-first sync.
          </p>
          <p>
            Outside of building, I'm reading more about distributed systems
            and trying to publish a short technical writeup once a month.
          </p>
        </div>
        <aside className="space-y-6 text-sm">
          <div>
            <div className="text-ink-dim text-xs uppercase tracking-wider mb-2">
              Currently
            </div>
            <p className="text-ink">MCA, final year · Lovely Professional University</p>
          </div>
          <div>
            <div className="text-ink-dim text-xs uppercase tracking-wider mb-2">
              Open to
            </div>
            <p className="text-ink">SDE / Frontend / Full-stack roles · 2026</p>
          </div>
          <div>
            <div className="text-ink-dim text-xs uppercase tracking-wider mb-2">
              Based in
            </div>
            <p className="text-ink">Punjab, India · Remote-friendly</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
