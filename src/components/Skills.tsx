import { skills } from '../data/skills.ts';
import { Section } from './ui/Section.tsx';
import { Reveal } from './ui/Reveal.tsx';

export function Skills() {
  return (
    <Section id="skills" index="04" eyebrow="What I work with" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 0.06} className="card card-hover p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {group.category}
            </h3>
            {group.blurb && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{group.blurb}</p>
            )}
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
