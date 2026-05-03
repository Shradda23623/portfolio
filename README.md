# Shradda Bharti — Portfolio

Single-page portfolio site built with React 18, TypeScript, Vite, and Tailwind CSS. Minimal aesthetic with dark mode default and a light-mode toggle.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # to preview the production build
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo (e.g. `shradda23623/portfolio`).
2. Go to vercel.com → **Import Project** → pick the repo.
3. Vercel auto-detects Vite. Click **Deploy**. That's it — no env vars needed.
4. (Optional) Add a custom domain in Vercel → Project → Settings → Domains.

## Where to edit content

| What | File |
|---|---|
| Hero name, tagline, intro paragraph, buttons | `src/components/Hero.tsx` |
| About paragraphs and side panel | `src/components/About.tsx` |
| Project cards (name, bullets, tech, links) | `src/lib/projects.ts` |
| Skill groups | `src/components/Skills.tsx` |
| Contact links | `src/components/Contact.tsx` |
| Theme colors | `tailwind.config.js` |

To swap project screenshots, drop new images into `public/projects/` and update the `image` field in `src/lib/projects.ts`.

To replace the downloadable CV, overwrite `public/Shradda_Bharti_CV.pdf`.

## Stack

- **React 18** + **TypeScript** for the UI
- **Vite** for dev server + build
- **Tailwind CSS** for styling (dark mode via class strategy)
- **lucide-react** for icons
- Deployed on **Vercel**

No SSR, no router, no state management — it's a single static page on purpose. Loads in under 100ms.
