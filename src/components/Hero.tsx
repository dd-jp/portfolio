import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowDownToLine, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { site } from '../data/site.ts';

const socialIcon = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
} as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      {/* Animated gradient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid text-slate-200/60 dark:text-white/[0.04]" />
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl animate-blob-drift dark:bg-brand-600/20" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent-violet/20 blur-3xl animate-blob-drift [animation-delay:-6s] dark:bg-accent-violet/15" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-cyan/20 blur-3xl animate-blob-drift [animation-delay:-12s] dark:bg-accent-cyan/10" />
      </div>

      <div className="container-content">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]"
        >
          <div>
            <motion.p
              variants={item}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-4 py-1.5 text-sm font-medium text-brand-600 dark:text-brand-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              {site.heroKicker}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
            >
              {site.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-2xl font-semibold sm:text-3xl lg:text-4xl"
            >
              <span className="text-gradient animate-gradient-pan">{site.title}</span>
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {site.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-500"
              >
                Get in touch
              </a>
              <a
                href={site.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:text-white dark:hover:text-brand-300"
              >
                <ArrowDownToLine className="h-4 w-4" />
                Download résumé
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-5">
              {site.socials.map((s) => {
                const Icon = socialIcon[s.name];
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
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="h-4 w-4" />
                {site.location}
              </span>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduce ? 0 : 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto lg:mx-0 lg:justify-self-end"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-1.5 rounded-[1.75rem] bg-gradient-to-tr from-brand-500 via-accent-violet to-accent-cyan opacity-40 blur-md"
              />
              <div className="relative aspect-[4/5] w-40 overflow-hidden rounded-[1.5rem] border border-white/15 sm:w-52">
                <img
                  src={site.profileImage}
                  alt={site.fullName}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
