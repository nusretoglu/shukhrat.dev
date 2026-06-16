<template>
  <section id="resume" class="py-28">
    <div class="container mx-auto px-6">
      <SectionHeading eyebrow="Professional journey" class="mb-16">
        My brief <span class="gradient-text">story</span>.
      </SectionHeading>

      <div class="grid gap-16 lg:grid-cols-2">
        <div v-for="col in columns" :key="col.title">
          <h3 v-reveal class="mb-10 flex items-center gap-3 font-display text-xl font-bold text-slate-900 dark:text-white">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-white">
              <Icon :name="col.icon" class="h-5 w-5" />
            </span>
            {{ col.title }}
          </h3>

          <div class="relative ml-5 space-y-10 border-l border-slate-200 pl-10 dark:border-white/10">
            <div
              v-for="(item, i) in col.items"
              :key="item.title"
              v-reveal="i * 80"
              class="group relative"
            >
              <span class="absolute -left-[51px] top-0 grid h-10 w-10 place-items-center rounded-xl glass transition-colors group-hover:border-accent-400/60">
                <span class="h-2 w-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600"></span>
              </span>
              <div class="font-mono text-xs uppercase tracking-wider text-accent-600 dark:text-accent-300">{{ item.period }}</div>
              <h4 class="mt-2 font-display text-lg font-bold text-slate-900 dark:text-white">{{ item.title }}</h4>
              <div class="text-sm font-medium text-muted">{{ item.org }}</div>
              <p class="mt-3 text-sm leading-relaxed text-muted">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const columns = [
  {
    title: 'Experience',
    icon: 'lucide:briefcase',
    items: [
      { period: '2022 — Present', title: 'Senior Frontend Engineer', org: 'Global Tech Solutions', description: 'Architecting high-performance enterprise dashboards with Nuxt 3 and TypeScript.' },
      { period: '2019 — 2022', title: 'Vue.js Developer', org: 'Creative Digital Agency', description: 'Built 20+ responsive web applications with a focus on UX and performance.' },
      { period: '2017 — 2019', title: 'Web Developer', org: 'Local Tech Startup', description: 'Built and maintained client websites using Vue.js and modern CSS frameworks.' },
    ],
  },
  {
    title: 'Education',
    icon: 'lucide:graduation-cap',
    items: [
      { period: '2013 — 2017', title: 'BS in Computer Science', org: 'State Technical University', description: 'Focused on algorithms, data structures and software engineering principles.' },
      { period: '2011 — 2013', title: 'IT Certification', org: 'Advanced IT Academy', description: 'Specialized training in modern web development and database management.' },
    ],
  },
]
</script>
