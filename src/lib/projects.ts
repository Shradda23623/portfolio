export type Project = {
  slug: string;
  name: string;
  tagline: string;
  date: string;
  status: "live" | "active";
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "krishisetu",
    name: "KrishiSetu",
    tagline: "Farm-to-table marketplace connecting Indian farmers directly with customers",
    date: "April 2026",
    status: "live",
    highlights: [
      "Two-role architecture (Farmer / Customer) with separate dashboards, role-based product CRUD, persistent cart, and order tracking.",
      "Real Stripe Embedded Checkout backed by Supabase Edge Functions (Deno) with webhook-driven order confirmation.",
      "PostgreSQL Row-Level Security on every table; Google Maps with haversine-distance lookup for nearby-farmer discovery.",
      "Multi-language i18n, dark mode, Vitest + Playwright tests, and GitHub Actions CI.",
    ],
    tech: ["React 18", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Supabase", "Stripe", "Google Maps API"],
    liveUrl: "https://krishisetu-phi.vercel.app",
    githubUrl: "https://github.com/Shradda23623/krishisetu",
    image: "/projects/krishisetu.jpg",
  },
  {
    slug: "veraleap",
    name: "VeraLeap",
    tagline: "Rental verification marketplace with verified listings, brokers, and reviews",
    date: "April 2026",
    status: "live",
    highlights: [
      "Four role-based dashboards (Tenant, Owner, Broker, Admin) covering listings, visit scheduling, favorites, reviews, and admin verification.",
      "Security-first architecture: Postgres Row-Level Security on every table, mandatory TOTP-based 2FA for brokers, has_role() SQL gate for admin actions.",
      "Supabase Realtime tenant–broker chat, Sentry for error tracking, PostHog for analytics.",
      "Lighthouse 95+ with Vitest + Playwright tests in GitHub Actions CI.",
    ],
    tech: ["React 18", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Supabase", "TanStack Query", "Zod"],
    liveUrl: "https://veraleap.vercel.app",
    githubUrl: "https://github.com/Shradda23623/veraleap",
    image: "/projects/veraleap.png",
  },
  {
    slug: "nutrify",
    name: "Nutrify",
    tagline: "Cross-platform nutrition, fitness, and wellness tracker",
    date: "April 2026",
    status: "live",
    highlights: [
      "Single Flutter codebase running on Android, iOS, and Web, covering food tracking, BMI/TDEE, sleep, fasting, steps, and workouts.",
      "Dual-pipeline food scanner combining mobile_scanner (barcodes) with Google ML Kit Text Recognition (nutrition-label OCR) over a shared camera feed.",
      "Firebase across 5 surfaces: Auth, Firestore, Storage, Cloud Messaging, security rules.",
      "Offline-first sync (shared_preferences ↔ Firestore), BLE wearable integration with reconnect tolerance, timezone-aware local notifications.",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Google ML Kit", "mobile_scanner", "flutter_blue_plus", "Provider", "fl_chart"],
    liveUrl: "https://nutrify-52ebf.web.app",
    githubUrl: "https://github.com/Shradda23623/Nutrify",
    image: "/projects/nutrify.jpg",
  },
];
