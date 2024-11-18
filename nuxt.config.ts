// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/icon'
  ],
  i18n: {
    strategy: "prefix",
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'fr', language: 'fr-FR'},
      { code: 'de', language: 'de-DE'},
      { code: 'it', language: 'it-IT'}
    ],
    defaultLocale: "fr"
  },
})