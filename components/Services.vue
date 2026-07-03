<template>
  <section id="services" class="py-28">
    <div class="container mx-auto px-6">
      <div class="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading eyebrow="Expertise" class="md:max-w-2xl">
          Specialized solutions<br />for the <span class="gradient-text">modern web</span>.
        </SectionHeading>
        <p v-reveal="100" class="text-muted md:max-w-xs">
          End-to-end frontend architecture and development for high-growth startups and enterprises.
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(service, i) in services"
          :key="service.title"
          v-reveal="i * 90"
          class="glass-card gradient-border group flex flex-col rounded-3xl p-8"
        >
          <div class="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-500/20 to-accent-700/20 text-accent-600 transition-transform duration-300 group-hover:scale-110 dark:text-accent-300">
            <Icon :name="service.icon" class="h-7 w-7" />
          </div>
          <h3 class="heading mb-3 text-xl">{{ service.title }}</h3>
          <p class="text-sm leading-relaxed text-muted">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { title: 'Nuxt / Vue', description: 'Fast, SEO-friendly applications with modern SSR/SSG patterns.', icon: 'simple-icons:nuxt' },
  { title: 'UX / UI Architecture', description: 'Design systems that bridge the gap between design and code.', icon: 'lucide:ruler' },
  { title: 'State Logic', description: 'Advanced Pinia state management for complex, data-driven dashboards.', icon: 'lucide:brain' },
  { title: 'Performance', description: 'Optimizing Core Web Vitals and smooth, 60fps interactions.', icon: 'lucide:gauge' },
]
</script>
