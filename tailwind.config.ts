import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      colors: {
        'off-white': 'var(--color-off-white)',
        // Customize it on tailwind.css :root
        'border-divider': 'var(--color-border-divider)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',

        blue: {
          '100': 'var(--color-blue-100)',
          '200': 'var(--color-blue-200)',
          '300': 'var(--color-blue-300)',
          '400': 'var(--color-blue-400)',
          '500': 'var(--color-blue-500)',
          '600': 'var(--color-blue-600)',
          '700': 'var(--color-blue-700)',
          '800': 'var(--color-blue-800)',
          '900': 'var(--color-blue-900)',
        },
        warning: {
          '50': 'var(--color-warning-50)',
          '100': 'var(--color-warning-100)',
          '200': 'var(--color-warning-200)',
          '300': 'var(--color-warning-300)',
          '400': 'var(--color-warning-400)',
          '500': 'var(--color-warning-500)',
          '600': 'var(--color-warning-600)',
          '700': 'var(--color-warning-700)',
          '800': 'var(--color-warning-800)',
          '900': 'var(--color-warning-900)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
