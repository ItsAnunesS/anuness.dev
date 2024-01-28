// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@tresjs/nuxt',
    '@vant/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-bootstrap-icons',
    '@nuxtjs/i18n',
    'nuxt-vitest',
  ],
  tres: {
    devtools: true,
    glsl: true,
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/config/tailwind.config.js',
    viewer: true,
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  googleFonts: {
    download: true,
    base64: true,
    inject: true,
    families: {
      Play: true,
      Poppins: true,
    },
    display: 'swap',
  },
  i18n: {
    baseUrl: 'https://anuness.dev',
    vueI18n: './config/i18n.config.ts',
    langDir: './locales',
    strategy: 'no_prefix',
    defaultLocale: 'us',
    lazy: true,
    locales: [
      {
        code: 'us',
        iso: 'en-US',
        file: 'en-US.json'
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es-ES.json'
      },
      {
        code: 'br',
        iso: 'pt-BR',
        file: 'pt-BR.json'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_anuness_redirected',
      redirectOn: 'root',
    }
  }
})