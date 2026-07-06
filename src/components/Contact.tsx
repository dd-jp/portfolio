import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '../data/site.ts';
import { Reveal } from './ui/Reveal.tsx';

const icons = { GitHub: Github, LinkedIn: Linkedin, Email: Mail } as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-content">
        <Reveal className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-brand-500/10 via-transparent to-accent-cyan/10 p-10 text-center dark:border-white/10 sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
          />
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-500 dark:text-brand-400">
            Get in touch
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Let's build something{' '}
            <span className="text-gradient animate-gradient-pan">exceptional</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400">
            Whether it's web architecture, design systems, or applying AI to engineering — I'd love
            to hear about it.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-500"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            {site.socials.map((s) => {
              const Icon = icons[s.name];
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.name === 'Email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-slate-500 transition-colors hover:text-brand-500 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
