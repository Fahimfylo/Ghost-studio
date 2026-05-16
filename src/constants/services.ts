import { 
  Layers, 
  Layout, 
  Database, 
  Code2, 
  Globe, 
  Zap, 
  Cpu, 
  BarChart3,
} from 'lucide-react';
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: 'full-stack',
    name: 'Full Stack Development',
    description: 'Modern web apps built with React, Next.js, and Node.js. Scalable, tested, and production-ready.',
    icon: Layout,
    includes: ['Custom Web Applications', 'Progressive Web Apps (PWAs)', 'Responsive UI/UX', 'Cloud Deployment'],
    tech: ['Next.js', 'React', 'Node.js', 'TypeScript', 'AWS'],
    timeline: '8–16 weeks',
    startingFrom: '$12,000'
  },
  {
    id: 'saas',
    name: 'SaaS Platforms',
    description: 'Multi-tenant SaaS products with auth, billing, dashboards, and subscription management.',
    icon: Layers,
    includes: ['Multi-tenancy Architecture', 'Stripe Integration', 'Admin Dashboards', 'Auth Management'],
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
    timeline: '12–24 weeks',
    startingFrom: '$25,000'
  },
  {
    id: 'erp',
    name: 'ERP & Management Systems',
    description: 'Custom ERP systems that replace legacy tools and centralize your business operations.',
    icon: BarChart3,
    includes: ['Inventory Tracking', 'Resource Planning', 'Reporting Dashboards', 'Legacy Data Migration'],
    tech: ['Node.js', 'PostgreSQL', 'Docker', 'Prisma'],
    timeline: '16–32 weeks',
    startingFrom: '$35,000'
  },
  {
    id: 'api',
    name: 'REST API Development',
    description: 'Clean, documented, versioned APIs with authentication, rate limiting, and OpenAPI specs.',
    icon: Code2,
    includes: ['Endpoint Design', 'Rate Limiting', 'Comprehensive Documentation', 'API Security'],
    tech: ['Node.js', 'Fastify', 'Swagger', 'Jest'],
    timeline: '4–8 weeks',
    startingFrom: '$8,000'
  },
  {
    id: 'database',
    name: 'Database Architecture',
    description: 'Optimized schemas for PostgreSQL, MySQL, MongoDB. Migrations, indexing, and query tuning.',
    icon: Database,
    includes: ['Schema Design', 'Performance Tuning', 'Clustering', 'Data Security'],
    tech: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
    timeline: '4–12 weeks',
    startingFrom: '$7,000'
  },
  {
    id: 'shopify',
    name: 'Shopify Development',
    description: 'Custom themes, apps, and headless Shopify storefronts for high-converting e-commerce brands.',
    icon: Globe,
    includes: ['Headless Storefronts', 'Custom App Development', 'Theme Customization', 'Conversion Optimization'],
    tech: ['Liquid', 'Shopify Storefront API', 'Hydrogen', 'Tailwind'],
    timeline: '6–12 weeks',
    startingFrom: '$10,000'
  },
  {
    id: 'ai',
    name: 'AI Integration',
    description: 'Integrate LLMs, embeddings, and AI workflows into your existing products using OpenAI and LangChain.',
    icon: Cpu,
    includes: ['Custom Chatbots', 'Workflow Automation', 'Vector Databases', 'Prompt Engineering'],
    tech: ['OpenAI', 'LangChain', 'Pinecone', 'Python'],
    timeline: '6–14 weeks',
    startingFrom: '$15,000'
  },
  {
    id: 'automation',
    name: 'Business Automation',
    description: 'Automate repetitive workflows with custom pipelines, webhooks, cron jobs, and no-code bridges.',
    icon: Zap,
    includes: ['Webhook Pipelines', 'Scheduled Jobs', 'Integration Bridges', 'Cost Reduction'],
    tech: ['Node.js', 'Zapier', 'Make.com', 'n8n'],
    timeline: '4–10 weeks',
    startingFrom: '$5,000'
  },
];
