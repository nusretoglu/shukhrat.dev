<template>
  <div class="relative min-h-screen overflow-x-hidden bg-slate-50 dark:bg-[#070710] text-slate-700 dark:text-slate-300">
    <!-- Fixed ambient gradient background, shared across all sections -->
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full bg-accent-500/20 dark:bg-accent-600/25 blur-3xl animate-blob"></div>
      <div class="absolute top-1/3 -right-32 h-[38rem] w-[38rem] rounded-full bg-accent-600/15 dark:bg-accent-700/20 blur-3xl animate-blob [animation-delay:-6s]"></div>
      <div class="absolute bottom-0 left-1/4 h-[34rem] w-[34rem] rounded-full bg-accent-400/15 dark:bg-accent-800/25 blur-3xl animate-blob [animation-delay:-12s]"></div>
      <!-- Subtle grid texture -->
      <div
        class="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 36px 36px;"
      ></div>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup>
const siteTitle = 'Shukhrat — Frontend Architect & Nuxt Expert'
const siteDesc =
  'Portfolio of Shukhrat, a senior frontend developer crafting high-performance, scalable web experiences with Nuxt 3, Vue.js and TypeScript.'

useHead({
  title: siteTitle,
  meta: [
    { name: 'description', content: siteDesc },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: siteTitle },
    { property: 'og:description', content: siteDesc },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: siteTitle },
    { name: 'twitter:description', content: siteDesc },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>
