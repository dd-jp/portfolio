import { site } from '../data/site.ts';
import { stats } from '../data/stats.ts';
import { Section } from './ui/Section.tsx';
import { Reveal } from './ui/Reveal.tsx';

export function About() {
  return (
    <Section id="about" index="01" eyebrow="Profile" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          <p>{site.summary}</p>
          <p>{site.summarySecondary}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card card-hover p-5">
                <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  {s.value}
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
