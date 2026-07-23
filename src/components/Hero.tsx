import { useRef } from 'react';
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
  const panelRef = useRef<HTMLDivElement>(null);

  // Cursor-tracked specular highlight — the glass panel's glare follows the mouse.
  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    panelRef.current?.style.setProperty('--mx', `${x}%`);
    panelRef.current?.style.setProperty('--my', `${y}%`);
  };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-28">
      <div className="container-content">
        <motion.div
          ref={panelRef}
          onMouseMove={handlePointerMove}
          variants={container}
          initial="hidden"
          animate="show"
          className="glass group relative p-8 sm:p-12 lg:p-16"
          style={{ ['--mx' as string]: '30%', ['--my' as string]: '20%' }}
        >
          {/* Specular highlight that tracks the cursor across the glass */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(480px circle at var(--mx) var(--my), rgba(255,255,255,0.35), transparent 60%)',
            }}
          />
          <div className="pointer-events-none absolute inset-0 hidden dark:block dark:opacity-0 dark:transition-opacity dark:duration-300 dark:group-hover:opacity-100" aria-hidden
            style={{
              background:
                'radial-gradient(480px circle at var(--mx) var(--my), rgba(255,255,255,0.14), transparent 60%)',
            }}
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <motion.h1
                variants={item}
                className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink dark:text-frost-50 sm:text-6xl lg:text-7xl"
              >
                {site.name}
              </motion.h1>

              <motion.p variants={item} className="mt-4 text-xl font-semibold text-signal-600 dark:text-signal-300 sm:text-2xl">
                {site.title}
              </motion.p>

              <motion.p
                variants={item}
                className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70 dark:text-frost-100/65"
              >
                {site.tagline}
              </motion.p>

              <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn-glass-primary">
                  Get in touch
                </a>
                <a href={site.resumePath} download className="btn-glass inline-flex items-center gap-2">
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
                      className="text-ink/60 transition-colors hover:text-signal-500 dark:text-frost-100/60 dark:hover:text-signal-300"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
                <span className="inline-flex items-center gap-1.5 text-sm text-ink/60 dark:text-frost-100/60">
                  <MapPin className="h-4 w-4" />
                  {site.location}
                </span>
              </motion.div>
            </div>

            {/* Portrait — its own glass lens, tilting gently toward the cursor */}
            <motion.div
              initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduce ? 0 : 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto lg:mx-0 lg:justify-self-end"
            >
              <div className="glass relative w-36 overflow-hidden !rounded-[2rem] p-2 sm:w-44 lg:w-52">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                  <img
                    src={site.profileImage}
                    alt={site.fullName}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
