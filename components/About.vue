<template>
  <section id="about" class="py-28">
    <div class="container mx-auto px-6">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <!-- Visual -->
        <div v-reveal class="relative">
          <div class="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-accent-500/30 to-accent-700/30 blur-2xl"></div>
          <div class="glass-card overflow-hidden rounded-[2rem] p-2">
            <div class="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
              <img
                src="/me2.jpg"
                alt="Shukhrat at work"
                class="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
          <div class="glass-card absolute -right-4 -top-4 grid h-20 w-20 place-items-center rounded-2xl">
            <span class="font-display text-2xl font-bold gradient-text">UI</span>
          </div>
        </div>

        <!-- Copy -->
        <div>
          <SectionHeading eyebrow="About my craft">
            Designing logic,<br />building <span class="gradient-text">visual stability</span>.
          </SectionHeading>

          <p v-reveal="80" class="mb-8 mt-7 text-lg leading-relaxed text-muted">
            I bridge the gap between complex backend logic and pixel-perfect interfaces. My approach
            centers on scalability, performance and atomic design — so the products I build stay fast
            and maintainable as they grow.
          </p>

          <div class="mb-10 space-y-6">
            <div v-for="(skill, i) in skills" :key="skill.name" v-reveal="i * 80">
              <div class="mb-2 flex items-center justify-between">
                <span class="text-sm font-semibold text-slate-900 dark:text-white">{{ skill.name }}</span>
                <span class="font-mono text-sm text-accent-600 dark:text-accent-300">{{ skill.level }}%</span>
              </div>
              <div class="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-600 transition-[width] duration-1000 ease-out"
                  :style="{ width: visible ? skill.level + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>

          <div v-reveal class="flex flex-wrap gap-4">
            <a href="#" class="btn-primary">
              Download CV
              <Icon name="lucide:download" class="h-4 w-4" />
            </a>
            <a href="#services" class="btn-ghost" @click.prevent="scrollTo('#services')">My stack</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Vue / Nuxt 3', level: 98 },
  { name: 'TypeScript', level: 92 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Web Architecture', level: 88 },
]

// Animate the bars when the section enters the viewport.
const visible = ref(false)
const section = ref(null)
onMounted(() => {
  const el = document.getElementById('about')
  if (!el || typeof IntersectionObserver === 'undefined') {
    visible.value = true
    return
  }
  const obs = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        visible.value = true
        obs.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  obs.observe(el)
  onUnmounted(() => obs.disconnect())
})

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
</script>
