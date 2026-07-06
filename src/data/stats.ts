export interface Stat {
  value: string;
  label: string;
}

// Headline metrics from the latest CV — shown as a band under the profile summary.
export const stats: Stat[] = [
  { value: '11+', label: 'Years in UK financial services' },
  { value: '80%', label: 'Reduction in end-user effort' },
  { value: '50%', label: 'Uplift in user satisfaction (CSAT)' },
  { value: '60→20', label: 'Minutes: time-to-production' },
];
