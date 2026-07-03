<template>
  <section class="py-16">
    <div class="container mx-auto px-6">
      <div
        id="stats"
        class="glass-card grid grid-cols-2 gap-8 rounded-[2rem] p-10 text-center lg:grid-cols-4 lg:p-14"
      >
        <div v-for="(stat, i) in stats" :key="stat.label" v-reveal="i * 80">
          <div class="font-display text-4xl font-bold gradient-text sm:text-5xl">
            {{ display[i] }}{{ stat.suffix }}
          </div>
          <div class="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { label: 'Years of experience', value: 3, suffix: '+' },
  { label: 'Core technologies', value: 10, suffix: '+' },
  { label: 'Languages spoken', value: 3, suffix: '' },
  { label: 'Projects shipped', value: 10, suffix: '+' },
]

const display = ref(stats.map(() => 0))

const animateCounts = () => {
  stats.forEach((stat, i) => {
    const duration = 1400
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      display.value[i] = Math.round(eased * stat.value)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  })
}

onMounted(() => {
  const el = document.getElementById('stats')
  if (!el || typeof IntersectionObserver === 'undefined') {
    display.value = stats.map((s) => s.value)
    return
  }
  const obs = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounts()
        obs.disconnect()
      }
    },
    { threshold: 0.4 }
  )
  obs.observe(el)
  onUnmounted(() => obs.disconnect())
})
</script>
