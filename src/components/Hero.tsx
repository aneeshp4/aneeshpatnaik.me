import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [2.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0.6, 0.9, 1]);

  return (
    <motion.div
      ref={ref}
      className='relative h-screen flex items-center justify-center overflow-hidden'
      style={{ scale, opacity }}
    >
      <div className='absolute inset-0 bg-gradient-radial from-bg-secondary via-bg-primary to-accent-yellow opacity-50' />
      
      <div className='relative z-10 text-center px-6'>
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
          className='text-2xl md:text-3xl text-text-brown font-light mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* TODO: Add your tagline/title here (e.g., "Fullstack Engineer") */}
          Fullstack Engineer
        </motion.p>

        <motion.div
          className='flex gap-6 justify-center items-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* TODO: Add your social links here (GitHub, LinkedIn, Email, etc.) */}
          {/* Example:
          <a href='https://github.com/yourusername' className='text-text-brown hover:text-accent-coral transition-colors'>
            GitHub
          </a>
          <a href='https://linkedin.com/in/yourusername' className='text-text-brown hover:text-accent-coral transition-colors'>
            LinkedIn
          </a>
          */}
        </motion.div>

        {/* TODO: Optional - Add a profile image/avatar here */}
      </div>

      <motion.div
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
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
    </motion.div>
  );
};

