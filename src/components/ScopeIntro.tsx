import { motion, useTransform } from 'motion/react';
import { useScopeScroll } from '@/hooks/useScopeScroll';

export const ScopeIntro = () => {
  const { scrollYProgress } = useScopeScroll();

  // Fade out name/tagline early in the scroll (by 30%)
  const introOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <motion.div
      className='fixed inset-0 flex items-center justify-center pointer-events-none'
      style={{
        opacity: introOpacity,
        zIndex: 100,
      }}
    >
      <div className='text-center px-6'>
        <motion.h1
          className='text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent-peach via-accent-coral to-accent-peach bg-clip-text text-transparent'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* TODO: Add your name here */}
          Your Name
        </motion.h1>

        <motion.p
          className='text-2xl md:text-3xl text-text-brown font-light'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* TODO: Add your tagline/title here */}
          Fullstack Engineer
        </motion.p>

        <motion.div
          className='mt-20'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className='text-text-brown text-sm'
          >
            ↓ Scroll to explore
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
