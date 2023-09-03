/** @type {import('tailwindcss').Config} */

import iOSHeight from '@rvxlab/tailwind-plugin-ios-full-height';

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
export const plugins = [
  iOSHeight,
];
