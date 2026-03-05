# Redika Westama Putra — Portfolio

A modern, production-ready personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne (display), DM Sans (body), JetBrains Mono (code)

## Features

- ✅ Dark / Light mode with smooth transitions
- ✅ Animated gradient background (floating orbs)
- ✅ Scroll progress indicator
- ✅ Section reveal animations on scroll
- ✅ Responsive (mobile-first)
- ✅ SEO metadata configuration
- ✅ Reusable animation utility hooks
- ✅ Clean component-based architecture

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout + SEO metadata
│   └── page.tsx             # Home page
├── components/
│   ├── ThemeProvider.tsx    # Dark/light mode context
│   ├── ScrollProgress.tsx   # Top scroll indicator bar
│   ├── AnimatedBackground.tsx  # Gradient orb background
│   ├── Navbar.tsx           # Sticky header with theme toggle
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About + highlights
│   ├── Skills.tsx           # Categorized skill bars
│   ├── ProjectCard.tsx      # Reusable project card
│   ├── Projects.tsx         # Projects grid
│   ├── Contact.tsx          # Contact form + social links
│   └── Footer.tsx           # Footer + scroll to top
├── hooks/
│   ├── useAnimationVariants.ts  # Reusable Framer Motion variants
│   ├── useInView.ts             # Intersection observer hook
│   ├── useScrollProgress.ts     # Scroll progress hook
│   └── useTheme.ts              # Theme toggle hook
├── lib/
│   ├── data.ts              # Projects + skills data
│   └── utils.ts             # cn() utility
├── types/
│   └── index.ts             # TypeScript interfaces
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

1. **Update personal info**: Edit `lib/data.ts` for projects and skills
2. **Change colors**: Update gradient colors in `tailwind.config.ts` and `globals.css`
3. **Update SEO**: Edit metadata in `app/layout.tsx`
4. **Add sections**: Create a new component in `components/` and import it in `app/page.tsx`

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## License

MIT — feel free to use this as a template for your own portfolio.
