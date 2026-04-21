# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test runner is configured.

## Stack

Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion. Path alias `@/*` maps to the repo root.

## Architecture

Single-page portfolio with anchor-based section navigation (`#home`, `#about`, `#skills`, `#experience`, `#projects`, `#contact`). All sections live in `app/page.tsx` as stacked components.

**Content** is hardcoded in `lib/data.ts` — all project and skill data lives there. Personal metadata (name, bio, social links) is embedded directly in component files.

**Theme** (dark/light) is managed via React Context in `components/ThemeProvider.tsx`, persisted to localStorage, and toggled by adding/removing the `dark` class on `<html>`.

**Animations** use two layers:
- Framer Motion for component-level enter/exit — reusable variants are defined in `hooks/useAnimationVariants.ts`
- CSS keyframes for continuous effects (gradient shift, floating orbs in `AnimatedBackground.tsx`)
- Scroll-triggered reveals via `hooks/useInView.ts` (IntersectionObserver)

**Styling** uses Tailwind with custom config in `tailwind.config.ts`: brand/accent color palette, three font families (Syne display, DM Sans body, JetBrains Mono code), and custom utility classes (`.text-gradient`, `.card-glass`, `.section-padding`, `.container-max`).

## Key Files

| File | Purpose |
|------|---------|
| `lib/data.ts` | All project and skill data — edit here to add/update content |
| `lib/utils.ts` | `cn()` helper (clsx + tailwind-merge) |
| `types/index.ts` | `Project`, `Skill`, `SkillCategory` interfaces |
| `app/layout.tsx` | Root layout, metadata (SEO, OG tags), ThemeProvider |
| `tailwind.config.ts` | Custom colors, fonts, animations |
| `app/globals.css` | Google Font imports + custom Tailwind utility class definitions |
