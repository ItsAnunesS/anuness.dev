// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@tresjs/nuxt',
		'@nuxtjs/tailwindcss',
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxtjs/i18n',
	],
	devtools: { enabled: true },
	compatibilityDate: '2024-11-01',
	nitro: {
		static: true,
	},
	eslint: {
		config: {
			autoInit: true,
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
	i18n: {
		baseUrl: 'https://anuness.dev',
		vueI18n: './i18n.config.ts',
		locales: [
			{
				code: 'us',
				language: 'en-US',
				isCatchallLocale: true,
				file: 'en-US.json',
				dir: 'ltr',
			},
			{
				code: 'gb',
				language: 'en-GB',
				file: 'en-GB.json',
				dir: 'ltr',
			},
			{
				code: 'es',
				language: 'es-ES',
				isCatchallLocale: true,
				file: 'es-ES.json',
				dir: 'ltr',
			},
			{
				code: 'br',
				language: 'pt-BR',
				isCatchallLocale: true,
				file: 'pt-BR.json',
				dir: 'ltr',
			},
			{
				code: 'pt',
				language: 'pt-PT',
				file: 'pt-PT.json',
				dir: 'ltr',
			},
		],
		lazy: true,
		strategy: 'prefix_and_default',
		defaultLocale: 'us',
		detectBrowserLanguage: {
			useCookie: true,
			cookieCrossOrigin: true,
			alwaysRedirect: true,
			cookieKey: 'anuness_i18n_redirected',
			redirectOn: 'root',
		},
	},
	tailwindcss: {
		cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
		configPath: 'tailwind.config',
		exposeConfig: {
			level: 2,
		},
		config: {},
		viewer: true,
	},
	tres: {
		devtools: true,
		glsl: true,
	},
});
