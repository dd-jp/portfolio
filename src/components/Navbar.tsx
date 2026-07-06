import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '../data/site.ts';
import { useScrollSpy } from '../hooks/useScrollSpy.ts';
import type { Theme } from '../hooks/useTheme.ts';
import { ThemeToggle } from './ThemeToggle.tsx';

const navIds = site.nav.map((n) => n.id);

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const active = useScrollSpy(navIds);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-lg dark:border-white/5 dark:bg-ink-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Deepak<span className="text-brand-500 dark:text-brand-400">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                <span className="font-mono text-xs text-brand-400/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.resumePath}
            download
            className="hidden rounded-full border border-brand-500/40 px-4 py-1.5 text-sm font-medium text-brand-600 transition-colors hover:bg-brand-500/10 dark:text-brand-400 sm:inline-flex"
          >
            Résumé
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 dark:border-white/10 dark:text-slate-300 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-200/70 bg-white/95 backdrop-blur-lg dark:border-white/5 dark:bg-ink-950/95 md:hidden">
          <ul className="container-content flex flex-col py-2">
            {site.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === item.id
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
