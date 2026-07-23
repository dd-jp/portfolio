import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projects } from '../data/projects.ts';
import { Section } from './ui/Section.tsx';
import { Reveal } from './ui/Reveal.tsx';

export function Projects() {
  return (
    <Section id="work" eyebrow="Selected architectural & AI work" title="Work">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            delay={(i % 3) * 0.06}
            className={`glass-lite glass-lite-hover group relative flex flex-col p-6 ${
              p.featured ? 'sm:col-span-1' : ''
            }`}
          >
            {p.featured && (
              <span className="absolute right-5 top-5 text-signal-500 transition-transform group-hover:scale-110">
                <Sparkles className="h-4 w-4" />
              </span>
            )}

            <span className="font-mono text-xs font-medium uppercase tracking-wider text-signal-600 dark:text-signal-300">
              {p.category}
            </span>
            <h3 className="mt-2 text-lg font-semibold leading-snug text-ink dark:text-frost-50">
              {p.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65 dark:text-frost-100/60">
              {p.description}
            </p>

            {p.metric && (
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink dark:text-frost-50">
                <ArrowUpRight className="h-4 w-4 text-signal-500" />
                {p.metric}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/30 pt-4 dark:border-white/10">
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
