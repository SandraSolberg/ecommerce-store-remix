import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pure-white': '#FFFF',

        // Customize it on tailwind.css :root
        'border-divider': 'var(--color-border-divider)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',

        blue: {
          '100': 'var(--color-blue-010)',
          '200': 'var(--color-blue-020)',
          '300': 'var(--color-blue-030)',
          '400': 'var(--color-blue-040)',
          '500': 'var(--color-blue-050)',
          '600': 'var(--color-blue-060)',
          '700': 'var(--color-blue-070)',
          '800': 'var(--color-blue-080)',
          '900': 'var(--color-blue-090)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
