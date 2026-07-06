import type { ReactNode } from 'react';
import { Reveal } from './Reveal.tsx';

interface SectionProps {
  id: string;
  /** Two-digit index shown as a monospace accent, e.g. "01". */
  index?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, index, title, eyebrow, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className ?? ''}`}>
      <div className="container-content">
        <Reveal>
          <div className="mb-12 flex flex-col gap-3">
            {eyebrow && (
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-500 dark:text-brand-400">
                {eyebrow}
              </span>
            )}
            <div className="flex items-baseline gap-4">
              {index && (
                <span className="font-mono text-lg text-brand-400/70 dark:text-brand-400/60">
                  {index}
                </span>
              )}
              <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-brand-400/50 via-slate-200 to-transparent dark:via-white/10" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
