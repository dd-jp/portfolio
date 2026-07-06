// Minimal Google Analytics 4 loader.
// Only runs in production builds when VITE_GA_ID is set — dev builds never load it,
// and an un-configured production build renders no tracking script at all.

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function initAnalytics(): void {
  const id = import.meta.env.VITE_GA_ID as string | undefined;

  if (!import.meta.env.PROD || !id) return;
  if (document.querySelector(`script[data-ga="${id}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.dataset.ga = id;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id);
}
