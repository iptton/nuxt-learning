// https://nuxt.com/docs/api/configuration/nuxt-config
import * as daisyui from "daisyui";
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: true
    },
  ],
  compatibilityDate: '2024-07-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      plugins: [daisyui],
    },
  },
})
