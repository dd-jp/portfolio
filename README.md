# Personal Portfolio

Personal portfolio for **Deepak David — Lead UI Engineer & Web Architect**. A pure
**React + TypeScript** single-page app built with Vite, featuring a bold, motion-rich design,
smooth-scroll navigation, dark/light theming, and content sourced from the latest CV. Deployed
as a static site on [Netlify](https://www.netlify.com).

## 🚀 Features

- Single-page smooth-scroll layout with sticky nav + scroll-spy active-section highlighting
- Bold, modern design: animated gradient hero, Framer Motion scroll reveals, large display type
- Dark / light theme toggle (system default + `localStorage`, no flash of wrong theme)
- Sections: About + stats, Experience timeline, Selected Work (architectural & AI), Skills, Education, Contact
- Résumé download + floating WhatsApp contact button
- Accessible: keyboard focus rings, reduced-motion support, semantic landmarks
- Optional Google Analytics 4 (see below)

## 🛠️ Tech Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) · [lucide-react](https://lucide.dev)
- Yarn 4 (node-modules linker)

## 📦 Scripts

```bash
yarn install     # install dependencies
yarn dev         # start the dev server (http://localhost:5173)
yarn build       # typecheck + production build to dist/
yarn preview     # preview the production build locally
yarn typecheck   # run tsc --noEmit
```

## 📊 Analytics (optional, free)

Google Analytics 4 is wired in but **dormant until you provide an ID** — dev builds never track.

1. Create a free GA4 property at <https://analytics.google.com> and copy the `G-XXXXXXXXXX` ID.
2. Set `VITE_GA_ID` locally (copy `.env.example` → `.env`) and in your Netlify site's environment variables.
3. It only loads in **production** builds when the ID is present.

Prefer a cookieless, consent-free alternative? [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/)
is a drop-in `<script>` tag — swap it into `src/lib/analytics.ts`.

## 🏗️ Project Structure

```text
/
├── index.html                # Vite entry (meta/OG tags, fonts, no-flash theme script)
├── netlify.toml              # build + SPA redirect + asset caching
├── tailwind.config.ts        # brand palette, fonts, keyframes
├── public/                   # profile-image.jpg, Deepak_David_Resume.pdf, favicon.svg
└── src/
    ├── main.tsx / App.tsx     # root + section composition
    ├── index.css              # Tailwind layers + global styles
    ├── data/                  # all content as typed modules (single source of truth)
    │   ├── site.ts  experience.ts  skills.ts  projects.ts  education.ts  stats.ts
    ├── hooks/                 # useTheme, useScrollSpy
    ├── lib/analytics.ts       # GA4 loader
    └── components/            # Navbar, Hero, About, Experience, Projects, Skills,
                               # Education, Contact, Footer, ThemeToggle, WhatsAppButton, ui/
```

To update content, edit the typed modules in `src/data/` — no component changes needed.
