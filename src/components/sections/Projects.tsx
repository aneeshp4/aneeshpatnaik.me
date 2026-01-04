import { motion } from 'motion/react';
import { Section } from '../layout/Section';
import type { ProjectItem } from '@/types';

const projectsData: ProjectItem[] = [
  // TODO: Replace with your actual projects
  // Example structure:
  {
    name: 'Project Name',
    description: 'Brief description of what the project does and the problem it solves. Keep it concise but informative.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    githubLink: 'https://github.com/yourusername/project',
    demoLink: 'https://project-demo.com'
  },
  // Add more projects as needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
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

export const Projects = () => {
  return (
    <Section id='projects' title='Projects'>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-50px' }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.2 }}
            className='bg-bg-secondary border border-border-light rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col'
          >
            <h3 className='text-2xl font-bold text-text-brown mb-3'>
              {project.name}
            </h3>
            
            <p className='text-text-brown mb-4 flex-grow'>
              {project.description}
            </p>

            <div className='flex flex-wrap gap-2 mb-4'>
              {project.technologies.map((tech, i) => {
                const colors = ['bg-accent-peach', 'bg-accent-coral', 'bg-accent-yellow'];
                const colorClass = colors[i % colors.length];
                return (
                  <span
                    key={i}
                    className={`${colorClass} text-text-brown text-sm px-3 py-1 rounded-full font-medium`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>

            <div className='flex gap-4 mt-auto'>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-text-brown hover:text-accent-coral transition-colors font-medium'
                >
                  GitHub →
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-text-brown hover:text-accent-coral transition-colors font-medium'
                >
                  Demo →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

