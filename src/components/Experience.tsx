import { experience } from '../data/experience.ts';
import { Section } from './ui/Section.tsx';
import { Reveal } from './ui/Reveal.tsx';

export function Experience() {
  return (
    <Section id="experience" index="02" eyebrow="Where I've worked" title="Experience">
      <ol className="relative border-l border-slate-200 dark:border-white/10">
        {experience.map((role, i) => (
          <Reveal as="li" key={`${role.company}-${role.period}`} delay={i * 0.05} className="mb-10 ml-6 last:mb-0">
            {/* Timeline node */}
            <span
              className={`absolute -left-[7px] mt-2 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white dark:border-ink-950 ${
                role.current ? 'bg-brand-500' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            >
              {role.current && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              )}
            </span>

            <div className="card card-hover p-6">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {role.role}
                    <span className="text-brand-500 dark:text-brand-400"> · {role.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {role.location}
                    {role.focus && (
                      <>
                        <span className="mx-2 text-slate-300 dark:text-slate-600">•</span>
                        {role.focus}
                      </>
                    )}
                  </p>
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {role.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-slate-600 dark:text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
