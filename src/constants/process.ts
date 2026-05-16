import type { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Discovery', description: 'We understand your business, goals, and technical requirements.' },
  { number: '02', title: 'Planning', description: 'Architecture, tech stack, timeline, and milestone planning.' },
  { number: '03', title: 'UI/UX Design', description: 'Wireframes and high-fidelity designs in Figma, reviewed together.' },
  { number: '04', title: 'Development', description: 'Agile sprints with weekly demos and GitHub visibility.' },
  { number: '05', title: 'Testing', description: 'QA, performance audits, and security checks before launch.' },
  { number: '06', title: 'Deployment', description: 'CI/CD pipelines, monitoring, and post-launch support.' },
];
