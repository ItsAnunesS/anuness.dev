/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './plugins/**/*.{js,ts,mjs}',
    './composables/**/*.{js,ts,mjs}',
    './utils/**/*.{js,ts,mjs}',
    './{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
    './{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
    './app.config.{js,ts,mjs}',
    './app/spa-loading-template.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: false,
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
}

