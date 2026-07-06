import { site } from '../data/site.ts';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/70 py-10 dark:border-white/5">
      <div className="container-content flex flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
        <p>
          © {year} {site.fullName}
        </p>
        <p>
          Built with React, TypeScript &amp; Tailwind ·{' '}
          <span className="text-slate-400 dark:text-slate-500">Glasgow, UK</span>
        </p>
      </div>
    </footer>
  );
}
