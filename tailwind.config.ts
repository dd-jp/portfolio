import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Deep "ink" palette for the dark theme surfaces
        ink: {
          950: '#080a12',
          900: '#0b0e18',
          850: '#0f1320',
          800: '#141a2b',
          700: '#1c2438',
        },
        // Brand accent — electric indigo → violet gradient stops
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#a855f7',
          fuchsia: '#e879f9',
        },
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'blob-drift': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'blob-drift': 'blob-drift 18s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease forwards',
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
} satisfies Config;
