// https://nuxt.com/docs/api/configuration/nuxt-config
import * as daisyui from "daisyui";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      plugins: [daisyui],
    },
  },
})
