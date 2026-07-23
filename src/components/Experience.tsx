import { experience } from '../data/experience.ts';
import { Section } from './ui/Section.tsx';
import { Reveal } from './ui/Reveal.tsx';

export function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've worked" title="Experience">
      <ol className="relative border-l border-white/40 dark:border-white/10">
        {experience.map((role, i) => (
          <Reveal as="li" key={`${role.company}-${role.period}`} delay={i * 0.05} className="mb-10 ml-6 last:mb-0">
            {/* Timeline node — glowing for the current role, dim otherwise */}
            <span
              className={`absolute -left-[7px] mt-2 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-frost-100 dark:border-void-900 ${
                role.current ? 'bg-signal-500' : 'bg-ink/25 dark:bg-frost-100/25'
              }`}
            >
              {role.current && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-400 opacity-75" />
              )}
            </span>

            <div className="glass glass-hover p-6">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-xl font-semibold text-ink dark:text-frost-50">
                    {role.role}
                    <span className="text-signal-600 dark:text-signal-300"> · {role.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-ink/55 dark:text-frost-100/55">
                    {role.location}
                    {role.focus && (
                      <>
                        <span className="mx-2 text-ink/25 dark:text-frost-100/25">•</span>
                        {role.focus}
                      </>
                    )}
                  </p>
                </div>
                <span className="font-mono text-xs text-ink/55 dark:text-frost-100/55">
                  {role.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-ink/70 dark:text-frost-100/65">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal-500" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/30 pt-4 dark:border-white/10">
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
