export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}