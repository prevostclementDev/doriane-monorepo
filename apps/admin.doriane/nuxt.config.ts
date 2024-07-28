// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules : [ '@doriane/stores', '@doriane/ui', '@doriane/plugins' ],
  compatibilityDate: '2024-07-08'
})