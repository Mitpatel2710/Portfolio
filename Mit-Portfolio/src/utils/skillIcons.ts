import {
  Code2,
  Binary,
  Library,
  Server,
  Globe,
  Cloud,
  GitMerge,
  Database,
  Monitor,
  Wrench,
  GitBranch,
  Terminal,
  Settings,
  Laptop
} from 'lucide-react';

export function getSkillIcon(category: string) {
  const icons: { [key: string]: any } = {
    'Methodologies': Code2,
    'Programming Languages': Binary,
    'Frameworks & Libraries': Library,
    'J2EE Technologies': Server,
    'Web Technologies': Globe,
    'Cloud Technologies': Cloud,
    'CI/CD Tools': GitMerge,
    'Databases': Database,
    'Application Servers': Monitor,
    'Build & Deployment': Wrench,
    'Version Control': GitBranch,
    'IDE & Development': Terminal,
    'Other Tools': Settings,
    'Operating Systems': Laptop
  };

  return icons[category] || Code2;
}