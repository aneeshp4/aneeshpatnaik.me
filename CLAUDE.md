# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React 19, TypeScript, Vite, Tailwind CSS 4, and Motion (Framer Motion). Features a dramatic zoom animation on the hero section and modular, reorderable content sections.

## Development Commands

```bash
# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Architecture

### Modular Section System

The site uses a **plug-and-play section architecture** defined in `src/App.tsx`:

```typescript
const sections: SectionComponent[] = [
  { id: 'experience', Component: Experience },
  { id: 'projects', Component: Projects },
  { id: 'skills', Component: Skills },
];
```

Sections can be reordered or removed by simply editing this array. The Hero section is always rendered first and is not part of the array.

### Animation Architecture

**Hero Zoom Animation**: Implemented via `src/hooks/useScrollProgress.ts`
- Hero section starts at 2.5x scale and zooms out to 1x as user scrolls
- Uses Motion's `useScroll` and `useTransform` for GPU-accelerated performance
- Scroll progress is calculated from viewport position

**Section Animations**: Handled by `src/components/layout/Section.tsx`
- Each section fades in and scales up (0.95 → 1) when scrolled into view
- Uses `whileInView` with `once: true` for one-time animations
- Stagger animations on child elements for visual hierarchy

### Type System

All content types are centralized in `src/types/index.ts`:
- `ExperienceItem`: Work history with company, title, dates, location, description
- `ProjectItem`: Projects with name, description, technologies, optional links
- `SkillCategory`: Skills grouped by category
- `SectionComponent`: Section configuration for the modular system

### Content Pattern

Each section (Experience, Projects, Skills) follows the same pattern:
1. Data array at top of file (e.g., `experienceData: ExperienceItem[]`)
2. Animation variants for container and items
3. Component renders using `Section` layout wrapper
4. Maps over data array with staggered animations

### Styling System

**Tailwind CSS 4** with custom color palette defined in:
- `src/index.css`: CSS variables using `@theme` directive
- `tailwind.config.js`: Extended theme with semantic color names

**Color Palette** (pastel/warm tones):
- `bg-primary`: #FAF7F0 (light beige background)
- `bg-secondary`: #FFFBF0 (card backgrounds)
- `accent-peach`: #FFD6BA
- `accent-coral`: #FFBF9B
- `accent-yellow`: #FFF4C9
- `text-brown`: #5C4033
- `border-light`: #E8DCC4

### Path Aliases

Configured in `vite.config.ts`:
- `@/` → `./src/` (use `@/types` instead of `../types`, etc.)

## Customization Workflow

When users want to update content:
1. **Hero section**: Edit `src/components/Hero.tsx` (name, tagline, social links)
2. **Experience**: Update `experienceData` array in `src/components/sections/Experience.tsx`
3. **Projects**: Update `projectsData` array in `src/components/sections/Projects.tsx`
4. **Skills**: Update `skillsData` array in `src/components/sections/Skills.tsx`
5. **Section order**: Rearrange the `sections` array in `src/App.tsx`

## Key Technical Details

- **React 19**: Uses latest React features
- **Vite**: Fast dev server with HMR, uses Vite 7
- **Motion**: Animation library (formerly Framer Motion v12)
- **TypeScript**: Strict mode enabled
- All animations use GPU-accelerated properties (transform, opacity)
- Responsive design with mobile-first approach
- Smooth scroll enabled globally in `src/index.css`
