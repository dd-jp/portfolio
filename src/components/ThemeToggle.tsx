import { Moon, Sun } from 'lucide-react';
import type { Theme } from '../hooks/useTheme.ts';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-600 transition-colors hover:text-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-400"
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
