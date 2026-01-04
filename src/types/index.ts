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

