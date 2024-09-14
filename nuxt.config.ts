// https://nuxt.com/docs/api/configuration/nuxt-config
import * as daisyui from "daisyui";

const baseURL = process.env.NUXT_APP_BASE_URL
console.info('baseURL='+baseURL)
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: true
    },
  ],
  compatibilityDate: "2024-09-14",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    config: {
      content:["~/**/*.vue"],
      plugins: [daisyui],
    },
  },
  target: 'static',
})
