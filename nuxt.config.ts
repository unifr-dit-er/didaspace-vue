// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/icon"],
  typescript: {
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      apiProvider: "directus",
    },
  },
  i18n: {
    strategy: "prefix",
    locales: [
      { code: "fr", name: "Français", file: "fr.json" },
      { code: "de", name: "Deutsch", file: "de.json" },
    ],
    defaultLocale: "fr",
  },
});
