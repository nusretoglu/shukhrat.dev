<template>
  <section id="testimonials" class="py-28">
    <div class="container mx-auto px-6">
      <div class="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading eyebrow="Feedback">
          Client <span class="gradient-text">trust</span>.
        </SectionHeading>

        <div v-reveal class="flex gap-3">
          <button
            class="grid h-12 w-12 place-items-center rounded-full glass text-slate-700 transition-all hover:-translate-y-0.5 hover:text-accent-600 dark:text-slate-200 dark:hover:text-accent-300"
            aria-label="Previous testimonial"
            @click="prev"
          >
            <Icon name="lucide:arrow-left" class="h-5 w-5" />
          </button>
          <button
            class="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r from-accent-600 to-accent-700 text-white shadow-md shadow-accent-600/20 transition-all hover:-translate-y-0.5"
            aria-label="Next testimonial"
            @click="next"
          >
            <Icon name="lucide:arrow-right" class="h-5 w-5" />
          </button>
        </div>
      </div>

      <div v-reveal class="relative overflow-hidden">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-x-6"
          leave-active-class="transition duration-300 ease-in"
          leave-to-class="opacity-0 -translate-x-6"
        >
          <figure :key="current" class="glass-card rounded-[2rem] p-10 md:p-14">
            <div class="mb-6 font-display text-6xl leading-none gradient-text">“</div>
            <blockquote class="mb-8 text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-200 md:text-2xl">
              {{ testimonials[current].text }}
            </blockquote>
            <figcaption class="flex items-center gap-4">
              <div class="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 font-display text-xl font-bold text-white">
                {{ testimonials[current].name.charAt(0) }}
              </div>
              <div>
                <div class="font-display font-bold text-slate-900 dark:text-white">{{ testimonials[current].name }}</div>
                <div class="text-sm text-accent-600 dark:text-accent-300">{{ testimonials[current].role }}</div>
              </div>
            </figcaption>
          </figure>
        </Transition>
      </div>

      <!-- Dots -->
      <div class="mt-8 flex justify-center gap-2">
        <button
          v-for="(t, i) in testimonials"
          :key="i"
          @click="go(i)"
          :aria-label="`Go to testimonial ${i + 1}`"
          class="h-2 rounded-full transition-all"
          :class="i === current ? 'w-8 bg-gradient-to-r from-accent-500 to-accent-600' : 'w-2 bg-slate-300 dark:bg-white/20'"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  { name: 'Alex Johnson', role: 'CTO, Fintech Inc', text: "Shukhrat's ability to architect complex frontend systems is unparalleled. He transformed our legacy app into a high-performance Nuxt 3 platform." },
  { name: 'Sarah Miller', role: 'Product Manager, Creative Co', text: 'The attention to detail and UX mastery Shukhrat brings to every project is exceptional. A true frontend artist.' },
  { name: 'David Chen', role: 'Founder, SaaS Startup', text: 'Reliable, fast and thoughtful. Shukhrat shipped our MVP ahead of schedule without compromising on quality.' },
]

const current = ref(0)
const next = () => (current.value = (current.value + 1) % testimonials.length)
const prev = () => (current.value = (current.value - 1 + testimonials.length) % testimonials.length)
const go = (i) => (current.value = i)

// Autoplay, pausing while the tab is hidden.
let timer
onMounted(() => {
  timer = setInterval(next, 6000)
})
onUnmounted(() => clearInterval(timer))
</script>
