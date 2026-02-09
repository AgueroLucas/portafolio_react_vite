/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-900': '#0f172a',
        'slate-700': '#334155',
        'slate-600': '#475569',
        'slate-500': '#64748b',
        'slate-200': '#e2e8f0',
        'slate-100': '#f1f5f9',
        'slate-50': '#f8fafc',
        'blue-700': '#1e40af',
        'blue-600': '#3b82f6',
        'blue-500': '#3b82f6',
        'blue-100': '#dbeafe',
        'blue-50': '#eff6ff',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
}