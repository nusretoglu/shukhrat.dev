// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/icon'
  ],
  icon: {
    // Icons render at the surrounding font-size and currentColor by default.
    mode: 'svg',
    class: 'inline-block',
  },
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true
  },
  app: {
    // Dark by default — prevents a light flash before hydration.
    head: {
      htmlAttrs: { lang: 'en', class: 'dark' },
      meta: [
        { name: 'theme-color', content: '#0a0a0f' }
      ]
    }
  }
})
