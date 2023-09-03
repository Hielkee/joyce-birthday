/** @type {import('tailwindcss').Config} */

export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    fontFamily: {
      dynapuff: ['var(--font-dynapuff)'],
    },
  },
};
export const plugins = [];
