<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: my-protofilo (Portfolio)

**Owner:** Omar Almugawish  
**Stack:** Next.js 16.2.6 (App Router) + React 19 + TypeScript 5 + Tailwind CSS v4  
**Animations:** GSAP 3.15 (hero/header) + Framer Motion 12.40 (pages/scroll)  
**Icons:** react-icons  
**Package Manager:** npm

## Directory Structure

```
src/
├── app/
│   ├── page.tsx              # Home - NameAnimation (GSAP hero)
│   ├── layout.tsx            # Root layout: Header + main
│   ├── globals.css           # Tailwind v4 + CSS vars
│   ├── About/page.tsx        # /about - Framer Motion scroll reveals
│   ├── Contact/page.tsx      # /contact - Framer Motion, form sim
│   ├── Projects/page.tsx     # /projects - Framer Motion, drawer, filters
│   ├── TimeLine/page.tsx     # /timeline - Framer Motion, filters
│   └── Experience/           # ❌ NOT YET CREATED (linked in Header)
├── components/
│   ├── Header.tsx            # Nav - GSAP overlay open animation (5s delay)
│   └── nameAnimation.tsx     # Hero - GSAP: rolling-O, letters, particles, typewriter
```

## Key Conventions

- **PascalCase** for component files and directories
- **Framer Motion** for page-level animations (stagger, whileInView, AnimatePresence)
- **GSAP** only used in Header.tsx and nameAnimation.tsx (load-time animations)
- **Tailwind v4** uses `@import "tailwindcss"` syntax (NOT v3 `@tailwind` directives)
- **React Compiler** enabled in next.config.ts
- All pages are "use client" for animation libraries
- Dark mode uses `prefers-color-scheme` CSS media query

## Animation Patterns

| Pattern | Where | Library |
|---------|-------|---------|
| Page-load overlay + stagger nav | Header.tsx | GSAP |
| Hero rolling-O + particles + typewriter | nameAnimation.tsx | GSAP |
| Stagger fade-in sections | All pages | Framer Motion |
| Scroll-triggered reveals | About page | Framer Motion whileInView |
| Filter list transitions (AnimatePresence) | Projects, TimeLine | Framer Motion |
| Slide-in drawer overlay | Projects page | Framer Motion |
| Hover card lift | Projects, Timeline | Framer Motion whileHover |

## Missing / Planned

- `/Experience` page (link exists in Header)
- **GSAP ScrollTrigger** (library available, plugin not used)
- Smooth scrolling (no Lenis/Locomotive)
- No scroll-based parallax or progress tracking
