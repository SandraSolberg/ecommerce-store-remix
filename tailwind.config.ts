import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pure-white': '#FFFF',
        'pale-blue': '#eef5ff',
        'grey-100': '#f5f5f5',

        // Customize it on tailwind.css :root
        primary: 'var(--color-primary)',
        'blue-025': 'var(--color-blue-025)',
        'blue-030': 'var(--color-blue-030)',
        'baby-blue': '#b2cff5',
        'primary-blue': '#1767ce',
      },

      textColor: {},
    },
  },
  plugins: [],
} satisfies Config;
