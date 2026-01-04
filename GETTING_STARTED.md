# Getting Started

Your personal portfolio website is ready! 🎉

## What's Been Built

✅ **Modern React + TypeScript Setup** with Vite for fast development
✅ **Dramatic Zoom Animation** on hero section using Motion (Framer Motion)
✅ **Pastel Color Scheme** with warm beige, peach, coral, and yellow tones
✅ **Three Main Sections**: Experience, Projects, and Skills
✅ **Modular Architecture** - easily reorder or remove sections
✅ **Responsive Design** - looks great on all devices
✅ **Smooth Animations** - GPU-accelerated 60fps performance

## Quick Commands

```bash
# Start development server (already running!)
npm run dev
# Visit: http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## Next Steps

1. **Customize Your Content** - See [CUSTOMIZATION.md](CUSTOMIZATION.md) for detailed instructions
2. **Update Hero Section** - Add your name, tagline, and social links in `src/components/Hero.tsx`
3. **Add Your Experience** - Edit `src/components/sections/Experience.tsx`
4. **Showcase Projects** - Edit `src/components/sections/Projects.tsx`
5. **List Your Skills** - Edit `src/components/sections/Skills.tsx`

## Key Features

### Zoom Animation
The hero section starts zoomed in (2.5x) and smoothly zooms out to normal size as you scroll. Each section also has a subtle zoom-in effect when it comes into view.

### Plug-and-Play Sections
Reorder or remove sections by editing the `sections` array in `src/App.tsx`:

```typescript
const sections: SectionComponent[] = [
  { id: 'experience', Component: Experience },
  { id: 'projects', Component: Projects },
  { id: 'skills', Component: Skills },
];
```

### Pastel Color Palette
Warm, inviting colors defined in `src/index.css`:
- Light beige background (#FAF7F0)
- Peach, coral, and yellow accents
- Warm brown text (#5C4033)

## File Structure

```
src/
├── App.tsx                    # Main app - reorder sections here
├── components/
│   ├── Hero.tsx              # Hero with zoom animation
│   ├── sections/
│   │   ├── Experience.tsx    # Your work history
│   │   ├── Projects.tsx      # Your projects
│   │   └── Skills.tsx        # Your skills
│   └── layout/
│       └── Section.tsx       # Reusable section wrapper
├── hooks/
│   └── useScrollProgress.ts  # Scroll animation logic
└── types/
    └── index.ts              # TypeScript types
```

## Development Server

The dev server is currently running at http://localhost:5173

Any changes you make to the code will automatically reload in the browser!

## Need Help?

- 📖 [CUSTOMIZATION.md](CUSTOMIZATION.md) - Step-by-step customization guide
- 📖 [README.md](README.md) - Full technical documentation
- 💡 Look for `TODO` comments in the code for guidance

## Tips

- Start by updating the Hero section with your name
- Replace placeholder data in each section with your real information
- Test on mobile by resizing your browser or using dev tools
- The site is fully responsive and accessible out of the box

Happy customizing! 🚀

