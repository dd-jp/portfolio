import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projects } from '../data/projects.ts';
import { Section } from './ui/Section.tsx';
import { Reveal } from './ui/Reveal.tsx';

export function Projects() {
  return (
    <Section id="work" index="03" eyebrow="Selected architectural & AI work" title="Work">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            delay={(i % 3) * 0.06}
            className={`card card-hover group relative flex flex-col p-6 ${
              p.featured ? 'sm:col-span-1' : ''
            }`}
          >
            {p.featured && (
              <span className="absolute right-5 top-5 text-brand-400/60 transition-transform group-hover:scale-110">
                <Sparkles className="h-4 w-4" />
              </span>
            )}

            <span className="text-xs font-medium uppercase tracking-wider text-brand-500 dark:text-brand-400">
              {p.category}
            </span>
            <h3 className="mt-2 text-lg font-semibold leading-snug text-slate-900 dark:text-white">
              {p.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {p.description}
            </p>

            {p.metric && (
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white">
                <ArrowUpRight className="h-4 w-4 text-brand-500" />
                {p.metric}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4 dark:border-white/5">
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
