<template>
  <footer class="relative mt-16 border-t border-slate-200/60 py-16 dark:border-white/10">
    <div class="container mx-auto px-6">
      <div class="glass-card rounded-[2rem] p-10 md:p-14">
        <div class="flex flex-col items-center gap-10 text-center">
          <a href="#home" class="flex items-center gap-2" @click.prevent="scrollTop">
            <span class="block h-9 w-9 overflow-hidden rounded-xl ring-1 ring-accent-500/40">
              <img src="/me-logo.jpg" alt="Shukhrat" class="h-full w-full object-cover object-center" />
            </span>
            <span class="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">Shukhrat</span>
          </a>

          <nav class="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted" aria-label="Footer">
            <a v-for="item in nav" :key="item.href" :href="item.href" class="transition-colors hover:text-accent-600 dark:hover:text-accent-300">
              {{ item.label }}
            </a>
          </nav>

          <div class="flex gap-3">
            <a
              v-for="link in socials"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="link.name"
              class="grid h-12 w-12 place-items-center rounded-xl glass text-slate-600 transition-all hover:-translate-y-0.5 hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-300"
            >
              <SocialIcon :name="link.icon" />
            </a>
          </div>

          <div class="flex w-full flex-col items-center justify-between gap-4 border-t border-slate-200/60 pt-8 text-xs text-muted dark:border-white/10 md:flex-row">
            <p>© {{ year }} Shukhrat. Built with Nuxt 3 &amp; Tailwind.</p>
            <div class="flex gap-6">
              <a href="#" class="transition-colors hover:text-accent-600 dark:hover:text-accent-300">Privacy</a>
              <a href="#" class="transition-colors hover:text-accent-600 dark:hover:text-accent-300">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { nav, socials } = useSite()
const year = 2026

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>
