<template>
  <div>
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-white"
    >
      Skip to content
    </a>

    <AppHeader />
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Stats />
      <Portfolio />
      <Timeline />
      <Testimonials />
      <Contact />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// Page-specific head; site-wide defaults live in app.vue.
useHead({
  title: 'Shukhrat — Frontend Architect & Nuxt Expert',
})
</script>
