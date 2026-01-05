export interface ExperienceItem {
  company: string;
  title: string;
  dates: string;
  location: string;
  description: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SectionComponent {
  id: string;
  Component: React.ComponentType;
}

export interface AboutContent {
  bio: string;
  highlights: string[];
  profileImage?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
    twitter?: string;
  };
}

