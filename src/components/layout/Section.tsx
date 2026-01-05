import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-20 px-6 md:px-12 lg:px-24 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-4xl md:text-5xl font-bold mb-12 text-text-brown text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </motion.section>
  );
};

