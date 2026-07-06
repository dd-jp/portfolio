import { GraduationCap } from 'lucide-react';
import { education, languages } from '../data/education.ts';
import { Section } from './ui/Section.tsx';
import { Reveal } from './ui/Reveal.tsx';

export function Education() {
  return (
    <Section id="education" index="05" eyebrow="Background" title="Education">
      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.institution} delay={i * 0.06} className="card card-hover p-6">
              <GraduationCap className="h-6 w-6 text-brand-500 dark:text-brand-400" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {e.institution}
              </h3>
              <p className="mt-1 text-slate-600 dark:text-slate-400">{e.qualification}</p>
              <p className="mt-1 text-sm text-brand-600 dark:text-brand-400">{e.detail}</p>
              <p className="mt-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                {e.period} · {e.location}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Languages</h3>
          <ul className="mt-4 space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">{l.name}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
