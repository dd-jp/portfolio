export interface Education {
  institution: string;
  qualification: string;
  detail: string;
  period: string;
  location: string;
}

export const education: Education[] = [
  {
    institution: 'University of Southampton',
    qualification: 'MSc, Microelectronics System Design',
    detail: 'Graduated with Distinction',
    period: '2012 — 2013',
    location: 'Southampton, UK',
  },
  {
    institution: 'Karunya University',
    qualification: 'BE, Electronics & Communication',
    detail: 'Graduated with Distinction',
    period: '2006 — 2010',
    location: 'Coimbatore, India',
  },
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: 'English', level: 'Highly proficient' },
  { name: 'Tamil', level: 'Native speaker' },
];
