# Anand Alagappan — Portfolio Website

> Production-grade Next.js 16 (App Router) portfolio for a Senior Mobile Systems Engineer.
> Dark VSCode-blue aesthetic · Framer Motion · TailwindCSS v4 · shadcn/ui · Static export (GitHub Pages / Vercel)

---

## Quick Start

```bash
cd portfolio
npm install
npm run dev      # http://localhost:3000
npm run build    # production static export → out/
```

---

## What To Update (Developer Guide)

**All personal content lives in `lib/data/`. Zero hardcoded strings in components.**

### `lib/data/profile.ts`
Your name, role, tagline, bio, email, phone, location, avatar URL, resume link, education, mission, vision.

| Field | What to update |
|---|---|
| `avatarUrl` | Replace `/images/profile/avatar-placeholder.svg` with your real photo path |
| `resumeUrl` | Replace `/resume.pdf` with your actual resume file |
| `bio[]` | Array of bio paragraph strings |
| `mission` | Your mission statement |
| `vision` | Your vision statement |

### `lib/data/social.ts`
All social profile URLs. Update `url` fields for GitHub, LinkedIn, Twitter, Medium, StackOverflow, Kaggle, LeetCode, Play Store.

### `lib/data/projects.ts`
Project cards shown in the Featured Projects section.

| Field | Notes |
|---|---|
| `title` | Project name |
| `description` | 1-2 sentence project description |
| `tech[]` | Tech stack badges |
| `playStoreUrl` | Link to Play Store listing (or `null`) |
| `githubUrl` | GitHub repo link (or `null`) |
| `imageUrl` | Mockup image path under `public/images/projects/` |
| `featured` | Set `true` to show in featured grid |
| `metrics[]` | Key stats (downloads, users, etc.) |

### `lib/data/techStack.ts`
7 tech categories. Add/remove skills per category.

### `lib/data/experience.ts`
Work history timeline. Each entry has `company`, `role`, `period`, `location`, `bullets[]`, `projects[]`.

### `lib/data/stats.ts`
Animated counter stats in the About section. Update `value`, `suffix`, `label` for each stat.

### `lib/data/impact.ts`
Engineering impact achievements. Each item: `metric`, `description`, `icon`, `color`.

### `lib/data/domains.ts`
6 engineering domain cards. Update `title`, `description`, `bullets[]`, `accentColor` per domain.

### `lib/data/aiTools.ts`
AI tools section. Each tool: `name`, `description`, `useCases[]`, `icon` (lucide name), `color`.

### `lib/data/breadFinancial.ts`
Current employer details, metrics, product links. Update when you change jobs.

---

## How To Add Your Photo

1. Place photo at `public/images/profile/avatar.jpg`
2. Set `avatarUrl: '/images/profile/avatar.jpg'` in `lib/data/profile.ts`
3. Update the `AvatarSVG` component in `HeroSection.tsx` to use `next/image` if preferred.

## How To Add Your Resume PDF

1. Place resume at `public/resume.pdf`
2. Confirm `resumeUrl: '/resume.pdf'` in `lib/data/profile.ts`
3. Download Resume buttons link to it automatically.

---

## Case Study Pages

| Route | File |
|---|---|
| `/case-studies/vanigam` | `app/case-studies/vanigam/page.tsx` |
| `/case-studies/retailmart` | `app/case-studies/retailmart/page.tsx` |
| `/case-studies/lendwise` | `app/case-studies/lendwise/page.tsx` |
| `/case-studies/bread-financial` | `app/case-studies/bread-financial/page.tsx` |

To add a new case study: create `app/case-studies/your-project/page.tsx`, copy structure from existing, add `caseStudyUrl` in `lib/data/projects.ts`.

---

## Design System

Full design system in `app/globals.css` (TailwindCSS v4 CSS-first config).

### CSS Utility Classes

| Class | Usage |
|---|---|
| `glass-card` | Frosted glass card |
| `gradient-text` | Animated blue→indigo gradient text |
| `glow-text` | Blue text shadow glow |
| `mono-text` | JetBrains Mono font |
| `section-padding` | Responsive section padding |

### Colors

- Background: `#0a0e1a` (deep navy)
- Primary: `#3b82f6` (VSCode blue)
- Secondary: `#6366f1` (indigo)
- Text: `#f1f5f9` / `#94a3b8`

---

## Deployment

### Vercel (Recommended)
Connect repo to Vercel — auto-detects Next.js. Remove `output: 'export'` from `next.config.ts` for full SSR.

### GitHub Pages
```bash
npm run build
# Deploy out/ directory to GitHub Pages
```

---

## Tech Stack

| Package | Version |
|---|---|
| Next.js | 16.2.6 |
| React | 19 |
| TypeScript | 5 |
| TailwindCSS | v4 |
| Framer Motion | 12.x |
| lucide-react | 1.16.0 |

> **Note on icons**: lucide-react v1.x removed `Github`, `Linkedin`, `Twitter`.
> Use `GitHubIcon`, `LinkedInIcon` etc. from `components/shared/SocialIcons.tsx`.
> Use `X` from lucide-react for the Twitter/X icon.

---

## TODOs

- [ ] Replace `public/resume.pdf` with your real resume
- [ ] Add real photo to `public/images/profile/`
- [ ] Add project screenshots to `public/images/projects/`
- [ ] Update Play Store URL in `lib/data/social.ts`
- [ ] Update domain in `public/sitemap.xml`
