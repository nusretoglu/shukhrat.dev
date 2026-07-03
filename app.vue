<template>
  <div class="relative min-h-screen overflow-x-hidden text-slate-700 dark:text-slate-300">
    <!-- Fixed ambient aurora background, shared across all sections -->
    <SiteBackground />

    <!-- Cursor-reactive constellation network, layered over the aurora -->
    <ConstellationField />

    <!-- Cursor-following spotlight (desktop, fine-pointer only) -->
    <CursorGlow />

    <NuxtPage />
  </div>
</template>

<script setup>
const siteTitle = 'Shukhrat Teshaev — Full Stack Developer (Nuxt & Vue)'
const siteDesc =
  'Portfolio of Shukhrat Teshaev, a Full Stack Developer with 3+ years of experience crafting high-performance web experiences with Nuxt 3, Vue.js, TypeScript and PostgreSQL.'

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
