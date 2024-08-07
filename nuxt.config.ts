// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    static: true
  },
  
  modules: [
    '@tresjs/nuxt',
    '@vant/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-bootstrap-icons',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/i18n',
    'nuxt-vitest',
    '@nuxtjs/web-vitals',
    '@productdevbook/chatwoot',
    'nuxt-appwrite',
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

  appwrite: {
    endpoint: 'https://appwrite.anuness.dev/v1',
    project: 'dev',
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

  webVitals: {
    provider: 'log',
    debug: false,
    disabled: false
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
  },

  chatwoot: {
    init: {
      websiteToken: 'S6LfFeuotuYKkojNhNV4xVux',
      baseUrl: 'https://helpdesk.anuness.dev',
    },
    settings: {
      locale: 'en',
      position: 'right',
    },
    partytown: false,
  },

  compatibilityDate: '2024-07-06'
})
