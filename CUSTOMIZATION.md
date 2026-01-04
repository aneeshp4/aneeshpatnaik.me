# Customization Guide

This guide will help you quickly customize your personal website with your own information.

## Quick Start Checklist

### 1. Hero Section (`src/components/Hero.tsx`)

Search for `TODO` comments and update:
- [ ] Your name (line ~30)
- [ ] Your tagline/title (line ~38)
- [ ] Social links (lines ~47-55)
- [ ] Optional: Add profile image

### 2. Experience Section (`src/components/sections/Experience.tsx`)

Update the `experienceData` array (starting at line ~5):
- [ ] Company name
- [ ] Job title
- [ ] Dates (e.g., "Jan 2023 - Present")
- [ ] Location
- [ ] Description bullet points

**Example:**
```typescript
{
  company: 'Tech Company Inc.',
  title: 'Senior Software Engineer',
  dates: 'Jan 2023 - Present',
  location: 'San Francisco, CA',
  description: [
    'Led development of microservices architecture serving 1M+ users',
    'Reduced API response time by 60% through optimization',
    'Mentored 5 junior engineers on best practices',
  ]
}
```

### 3. Projects Section (`src/components/sections/Projects.tsx`)

Update the `projectsData` array (starting at line ~5):
- [ ] Project name
- [ ] Description
- [ ] Technologies used
- [ ] GitHub link (optional)
- [ ] Demo link (optional)

**Example:**
```typescript
{
  name: 'E-commerce Platform',
  description: 'Full-stack e-commerce platform with real-time inventory management and payment processing.',
  technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
  githubLink: 'https://github.com/yourusername/ecommerce',
  demoLink: 'https://demo.yoursite.com'
}
```

### 4. Skills Section (`src/components/sections/Skills.tsx`)

Update the `skillsData` array (starting at line ~5):
- [ ] Add your skill categories
- [ ] List skills under each category

**Example:**
```typescript
{
  category: 'Frontend',
  skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
},
{
  category: 'Backend',
  skills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis']
}
```

### 5. Page Title & Meta (`index.html`)

Update:
- [ ] Page title (line ~7)
- [ ] Meta description (line ~6)

### 6. Reorder Sections (Optional)

In `src/App.tsx`, change the order of sections in the array:

```typescript
const sections: SectionComponent[] = [
  { id: 'skills', Component: Skills },      // Now first
  { id: 'projects', Component: Projects },  // Now second
  { id: 'experience', Component: Experience }, // Now third
];
```

Or remove sections you don't want:
```typescript
const sections: SectionComponent[] = [
  { id: 'projects', Component: Projects },
  { id: 'skills', Component: Skills },
  // Experience section removed
];
```

## Color Customization

Edit `src/index.css` to change the color scheme:

```css
@theme {
  --color-bg-primary: #FAF7F0;      /* Main background */
  --color-bg-secondary: #FFFBF0;    /* Card backgrounds */
  --color-accent-peach: #FFD6BA;    /* Accent color 1 */
  --color-accent-coral: #FFBF9B;    /* Accent color 2 */
  --color-accent-yellow: #FFF4C9;   /* Accent color 3 */
  --color-text-brown: #5C4033;      /* Text color */
  --color-border-light: #E8DCC4;    /* Border color */
}
```

## Testing Your Changes

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to see your changes live!

## Tips

1. **Keep descriptions concise**: Aim for 2-4 bullet points per experience
2. **Quantify achievements**: Use numbers when possible (e.g., "Improved performance by 40%")
3. **Update regularly**: Keep your projects and experience current
4. **Test on mobile**: The site is responsive, but always check on different devices
5. **Use consistent tense**: Past tense for previous roles, present for current role

## Need Help?

- Check the main [README.md](README.md) for technical details
- Review the inline TODO comments in each file
- All sections are self-contained and easy to modify

