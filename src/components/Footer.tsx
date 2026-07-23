import { site } from '../data/site.ts';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/30 py-10 font-mono dark:border-white/10">
      <div className="container-content flex flex-col items-center justify-between gap-4 text-xs text-ink/50 dark:text-frost-100/50 sm:flex-row">
        <p>
          © {year} {site.fullName}
        </p>
        <p>
          Built with React, TypeScript &amp; Tailwind ·{' '}
          <span className="text-ink/40 dark:text-frost-100/40">Glasgow, UK</span>
        </p>
      </div>
    </footer>
  );
}
