// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt'],
  supabase: {
    redirect: false,
  },
  
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config.ts',
  },
  
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'es',
        language: 'es-ES',
        file: 'es.json',
        name: 'Español',
      },
      {
        code: 'en',
        language: 'en-US',
        file: 'en.json',
        name: 'English',
        isCatchallLocale: true,
      },
      {
        code: 'pt',
        language: 'pt-BR',
        file: 'pt.json',
        name: 'Português',
      },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: true,
      cookieKey: 'anuness_i18n_redirected',
      redirectOn: 'root'
    }
  },
})