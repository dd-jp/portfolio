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
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      {/* Floating glass dock */}
      <nav
        className={`mx-auto flex h-14 max-w-content items-center justify-between rounded-full border px-4 backdrop-blur-xl transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'border-white/50 bg-white/60 shadow-[0_8px_32px_-12px_rgba(20,25,60,0.25)] dark:border-white/10 dark:bg-white/[0.08] dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]'
            : 'border-white/30 bg-white/30 dark:border-white/5 dark:bg-white/[0.03]'
        }`}
        aria-label="Primary"
      >
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink dark:text-frost-50">
          Deepak<span className="text-signal-500">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'bg-signal-500/15 text-signal-600 dark:text-signal-300'
                    : 'text-ink/60 hover:text-ink dark:text-frost-100/60 dark:hover:text-frost-50'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={site.resumePath} download className="btn-glass hidden !px-4 !py-1.5 !text-xs sm:inline-flex">
            Résumé
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-ink/70 dark:border-white/10 dark:text-frost-100/70 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — its own glass panel, detached below the dock */}
      {menuOpen && (
        <div className="glass mx-auto mt-2 max-w-content md:hidden">
          <ul className="flex flex-col p-2">
            {site.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    active === item.id
                      ? 'bg-signal-500/15 text-signal-600 dark:text-signal-300'
                      : 'text-ink/70 hover:bg-white/40 dark:text-frost-100/70 dark:hover:bg-white/5'
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
