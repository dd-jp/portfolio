import type { ReactNode } from 'react';
import { Reveal } from './Reveal.tsx';

interface SectionProps {
  id: string;
  /** Optional index, kept for API compatibility; unused in the glass layout. */
  index?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, eyebrow, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className ?? ''}`}>
      <div className="container-content">
        <Reveal>
          <div className="mb-12 flex flex-col gap-3">
            {eyebrow && (
              <span className="chip w-fit uppercase tracking-[0.15em] text-signal-600 dark:text-signal-300">
                {eyebrow}
              </span>
            )}
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
