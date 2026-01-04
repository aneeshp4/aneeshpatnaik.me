# Personal Portfolio Website

A modern, animated personal portfolio website built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion).

## Features

- **Dramatic Zoom Animation**: Hero section starts zoomed in and smoothly zooms out as you scroll
- **Modular Architecture**: Easily reorder or remove sections by editing the sections array in `App.tsx`
- **Pastel Color Scheme**: Warm, inviting color palette with beige, peach, coral, and yellow tones
- **Responsive Design**: Mobile-first design that looks great on all devices
- **Smooth Animations**: GPU-accelerated animations using Motion for 60fps performance
- **TypeScript**: Fully typed for better developer experience

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization Guide

### 1. Personal Information (Hero Section)

Edit `src/components/Hero.tsx`:
- Replace "Your Name" with your actual name
- Update the tagline (e.g., "Fullstack Engineer")
- Add your social links (GitHub, LinkedIn, Email, etc.)
- Optionally add a profile image

### 2. Experience Section

Edit `src/components/sections/Experience.tsx`:
- Replace the placeholder data in `experienceData` array
- Add your company name, title, dates, location, and description
- Add as many experience items as needed

### 3. Projects Section

Edit `src/components/sections/Projects.tsx`:
- Replace the placeholder data in `projectsData` array
- Add your project name, description, technologies used
- Include GitHub and demo links if available
- Add as many projects as you want

### 4. Skills Section

Edit `src/components/sections/Skills.tsx`:
- Replace the placeholder data in `skillsData` array
- Organize skills by categories (Frontend, Backend, Tools, etc.)
- Add your actual skills to each category

### 5. Reordering Sections

Edit `src/App.tsx`:
- Simply reorder items in the `sections` array
- Remove any section by deleting its entry from the array
- The Hero section is fixed and always appears first

Example:
```typescript
const sections: SectionComponent[] = [
  { id: 'skills', Component: Skills },      // Now first
  { id: 'projects', Component: Projects },  // Now second
  { id: 'experience', Component: Experience }, // Now third
];
```

### 6. Colors

Edit `tailwind.config.js` to customize the color palette:
- `bg-primary`: Main background color
- `bg-secondary`: Card/section backgrounds
- `accent-peach`, `accent-coral`, `accent-yellow`: Accent colors
- `text-brown`: Main text color
- `border-light`: Border color

## Project Structure

```
src/
├── App.tsx                    # Main app with sections array
├── components/
│   ├── Hero.tsx              # Hero section with zoom animation
│   ├── sections/
│   │   ├── Experience.tsx    # Experience section
│   │   ├── Projects.tsx      # Projects section
│   │   └── Skills.tsx        # Skills section
│   └── layout/
│       └── Section.tsx       # Reusable section wrapper
├── hooks/
│   └── useScrollProgress.ts  # Scroll-based animation hooks
├── types/
│   └── index.ts              # TypeScript type definitions
├── index.css                 # Global styles with Tailwind
└── main.tsx                  # App entry point
```

## Technologies Used

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Motion**: Animation library (formerly Framer Motion)

## Performance

- All animations use GPU-accelerated properties (transform, opacity)
- Smooth 60fps animations
- Optimized bundle size with Vite
- Lazy loading for smooth scroll experience

## License

MIT License - Feel free to use this template for your own portfolio!
