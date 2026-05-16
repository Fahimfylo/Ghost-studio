import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: 'taskflow',
    name: 'TaskFlow ERP',
    category: 'Enterprise SaaS',
    description: 'Built for a 200-person logistics company. Custom ERP replacing 3 legacy tools.',
    tech: ['Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: ['Reduced operational costs by 30%', '100% data consistency across branches'],
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    id: 'shopify-boost',
    name: 'Shopify Boost',
    category: 'E-Commerce',
    description: 'Headless Shopify storefront with 40% faster load time and 25% higher conversion.',
    tech: ['Next.js', 'Shopify Storefront API', 'Tailwind'],
    metrics: ['40% Faster Load Time', '25% Higher Conversion Rate'],
    color: 'from-green-500/20 to-teal-500/20'
  },
  {
    id: 'medisync',
    name: 'MediSync',
    category: 'Healthcare SaaS',
    description: 'Patient management SaaS with HIPAA-compliant data architecture.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    metrics: ['HIPAA Compliant', 'Support for 50k+ daily users'],
    color: 'from-purple-500/20 to-pink-500/20'
  },
];
