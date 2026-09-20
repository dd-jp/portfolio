import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Social scrapers reject relative og:image URLs. Netlify's URL is the primary
// domain (production only); DEPLOY_PRIME_URL covers branch deploys and previews.
// Locally both are unset, so the path stays relative.
function siteUrlPlugin(): Plugin {
  const siteUrl =
    (process.env.CONTEXT === 'production' ? process.env.URL : process.env.DEPLOY_PRIME_URL) ?? '';
  return {
    name: 'site-url',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteUrlPlugin()],
});
