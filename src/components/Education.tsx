import { GraduationCap } from 'lucide-react';
import { education, languages } from '../data/education.ts';
import { Section } from './ui/Section.tsx';
import { Reveal } from './ui/Reveal.tsx';

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.institution} delay={i * 0.06} className="glass glass-hover p-6">
              <GraduationCap className="h-6 w-6 text-signal-600 dark:text-signal-300" />
              <h3 className="mt-4 text-lg font-semibold text-ink dark:text-frost-50">
                {e.institution}
              </h3>
              <p className="mt-1 text-ink/65 dark:text-frost-100/60">{e.qualification}</p>
              <p className="mt-1 text-sm text-signal-600 dark:text-signal-300">{e.detail}</p>
              <p className="mt-4 font-mono text-xs text-ink/55 dark:text-frost-100/55">
                {e.period} · {e.location}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="glass p-6">
          <h3 className="text-lg font-semibold text-ink dark:text-frost-50">Languages</h3>
          <ul className="mt-4 space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between">
                <span className="text-ink/75 dark:text-frost-100/70">{l.name}</span>
                <span className="text-sm text-ink/55 dark:text-frost-100/55">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
