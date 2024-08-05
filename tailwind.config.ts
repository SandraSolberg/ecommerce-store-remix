import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pure-white': '#FFFF',
        'pale-blue': '#eef5ff',
        'grey-100': '#f5f5f5',
      },

      textColor: {},
    },
  },
  plugins: [],
} satisfies Config;
