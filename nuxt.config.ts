// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  modules: ["@vueuse/motion/nuxt"],
});
