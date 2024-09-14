// https://nuxt.com/docs/api/configuration/nuxt-config
import * as daisyui from "daisyui";

const baseURL = `${process.env.BASEURL ?? "/"}`
console.info('baseURL='+baseURL, process.env.BASEURL)
export default defineNuxtConfig({
  app: {
    baseURL: baseURL
  },
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
    config: {
      plugins: [daisyui],
    },
  },
})
