<template>
  <section id="portfolio" class="py-28">
    <div class="container mx-auto px-6">
      <SectionHeading eyebrow="Selected work" center class="mb-12">
        Featured <span class="gradient-text">projects</span>.
      </SectionHeading>

      <!-- Filters -->
      <div v-reveal class="mb-12 flex flex-wrap justify-center gap-3">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="currentCategory = cat"
          class="rounded-xl px-5 py-2.5 text-sm font-medium transition-all"
          :class="currentCategory === cat
            ? 'bg-gradient-to-r from-accent-600 to-accent-700 text-white shadow-md shadow-accent-600/20'
            : 'glass text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid -->
      <TransitionGroup
        tag="div"
        class="grid gap-6 md:grid-cols-2"
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 scale-95"
        leave-active-class="transition duration-300 ease-in absolute"
        leave-to-class="opacity-0 scale-95"
        move-class="transition-transform duration-500"
      >
        <article
          v-for="project in filteredProjects"
          :key="project.title"
          class="group relative aspect-[16/10] overflow-hidden rounded-[2rem] glass-card gradient-border p-0"
        >
          <!-- Cover -->
          <div class="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
            <div class="grid h-full place-items-center font-display text-2xl font-bold uppercase tracking-tight text-slate-400 dark:text-slate-600">
              {{ project.title }}
            </div>
          </div>

          <!-- Hover overlay -->
          <div class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">{{ project.category }}</span>
            <h3 class="mb-5 font-display text-2xl font-bold text-white">{{ project.title }}</h3>
            <div class="flex gap-3">
              <a v-magnetic="10" href="#" class="rounded-xl bg-white/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-accent-600">Case study</a>
              <a v-magnetic="10" href="#" class="rounded-xl border border-white/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-slate-900">Live demo</a>
            </div>
          </div>
        </article>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
const categories = ['All', 'Web Apps', 'Design Systems', 'Open Source']
const currentCategory = ref('All')

const projects = [
  { title: 'Fintech Dashboard', category: 'Web Apps' },
  { title: 'Atomic Design Kit', category: 'Design Systems' },
  { title: 'SaaS Platform', category: 'Web Apps' },
  { title: 'Nuxt Module', category: 'Open Source' },
]

const filteredProjects = computed(() =>
  currentCategory.value === 'All'
    ? projects
    : projects.filter((p) => p.category === currentCategory.value)
)
</script>
