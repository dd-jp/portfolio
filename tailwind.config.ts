import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Void — dark-mode ambient backdrop for the glass to float over
        void: {
          950: '#07070D',
          900: '#0A0A14',
          800: '#11121F',
          700: '#181A2C',
        },
        // Frost — light-mode ambient backdrop (cool pearl, not warm cream)
        frost: {
          50: '#FBFCFF',
          100: '#F2F4FA',
          200: '#E6E9F5',
        },
        // Signal blue — the one accent used for text/UI: links, active states, primary actions
        signal: {
          300: '#8FB8FF',
          400: '#6BA0FF',
          500: '#4D8DFF',
          600: '#3A6FE0',
        },
        // Ambient-only hues — used strictly in background blobs/glow, never as text or borders
        aurora: '#9B6BFF',
        mint: '#4DE8D0',
        ink: '#161822',
        cloud: '#8991A8',
      },
      maxWidth: {
        content: '72rem',
      },
      borderRadius: {
        glass: '1.75rem',
        chip: '0.9rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'blob-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-150% 0' },
          '100%': { backgroundPosition: '150% 0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'blob-float': 'blob-float 22s ease-in-out infinite',
        'blob-float-slow': 'blob-float 30s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        'fade-in': 'fade-in 0.8s ease forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
