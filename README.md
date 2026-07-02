# Vishnu Priya Vattikunta — Portfolio

Personal portfolio website built with React, TypeScript, and Vite. Showcases 3 years of full-stack enterprise software development experience at Mu Sigma across logistics, supply chain, healthcare, and aviation domains.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion + p5.js |
| UI Components | Radix UI + shadcn/ui |
| Routing | React Router v7 |
| Icons | Lucide React |

---

## Features

- **p5.js particle network** — interactive background on the hero section with mouse repulsion
- **p5.js ambient orbs** — floating soft orb background on the skills section
- **Framer Motion animations** — scroll-triggered entrance animations, spring-physics hover, magnetic CTAs, staggered lists
- **Responsive carousel** — awards and certifications shown in a fixed-column carousel; arrows and dots appear only when items exceed the column count; otherwise cards stretch to fill the full row
- **Dark / Light theme** — toggle via navbar, persisted across sessions
- **Project case studies** — dedicated detail pages with context, responsibilities, challenges & solutions, and outcomes
- **Prev / Next project navigation** — browse between case studies without going back to home
- **Animated timeline** — experience section with a drawing timeline line and per-role dot indicators
- **Count-up stats** — awards section numbers animate from zero on scroll-in
- **Certification count badge** — live count next to the Certifications heading, auto-updates from data
- **Animated navbar underline** — shared sliding accent underline across nav links on hover

---

## Project Structure

```
src/
├── assets/
│   ├── awards/          # Spot award images (spot1–spot4.png)
│   └── profile/         # Profile photo
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   # Fixed nav with scroll-aware bg, animated underline, mobile menu
│   │   └── Footer.tsx   # Animated footer with connect + navigation links
│   ├── sections/
│   │   ├── Hero.tsx          # p5 particle background, gradient name, magnetic buttons
│   │   ├── HeroBackground.tsx # p5.js particle network sketch
│   │   ├── About.tsx         # Capability cards with hover lift
│   │   ├── Experience.tsx    # Animated timeline, short bullet responsibilities
│   │   ├── Projects.tsx      # Equal-height cards, looping arrow
│   │   ├── Awards.tsx        # Stats count-up + carousel (columns=4)
│   │   ├── Skills.tsx        # p5 orb background + hover-lift cards
│   │   ├── SkillsBackground.tsx # p5.js ambient orb sketch
│   │   ├── Education.tsx     # Degree cards + cert carousel (columns=2) with count badge
│   │   ├── Contact.tsx       # Hover-lift cards, animated copy button
│   │   └── Mermaid.tsx       # Mermaid diagram renderer (used internally)
│   └── ui/
│       ├── Carousel.tsx # Reusable fixed-column carousel with auto arrows + dots
│       ├── P5Canvas.tsx # p5.js instance-mode React wrapper
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── toast.tsx / toaster.tsx / use-toast.ts
│       └── typography.tsx
├── data/
│   └── content.ts   # All site content — edit this file to update the portfolio
├── hooks/
│   └── use-theme.ts
├── lib/
│   ├── animations.tsx  # FadeIn, FadeInUp, StaggerChildren, MagneticHover, PulseGlow, ScrambleText
│   └── utils.ts
├── pages/
│   ├── Home.tsx
│   ├── ProjectDetail.tsx  # Full case study with Navbar, Footer, prev/next nav
│   └── NotFound.tsx
└── index.css            # Tailwind base + CSS theme variables (light/dark)
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check
npm run typecheck

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Updating Content

All portfolio data lives in **`src/data/content.ts`**. No code changes needed for:

| Export | Controls |
|---|---|
| `SITE_CONFIG` | Name, role, email, LinkedIn, GitHub, tagline, domains, resume URL |
| `EXPERIENCE` | Roles, periods, bullet responsibilities, tech tags, impact statements |
| `PROJECTS` | Case study slug, title, industry, context, responsibilities, challenges, outcomes |
| `AWARDS` | Award title, date, description, image |
| `SKILLS` | Skill categories, icons, technology tags |
| `EDUCATION` | Degree institutions, fields, periods, status |
| `CERTIFICATIONS` | Cert title, issuer, date, credential URL — count badge auto-updates |
| `STATS` | Numeric stats shown in the awards section with count-up animation |

### Carousel behaviour
- **Awards** — shows 4 per row; arrows appear automatically when there are 5 or more
- **Certifications** — shows 2 per row; arrows appear automatically when there are 3 or more
- Card sizes stay equal regardless of how many items there are

---

## Deployment

The project builds to a static `dist/` folder and can be deployed to any static host (Vercel, Netlify, GitHub Pages, Azure Static Web Apps).

```bash
npm run build
# Deploy the dist/ folder
```

---

## License

Personal portfolio — all rights reserved. Not intended as a template for redistribution.
