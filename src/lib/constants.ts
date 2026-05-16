import { 
  Layers, 
  Layout, 
  Database, 
  Code2, 
  Globe, 
  Zap, 
  Cpu, 
  BarChart3, 
  Github, 
  Linkedin, 
  Twitter 
} from 'lucide-react';

export const SITE_CONFIG = {
  name: 'Nexlify Studio',
  tagline: 'We build software that scales.',
  subTagline: 'From idea to infrastructure — full-stack, full-speed.',
  email: 'hello@nexlify.studio',
  timezone: '9am–6pm (GMT+6)',
  responseTime: 'within 24 hours',
};

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
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

export const PROJECTS = [
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

export const TEAM = [
  {
    name: 'Alex Rahman',
    role: 'Founder & CEO',
    bio: 'Full Stack, System Design, Product',
    initials: 'AR',
    socials: { github: '#', linkedin: '#', twitter: '#' }
  },
  {
    name: 'Sara Chen',
    role: 'Frontend Engineer',
    bio: 'React, Next.js, Tailwind, Framer Motion',
    initials: 'SC',
    socials: { github: '#', linkedin: '#', twitter: '#' }
  },
  {
    name: 'James Okafor',
    role: 'Full Stack Engineer',
    bio: 'Node.js, PostgreSQL, AWS, Docker',
    initials: 'JO',
    socials: { github: '#', linkedin: '#', twitter: '#' }
  },
  {
    name: 'Mia Tanaka',
    role: 'Shopify Developer',
    bio: 'Liquid, Storefront API, Headless',
    initials: 'MT',
    socials: { github: '#', linkedin: '#', twitter: '#' }
  },
];

export const TESTIMONIALS = [
  {
    quote: "Nexlify delivered our ERP in 10 weeks. Clean code, zero bugs on launch.",
    author: "Marcus T.",
    role: "COO @ LogiCore"
  },
  {
    quote: "Best dev team we've worked with. They think like product builders, not just coders.",
    author: "Priya K.",
    role: "Founder @ ShipSmart"
  },
  {
    quote: "Our Shopify revenue increased 28% after their headless rebuild.",
    author: "James L.",
    role: "Owner @ LuxWear"
  },
  {
    quote: "They documented everything. Handoff was seamless.",
    author: "Rachel M.",
    role: "CTO @ Finbloc"
  },
  {
    quote: "Fast, professional, and genuinely invested in our success.",
    author: "David O.",
    role: "CEO @ Stackly"
  },
  {
    quote: "The API they built handles 1M+ requests/day without issues.",
    author: "Amira F.",
    role: "CTO @ DataBridge"
  },
];

export const PROCESS_STEPS = [
  { number: '01', title: 'Discovery', description: 'We understand your business, goals, and technical requirements.' },
  { number: '02', title: 'Planning', description: 'Architecture, tech stack, timeline, and milestone planning.' },
  { number: '03', title: 'UI/UX Design', description: 'Wireframes and high-fidelity designs in Figma, reviewed together.' },
  { number: '04', title: 'Development', description: 'Agile sprints with weekly demos and GitHub visibility.' },
  { number: '05', title: 'Testing', description: 'QA, performance audits, and security checks before launch.' },
  { number: '06', title: 'Deployment', description: 'CI/CD pipelines, monitoring, and post-launch support.' },
];
