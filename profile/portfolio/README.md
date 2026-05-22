# Anand Alagappan — Portfolio Website

> **Senior Mobile Systems Engineer** • Flutter • Android • Fintech • Platform Engineering

A production-grade, premium developer portfolio built with **Next.js 15**, **TypeScript**, **TailwindCSS v4**, and **Framer Motion**.

---

## 🚀 Quick Start

```bash
# Navigate into the portfolio folder
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── avatar.png              ← Your 3D avatar (replace with your asset)
│   ├── resume.pdf              ← ADD THIS: your resume
│   └── og-image.png            ← ADD THIS: OpenGraph preview image
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout, SEO metadata, fonts
│   │   ├── page.tsx            ← Main page, assembles all sections
│   │   ├── globals.css         ← Design system: tokens, animations, glassmorphism
│   │   ├── sitemap.ts          ← Auto-generated sitemap.xml
│   │   ├── robots.ts           ← robots.txt config
│   │   └── case-studies/
│   │       └── [slug]/page.tsx ← Dynamic case study pages
│   │
│   ├── components/
│   │   ├── Navbar.tsx          ← Sticky navbar, mobile menu, LinkedIn badge
│   │   ├── Footer.tsx          ← Footer with social icons
│   │   └── sections/
│   │       ├── HeroSection.tsx         ← 3D avatar, typing effect, orbital rings
│   │       ├── AboutSection.tsx        ← About + animated stats
│   │       ├── PhilosophySection.tsx   ← Engineering philosophy cards
│   │       ├── TechStackSection.tsx    ← Filterable tech grid
│   │       ├── CurrentWorkSection.tsx  ← Bread Financial showcase
│   │       ├── ImpactSection.tsx       ← Engineering achievements
│   │       ├── DomainsSection.tsx      ← Expertise domains
│   │       ├── ProjectsSection.tsx     ← Projects + case study links
│   │       ├── AISection.tsx           ← AI workflow showcase
│   │       ├── ExperienceSection.tsx   ← Career timeline
│   │       └── ContactSection.tsx      ← Contact + LinkedIn highlight
│   │   └── case-studies/
│   │       ├── VanigamCaseStudy.tsx
│   │       ├── RetailMartCaseStudy.tsx
│   │       └── BreadCaseStudy.tsx
│   │
│   └── lib/
│       ├── constants.ts        ← ALL content data (projects, experience, etc.)
│       └── utils.ts            ← cn() Tailwind merge utility
│
├── next.config.ts              ← Image domains, performance config
├── vercel.json                 ← Vercel deployment config
├── tsconfig.json               ← TypeScript config
└── package.json
```

---

## 🎨 Design System

The entire design is driven by CSS custom properties in `globals.css`.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg-base` | `#030712` | Page background |
| `--bg-surface` | `#050d1a` | Section backgrounds |
| `--blue-400` | `#60a5fa` | Primary accent |
| `--blue-500` | `#3b82f6` | Borders, glows |
| `--cyan-400` | `#22d3ee` | Gradient complement |
| `--text-primary` | `#f0f6ff` | Headings |
| `--text-secondary` | `#94a3b8` | Body text |

### Key CSS Classes

```css
.glass          /* Glassmorphism base */
.glass-hover    /* Hover animation */
.glass-card     /* Premium card variant */
.gradient-border /* Animated gradient border */
.card-shimmer   /* Shimmer on hover */
.linkedin-card  /* LinkedIn special styling */
.hero-cta-primary   /* Blue gradient CTA button */
.hero-cta-secondary /* Secondary ghost button */
.section-label  /* Mono uppercase section marker */
.tag            /* Tech tag badge */
.metric-card    /* Stats/metric card */
.gradient-text  /* Blue→cyan→purple gradient text */
```

---

## ✏️ How to Customize Content

**All content lives in one file:** `src/lib/constants.ts`

### Update Profile Info
```ts
// src/lib/constants.ts
export const PROFILE = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your tagline",
  // ...
};
```

### Add/Edit Projects
```ts
export const PROJECTS = [
  {
    id: "your-project",
    title: "Project Title",
    subtitle: "LABEL",
    description: "...",
    tags: ["Flutter", "Kotlin"],
    playStoreUrl: "https://play.google.com/...",
    githubUrl: "https://github.com/...",
    caseStudySlug: "your-project",  // links to /case-studies/your-project
    metrics: ["50+ users", "Production"],
    architecture: "Clean Architecture",
    gradient: "from-blue-600 via-cyan-600 to-indigo-600",
    accentColor: "#3B82F6",
  }
];
```

### Add Experience
```ts
export const EXPERIENCE = [
  {
    company: "Company Name",
    role: "Your Role",
    period: "2023 – Present",
    type: "Full-time",
    description: "...",
    highlights: ["Achievement 1", "Achievement 2"],
    techStack: ["Flutter", "Kotlin"],
    color: "#3b82f6",
    logo: "🏢",
  }
];
```

### Update Social Links
```ts
export const SOCIAL_LINKS = {
  github: "https://github.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourhandle",
  // ...
};
```

---

## 🖼️ Replacing the Avatar

1. Create your 3D cartoon/vector image
2. Export as PNG with transparent or dark background
3. Replace `public/avatar.png`
4. The avatar displays with orbital rings and floating badges automatically

**Recommended specs:** 800×800px minimum, PNG with transparency

---

## 📄 Adding Your Resume

Place your resume PDF at:
```
public/resume.pdf
```

The "Download Resume" button is already wired to `/resume.pdf`.

---

## 📝 Adding Case Studies

1. Create a new component in `src/components/case-studies/YourCaseStudy.tsx`
2. Register it in `src/app/case-studies/[slug]/page.tsx`:

```ts
const CASE_STUDIES = {
  "your-slug": {
    component: YourCaseStudy,
    title: "...",
    description: "...",
  },
};
```

3. Access at `/case-studies/your-slug`

---

## 🛠️ Development Scripts

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run start      # Run production build locally
npm run lint       # Run ESLint
```

---

## 🐛 Debugging Common Issues

### Port already in use
```bash
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
npm run dev
```

### Build errors — type errors
```bash
npm run build 2>&1 | grep "Error"
# Most common: icon names changed in lucide-react
# Check available icons: node -e "import('lucide-react').then(l => console.log(Object.keys(l)))"
```

### Framer Motion SSR error
If you see hydration errors, ensure the component has `"use client"` at the top.

### Image not loading
- Check `next.config.ts` — external domains must be in `remotePatterns`
- Local images go in `public/` and are referenced as `/filename.png`

### CSS not applying
- All custom classes are in `src/app/globals.css`
- TailwindCSS v4 uses `@import "tailwindcss"` (not `@tailwind base` etc.)

### Fonts not loading
The Google Fonts import in `globals.css` requires internet. Local fallback: `system-ui, -apple-system, sans-serif`

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from portfolio directory
vercel --prod
```

Or connect your GitHub repo to Vercel — it will auto-detect Next.js.

### Manual Build
```bash
npm run build
npm run start  # Test locally
```

**Environment:** Node.js 18+ required (v20 recommended)

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | 16.2.x | Framework |
| `react` | 19.x | UI library |
| `framer-motion` | latest | Animations |
| `lucide-react` | latest | Icons |
| `tailwindcss` | v4 | Styling |
| `clsx` | latest | Conditional classes |
| `tailwind-merge` | latest | Tailwind class merging |
| `@radix-ui/*` | latest | Accessible UI primitives |
| `next-themes` | latest | Dark/light mode |

---

## 🌐 Routes

| Path | Description |
|---|---|
| `/` | Main portfolio page |
| `/case-studies/vanigam` | Vanigam GST Billing case study |
| `/case-studies/retailmart` | RetailMart ecosystem case study |
| `/case-studies/bread-financial` | Bread Financial overview |
| `/sitemap.xml` | SEO sitemap |
| `/robots.txt` | Search crawler rules |

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 640px | Single column, stacked |
| Tablet | 640–1024px | 2-column grids |
| Desktop | > 1024px | Full multi-column, side-by-side hero |

---

## 🎯 SEO

- Title tags and meta descriptions configured in `layout.tsx`
- OpenGraph image: add `public/og-image.png` (1200×630)
- Structured data can be added in `layout.tsx`
- Sitemap auto-generated at `/sitemap.xml`

---

*Built with ❤️ using Next.js 15, Framer Motion, and TailwindCSS v4*
