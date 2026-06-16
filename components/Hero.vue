<template>
  <section id="home" class="relative flex min-h-screen items-center pt-28 pb-20">
    <div class="container mx-auto px-6">
      <div class="grid items-center gap-16 lg:grid-cols-12">
        <!-- Copy -->
        <div class="lg:col-span-7">
          <div v-reveal class="eyebrow glass mb-7 w-fit rounded-full px-4 py-2">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-accent-500"></span>
            </span>
            Available for new projects
          </div>

          <h1 v-reveal="80" class="heading mb-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Frontend architect<br />
            building the <span class="gradient-text">modern web</span>.
          </h1>

          <p v-reveal="160" class="mb-10 max-w-xl text-lg leading-relaxed text-muted">
            I'm <span class="font-semibold text-slate-900 dark:text-white">Shukhrat</span> — a senior
            developer specializing in <span class="font-medium text-accent-600 dark:text-accent-300">Nuxt 3</span>,
            <span class="font-medium text-accent-600 dark:text-accent-300">Vue.js</span> and scalable
            web architecture. I turn complex problems into fast, beautiful interfaces.
          </p>

          <div v-reveal="240" class="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a href="#portfolio" class="btn-primary w-full sm:w-auto" @click="scrollTo($event, '#portfolio')">
              View Projects
              <Icon name="lucide:arrow-right" class="h-4 w-4" />
            </a>
            <a href="#contact" class="btn-ghost w-full sm:w-auto" @click="scrollTo($event, '#contact')">
              Get in touch
            </a>
          </div>

          <div v-reveal="320" class="mt-10 flex items-center gap-3">
            <a
              v-for="link in socials"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="link.name"
              class="grid h-11 w-11 place-items-center rounded-xl glass text-slate-600 transition-all hover:-translate-y-0.5 hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-300"
            >
              <SocialIcon :name="link.icon" />
            </a>
          </div>
        </div>

        <!-- Visual -->
        <div v-reveal="200" class="lg:col-span-5">
          <div class="relative mx-auto max-w-sm animate-float">
            <!-- Glow -->
            <div class="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-accent-500/40 to-accent-700/40 blur-2xl"></div>

            <!-- Portrait placeholder -->
            <div class="glass-card overflow-hidden rounded-[2rem] p-2">
              <div class="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
                <img
                  src="/me.jpg"
                  alt="Portrait of Shukhrat"
                  class="absolute inset-0 h-full w-full object-cover object-center"
                  loading="eager"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-accent-900/40 to-transparent"></div>
              </div>
            </div>

            <!-- Floating experience card -->
            <div class="glass-card absolute -bottom-6 -left-6 rounded-2xl px-5 py-4">
              <div class="font-display text-3xl font-bold gradient-text">5+</div>
              <div class="mt-1 text-xs font-medium uppercase tracking-wider text-muted">Years experience</div>
            </div>

            <!-- Floating tech badge -->
            <div class="glass-card absolute -right-5 top-8 rounded-2xl px-4 py-3 [animation-delay:-3s]">
              <div class="font-mono text-xs text-muted">&lt;Nuxt 3 /&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { socials } = useSite()

const scrollTo = (e, href) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
