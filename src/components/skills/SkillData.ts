import type { SkillCategory } from '@/types/skill';

export const skillCategories: SkillCategory[] = [
  {
    name: 'LANGUAGES',
    accent: 'var(--accent-cyan)',
    skills: [
      { name: 'JavaScript', proficiency: 85 },
      { name: 'Java', proficiency: 80 },
      { name: 'Python', proficiency: 75 },
      { name: 'C++', proficiency: 80 },
      { name: 'HTML5', proficiency: 90 },
      { name: 'CSS3', proficiency: 85 },
    ],
  },
  {
    name: 'FRONTEND',
    accent: 'var(--accent-purple)',
    skills: [
      { name: 'React', proficiency: 85 },
      { name: 'Vite', proficiency: 80 },
      { name: 'TailwindCSS', proficiency: 80 },
      { name: 'Three.js', proficiency: 65 },
    ],
  },
  {
    name: 'BACKEND',
    accent: 'var(--accent-green)',
    skills: [
      { name: 'Spring Boot', proficiency: 80 },
      { name: 'Node.js', proficiency: 70 },
      { name: 'REST APIs', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 75 },
    ],
  },
  {
    name: 'CLOUD & DEVOPS',
    accent: 'var(--accent-magenta)',
    skills: [
      { name: 'AWS Lambda', proficiency: 75 },
      { name: 'API Gateway', proficiency: 70 },
      { name: 'DynamoDB', proficiency: 70 },
      { name: 'Docker', proficiency: 70 },
    ],
  },
  {
    name: 'TOOLS',
    accent: 'var(--accent-orange)',
    skills: [
      { name: 'Git', proficiency: 90 },
      { name: 'GitHub', proficiency: 90 },
      { name: 'Linux', proficiency: 75 },
      { name: 'VS Code', proficiency: 90 },
    ],
  },
];

export const keySkills = [
  { name: 'React', proficiency: 85 },
  { name: 'Spring Boot', proficiency: 80 },
  { name: 'C++', proficiency: 80 },
  { name: 'AWS', proficiency: 75 },
  { name: 'DSA', proficiency: 85 },
];

