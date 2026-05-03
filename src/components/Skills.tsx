import Section from "./Section";

const GROUPS = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Dart", "C++", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Framer Motion",
    ],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Provider", "Bloc", "Firebase Cloud Messaging"],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "Firestore",
      "SQLite",
      "REST APIs",
      "Edge Functions (Deno)",
    ],
  },
  {
    title: "Integrations",
    items: ["Stripe", "Google Maps API", "Google ML Kit", "Sentry", "PostHog"],
  },
  {
    title: "Tooling & Quality",
    items: [
      "Git",
      "GitHub Actions",
      "Vercel",
      "Vitest",
      "Playwright",
      "ESLint",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      number="03"
      title="Skills & toolbox"
      subtitle="Things I've shipped real features with — not just touched."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GROUPS.map((g) => (
          <div
            key={g.title}
            className="rounded-lg border border-line bg-bg-elevated p-5"
          >
            <h3 className="text-sm font-medium text-ink mb-3">{g.title}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-bg border border-line text-ink-muted"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
