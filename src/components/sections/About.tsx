import { Section } from '../layout/Section';
import type { AboutContent } from '@/types';

const aboutData: AboutContent = {
  bio: 'TODO: Add 2-3 sentences about your background, interests, and what drives you. This is your chance to share your story and connect with visitors.',
  highlights: [
    'TODO: Years of experience',
    'TODO: Key achievement or skill',
    'TODO: Interesting fact or contribution',
  ],
  socialLinks: {
    github: '', // TODO: Add your GitHub URL
    linkedin: '', // TODO: Add your LinkedIn URL
    email: '', // TODO: Add your email
  },
};

export const About = () => {
  return (
    <Section id='about' title='About Me' className='mt-96'>
      <div className='w-full'>
        {/* Bio */}
        <div className='mb-12'>
          <p className='text-lg md:text-xl text-text-brown leading-relaxed text-center'>
            {aboutData.bio}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          {aboutData.highlights.map((highlight, index) => (
            <div
              key={index}
              className='bg-bg-secondary border border-border-light rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow'
            >
              <div className='text-4xl mb-2'>
                {index === 0 && '💼'}
                {index === 1 && '🚀'}
                {index === 2 && '✨'}
              </div>
              <p className='text-text-brown font-medium'>{highlight}</p>
            </div>
          ))}
        </div>

        {/* Social Links */}
        {(aboutData.socialLinks.github ||
          aboutData.socialLinks.linkedin ||
          aboutData.socialLinks.email) && (
          <div className='flex gap-6 justify-center items-center flex-wrap'>
            {aboutData.socialLinks.github && (
              <a
                href={aboutData.socialLinks.github}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-3 bg-bg-secondary border border-border-light rounded-lg text-text-brown hover:bg-accent-peach hover:border-accent-coral transition-all duration-300 font-medium'
              >
                GitHub
              </a>
            )}
            {aboutData.socialLinks.linkedin && (
              <a
                href={aboutData.socialLinks.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-3 bg-bg-secondary border border-border-light rounded-lg text-text-brown hover:bg-accent-coral hover:border-accent-peach transition-all duration-300 font-medium'
              >
                LinkedIn
              </a>
            )}
            {aboutData.socialLinks.email && (
              <a
                href={`mailto:${aboutData.socialLinks.email}`}
                className='px-6 py-3 bg-bg-secondary border border-border-light rounded-lg text-text-brown hover:bg-accent-yellow hover:border-accent-coral transition-all duration-300 font-medium'
              >
                Email
              </a>
            )}
          </div>
        )}
      </div>
    </Section>
  );
};
