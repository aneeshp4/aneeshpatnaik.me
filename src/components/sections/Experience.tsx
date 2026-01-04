import { motion } from 'motion/react';
import { Section } from '../layout/Section';
import type { ExperienceItem } from '@/types';

const experienceData: ExperienceItem[] = [
  // TODO: Replace with your actual experience
  // Example structure:
  {
    company: 'Company Name',
    title: 'Your Title',
    dates: 'Month Year - Present',
    location: 'City, State/Country',
    description: [
      'Describe your key responsibilities and achievements',
      'Quantify impact where possible (e.g., "Improved performance by 40%")',
      'Highlight technologies and tools used',
    ]
  },
  // Add more experience items as needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const Experience = () => {
  return (
    <Section id='experience' title='Experience'>
      <motion.div
        className='space-y-8'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-50px' }}
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className='bg-bg-secondary border border-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'
          >
            <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-4'>
              <div>
                <h3 className='text-2xl font-bold text-text-brown mb-1'>
                  {exp.title}
                </h3>
                <p className='text-xl text-accent-coral font-medium'>
                  {exp.company}
                </p>
              </div>
              <div className='text-accent-peach mt-2 md:mt-0 md:text-right'>
                <p className='font-medium'>{exp.dates}</p>
                <p className='text-sm'>{exp.location}</p>
              </div>
            </div>
            <ul className='space-y-2'>
              {exp.description.map((item, i) => (
                <li key={i} className='text-text-brown flex items-start'>
                  <span className='text-accent-coral mr-2'>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

