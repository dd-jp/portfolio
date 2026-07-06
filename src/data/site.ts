export interface SocialLink {
  name: 'GitHub' | 'LinkedIn' | 'Email';
  label: string;
  url: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export const site = {
  name: 'Deepak David',
  fullName: 'Deepak David Joseph Periyanayagam',
  title: 'Lead UI Engineer & Web Architect',
  location: 'Glasgow, United Kingdom',
  email: 'dpkdavid@yahoo.com',
  phone: '+447497355038',
  resumePath: '/Deepak_David_Resume.pdf',
  profileImage: '/profile-image.jpg',

  // Short, punchy hero lines
  tagline: 'I architect secure, scalable web platforms for regulated financial environments.',
  heroKicker: 'Engineering leader · Web Architect',

  // Longer profile summary (About section) — sourced from the latest CV
  summary:
    'Engineering leader and Web Architect with 11 years in UK financial services (JP Morgan Chase, Barclays), leading the architecture and delivery of secure, scalable web platforms for regulated environments. I own end-to-end web application architecture — React, Next.js, TypeScript, design systems, and micro-frontends — backed by CI/CD on Docker and Kubernetes.',
  summarySecondary:
    'I drive AI adoption across engineering — pioneering LLM-driven Angular-to-React conversion and OpenAPI-aware declarative UI generation — and build high-performing teams through structured mentoring, architecture governance, and engineering standards spanning WCAG 2.2 AA accessibility, mutation testing, and observability.',

  socials: [
    { name: 'GitHub', label: 'github.com/dd-jp', url: 'https://github.com/dd-jp' },
    { name: 'LinkedIn', label: 'linkedin.com/in/jpdd08', url: 'https://www.linkedin.com/in/jpdd08/' },
    { name: 'Email', label: 'dpkdavid@yahoo.com', url: 'mailto:dpkdavid@yahoo.com' },
  ] satisfies SocialLink[],

  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ] satisfies NavItem[],
} as const;
