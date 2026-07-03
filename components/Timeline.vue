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

      <!-- Languages & interests -->
      <div class="mt-16 grid gap-6 md:grid-cols-2">
        <div v-reveal class="glass-card rounded-[1.75rem] p-8">
          <h3 class="mb-6 flex items-center gap-3 font-display text-lg font-bold text-slate-900 dark:text-white">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-white">
              <Icon name="lucide:languages" class="h-5 w-5" />
            </span>
            Languages
          </h3>
          <ul class="space-y-3">
            <li v-for="lang in languages" :key="lang.name" class="flex items-center justify-between">
              <span class="text-sm font-semibold text-slate-900 dark:text-white">{{ lang.name }}</span>
              <span class="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-600 dark:text-accent-300">{{ lang.level }}</span>
            </li>
          </ul>
        </div>

        <div v-reveal="80" class="glass-card rounded-[1.75rem] p-8">
          <h3 class="mb-6 flex items-center gap-3 font-display text-lg font-bold text-slate-900 dark:text-white">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-white">
              <Icon name="lucide:heart" class="h-5 w-5" />
            </span>
            Interests
          </h3>
          <div class="flex flex-wrap gap-2.5">
            <span
              v-for="hobby in interests"
              :key="hobby"
              class="glass rounded-full px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              {{ hobby }}
            </span>
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
      { period: 'Mar 2022 — Present', title: 'Full Stack Developer', org: 'RealSoft Bukhara', description: 'Building high-performance, responsive web interfaces with Vue.js, Nuxt.js and TypeScript, backed by PostgreSQL and Node.js on the backend.' },
    ],
  },
  {
    title: 'Education',
    icon: 'lucide:graduation-cap',
    items: [
      { period: 'Sep 2018 — Jul 2022', title: 'Bachelor, Telecommunication Technologies', org: 'Tashkent University of Information Technologies', description: 'Studied telecommunication and information technologies, building a foundation in software engineering and systems.' },
    ],
  },
]

// Spoken languages (CV). Refine the proficiency labels if needed.
const languages = [
  { name: 'Uzbek', level: 'Native' },
  { name: 'Tajik', level: 'Native' },
  { name: 'English', level: 'Professional' },
]

// Interests / hobbies (CV).
const interests = ['Football', 'Bowling', 'Video Games', 'Tennis', 'Reading']
</script>
