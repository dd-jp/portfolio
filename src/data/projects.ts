export interface Project {
  title: string;
  /** Short category chip, e.g. "AI · R&D" or "Platform". */
  category: string;
  description: string;
  /** Optional headline metric shown emphasised on the card. */
  metric?: string;
  tags: string[];
  featured?: boolean;
}

/**
 * Selected architectural & AI work. AI-driven initiatives lead — they are the
 * clearest differentiator from the latest CV.
 */
export const projects: Project[] = [
  {
    title: 'ARMigrator — AI-Driven Angular → React Conversion',
    category: 'AI · Migration',
    description:
      'Led the winning hackathon prototype and championed it into an active migration programme: an LLM conversion pipeline with a curated knowledge base and automated validation that converts legacy Angular into production-grade React.',
    metric: 'Won hackathon → live programme',
    tags: ['TypeScript', 'Claude Sonnet', 'Prompt Pipelines', 'Knowledge Base'],
    featured: true,
  },
  {
    title: 'Declarative UI Generation — OpenAPI-Aware LLMs',
    category: 'AI · R&D',
    description:
      'Conceived and prototyped an approach where OpenAPI-aware LLMs generate schema-driven, design-system-compliant React UIs directly from API contracts — with accessibility and design standards enforced by construction.',
    metric: 'R&D — build-time reduction',
    tags: ['React', 'OpenAPI', 'JSON Schema', 'LLMs', 'Design Systems'],
    featured: true,
  },
  {
    title: 'AI Code Review Agents',
    category: 'AI · Engineering',
    description:
      'Built AI agents that review developers’ code locally pre-PR — scoring security, performance, accessibility, complexity and code quality, and attaching a pass/fail verdict with screenshot evidence and justification to every PR.',
    metric: 'Cut review effort',
    tags: ['LLMs', 'Prompt Engineering', 'Agent Skills', 'DevEx'],
    featured: true,
  },
  {
    title: 'Compliance Central Dashboard',
    category: 'Platform',
    description:
      'A scalable portal hosting multiple compliance apps and dashboards with guided workflows, end-to-end auditability (immutable event logs, trace IDs, Dynatrace), and voice-to-text via the Web Speech API.',
    metric: '80% less end-user effort',
    tags: ['React', 'TypeScript', 'Vite', 'Turborepo', 'Kubernetes'],
  },
  {
    title: 'Compliance Component Library & Micro-frontends',
    category: 'Design Systems',
    description:
      'A reusable, tree-shakeable component library with built-in a11y patterns, plus embeddable Vite Module Federation widgets enabling incremental adoption and independent deployments across teams.',
    metric: 'Reused across multiple teams',
    tags: ['React', 'Storybook', 'Rollup', 'Module Federation'],
  },
  {
    title: 'Compliance Ecosystem — Director View',
    category: 'Data Visualisation',
    description:
      'An interactive map of systems, data flows, dependencies and accountable owners that de-risked programme decisions and accelerated cross-portfolio planning.',
    tags: ['React', 'Next.js', 'React Flow', 'Framer Motion'],
  },
  {
    title: 'Developer Knowledge Hub',
    category: 'Platform',
    description:
      'A documentation platform at Barclays consolidating install guides, runbooks and tooling standards — cutting Confluence sprawl and enabling deprecation of costly legacy toolchains.',
    tags: ['React', 'TypeScript', 'Docusaurus', 'Vite'],
  },
  {
    title: 'Asset Service Convergence',
    category: 'Real-Time Data',
    description:
      'High-throughput post-trade dashboards over REST microservices and WebSocket streams handling large daily transaction volumes with sub-second performance and layered test coverage.',
    tags: ['React', 'Redux', 'WebSockets', 'Highcharts'],
  },
];
