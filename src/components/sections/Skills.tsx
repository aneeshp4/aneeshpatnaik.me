import { motion } from 'motion/react';
import { Section } from '../layout/Section';
import type { SkillCategory } from '@/types';

const skillsData: SkillCategory[] = [
  // TODO: Replace with your actual skills organized by category
  // Example structure:
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux']
  },
  // Add more categories as needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const Skills = () => {
  return (
    <Section id='skills' title='Skills'>
      <motion.div
        className='space-y-8'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-50px' }}
      >
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            variants={categoryVariants}
          >
            <h3 className='text-2xl font-semibold text-text-brown mb-4'>
              {category.category}
            </h3>
            <div className='flex flex-wrap gap-3'>
              {category.skills.map((skill, i) => {
                const colors = ['bg-accent-peach', 'bg-accent-coral', 'bg-accent-yellow'];
                const colorClass = colors[i % colors.length];
                return (
                  <motion.span
                    key={i}
                    className={`${colorClass} text-text-brown px-4 py-2 rounded-full font-medium`}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

