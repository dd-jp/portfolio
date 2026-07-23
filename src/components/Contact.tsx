import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '../data/site.ts';
import { Reveal } from './ui/Reveal.tsx';

const icons = { GitHub: Github, LinkedIn: Linkedin, Email: Mail } as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-content">
        <Reveal className="glass p-10 text-center sm:p-16">
          <span className="chip w-fit text-signal-600 dark:text-signal-300">Get in touch</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">
            Let's build something exceptional.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink/65 dark:text-frost-100/60">
            Whether it's web architecture, design systems, or applying AI to engineering — I'd love
            to hear about it.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${site.email}`} className="btn-glass-primary inline-flex items-center gap-2">
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
                  className="text-ink/55 transition-colors hover:text-signal-500 dark:text-frost-100/55 dark:hover:text-signal-300"
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
