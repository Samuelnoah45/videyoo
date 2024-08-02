// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  primevue: {
    options: {
        unstyled: true,
        theme: {
            // preset: Aura
        }
    }
},
  modules: ["@nuxtjs/tailwindcss","nuxt-icon", '@primevue/nuxt-module']
})