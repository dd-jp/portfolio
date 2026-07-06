export interface SkillGroup {
  category: string;
  /** Optional one-line framing for the group. */
  blurb?: string;
  items: string[];
}

// Skill groups mirror the latest CV, merged with the fuller stack from prior roles.
export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    blurb: 'Building accessible, performant product UI at scale.',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'React Flow',
      'TanStack Query',
      'Redux',
    ],
  },
  {
    category: 'Quality & Testing',
    blurb: 'Confidence beyond line coverage.',
    items: [
      'Vitest',
      'Jest',
      'React Testing Library',
      'Cypress',
      'Stryker (mutation testing)',
      'Storybook visual testing',
      'Axe',
      'WCAG 2.2 AA',
    ],
  },
  {
    category: 'Platform & Tooling',
    blurb: 'Monorepos, CI/CD and safe rollouts.',
    items: [
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Turborepo',
      'Yarn Workspaces',
      'Vite',
      'Rollup',
      'Module Federation',
      'REST',
      'WebSockets',
      'OpenAPI',
    ],
  },
  {
    category: 'AI Engineering',
    blurb: 'Applying LLMs to real engineering workflows.',
    items: [
      'LLM integration',
      'Prompt & context engineering',
      'AI agent skills',
      'AI-assisted migration',
      'AI code review agents',
      'Declarative UI generation',
    ],
  },
  {
    category: 'Leadership',
    blurb: 'Growing teams and setting the technical bar.',
    items: [
      'Web architecture',
      'Technical leadership',
      'Mentoring & coaching',
      'Architecture governance',
      'Senior stakeholder communication',
    ],
  },
];
