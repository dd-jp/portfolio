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
      className="grid h-9 w-9 place-items-center rounded-full border border-white/40 bg-white/40 text-ink/70 backdrop-blur-sm transition-colors hover:text-signal-500 dark:border-white/10 dark:bg-white/5 dark:text-frost-100/70 dark:hover:text-signal-400"
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
