export interface Role {
  company: string;
  role: string;
  /** Short project / programme label shown as a chip. */
  focus?: string;
  period: string;
  location: string;
  /** Whether this is a current role (renders a "Present" pulse). */
  current?: boolean;
  bullets: string[];
  tech: string[];
}

/**
 * Reverse-chronological employment history.
 * Wording and titles follow the latest CV; the fuller timeline (Infosys, 2010–2012)
 * is retained beyond the two-page CV so the history stays complete.
 */
export const experience: Role[] = [
  {
    company: 'JP Morgan Chase',
    role: 'Lead UI Engineer',
    focus: 'Compliance Central',
    period: 'Mar 2024 — Present',
    location: 'Glasgow, UK',
    current: true,
    bullets: [
      'Built a scalable portal hosting multiple compliance apps and dashboards for compliance officers — cutting end-user effort by 80% via guided workflows and streamlined monitoring.',
      'Integrated the Web Speech API for voice-to-text and streamlined guided journeys, raising user satisfaction by 50% (CSAT).',
      'Created a reusable, tree-shakeable component library and Vite Module Federation micro-frontends, enabling incremental adoption and independent deployments across teams.',
      'Drove AI enablement — AI-assisted code/test generation and pre-PR AI review agents scoring security, performance, accessibility and complexity — halving developer effort and cutting PR lead time.',
      'Hardened delivery with Vitest/RTL + Cypress, Stryker mutation testing, Lighthouse and bundle-analysis gates, and Turborepo caching — cutting time-to-production from 60 → 20 minutes.',
      'Own end-to-end architecture across the portfolio and mentor junior engineers on quality, testing, accessibility and performance.',
    ],
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Turborepo',
      'Module Federation',
      'Storybook',
      'Vitest',
      'Cypress',
      'Stryker',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    company: 'Barclays',
    role: 'Assistant Vice President',
    focus: 'Developer Knowledge Hub',
    period: 'Nov 2022 — Mar 2024',
    location: 'Glasgow, UK',
    bullets: [
      'Built a documentation platform consolidating install guides, runbooks and tooling standards, cutting Confluence sprawl and enabling deprecation of legacy toolchains to reduce license costs.',
      'Directed technical strategy across mobile and web documentation, standardising patterns and improving developer onboarding efficiency.',
    ],
    tech: ['React', 'TypeScript', 'Docusaurus', 'Vite', 'Jest'],
  },
  {
    company: 'JP Morgan Chase',
    role: 'Senior Associate',
    focus: 'Post-Trade Dashboards',
    period: 'Mar 2017 — Oct 2022',
    location: 'Glasgow, UK',
    bullets: [
      'Built high-throughput post-trade dashboards over REST microservices and WebSocket streams, achieving ~85% coverage with layered unit / integration / E2E tests.',
      'Operationalised CI/CD to Cloud Foundry with reusable Jenkins pattern builds and blue-green deploys — increasing deploy frequency and cutting change-failure rate by ~90%.',
      'Led and mentored a four-engineer squad and standardised an internal React toolkit (a11y, linting, Storybook) that removed duplicate UI code across teams.',
    ],
    tech: ['React', 'TypeScript', 'Redux', 'Highcharts', 'WebSockets', 'Jest', 'Cypress', 'Jenkins'],
  },
  {
    company: 'JP Morgan Chase',
    role: 'Associate',
    focus: 'Workflow Automation',
    period: 'Sep 2015 — Feb 2017',
    location: 'Glasgow, UK',
    bullets: [
      'Built a workflow automation platform for margin-call processing on resilient REST services, optimising queries and caching for low latency at scale.',
      'Implemented BDD quality gates (JUnit, Cucumber) in CI, reaching ~80% coverage and materially reducing regressions.',
    ],
    tech: ['Spring Boot', 'AngularJS', 'Java', 'Hibernate', 'REST', 'JUnit', 'Cucumber'],
  },
  {
    company: 'Infosys',
    role: 'Systems Engineer',
    focus: 'Monitoring & Automation',
    period: 'Jun 2010 — Sep 2012',
    location: 'Chennai, India',
    bullets: [
      'Designed a replication monitoring tool providing real-time feeds across multiple enterprise servers, with an intelligent error-notification system for proactive resolution.',
      'Automated digital-asset migration from legacy systems into a DAM tool, reducing manual migration effort by 80%.',
    ],
    tech: ['Java', 'C#', 'ASP.NET', 'Shell', 'Perl', 'HTML5', 'CSS3'],
  },
];
