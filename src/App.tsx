import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useScopeScroll } from './hooks/useScopeScroll';
import { ScopeOverlay } from './components/ScopeOverlay';
import { ScopeIntro } from './components/ScopeIntro';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import type { SectionComponent } from './types';

const sections: SectionComponent[] = [
  { id: 'about', Component: About },
  { id: 'experience', Component: Experience },
  { id: 'projects', Component: Projects },
  { id: 'skills', Component: Skills },
];

function App() {
  const { sectionsOpacity, scrollYProgress } = useScopeScroll();

  useEffect(() => {
    let maxScrollY = 0;
    let animationComplete = false;

    const handleScroll = () => {
      if (animationComplete) return;

      const currentScroll = window.scrollY;

      // Allow scrolling up to roughly 15% of total document height (when animation completes)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const maxAllowedScroll = docHeight * 0.15;

      if (currentScroll > maxAllowedScroll) {
        window.scrollTo(0, maxAllowedScroll);
      } else {
        maxScrollY = Math.max(maxScrollY, currentScroll);
      }
    };

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest >= 0.15) {
        animationComplete = true;
        window.removeEventListener('scroll', handleScroll);
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollYProgress]);

  return (
    <div className='relative min-h-screen bg-bg-primary'>
      {/* Layer 1 (z-0): All sections in normal flow - visible through scope cutout */}
      <motion.div
        className='relative z-0'
        style={{ opacity: sectionsOpacity }}
      >
        {sections.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </motion.div>

      {/* Layer 2 (z-50): Black overlay with expanding circular cutout */}
      <ScopeOverlay />

      {/* Layer 3 (z-100): Centered name/tagline that fades out */}
      <ScopeIntro />
    </div>
  );
}

export default App;
