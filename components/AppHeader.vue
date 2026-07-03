<template>
  <header
    class="fixed top-0 z-50 w-full transition-all duration-300"
    :class="scrolled ? 'py-3' : 'py-5'"
  >
    <div class="container mx-auto px-6">
      <div
        class="flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300"
        :class="scrolled ? 'glass shadow-lg shadow-black/5' : 'bg-transparent'"
      >
        <!-- Logo -->
        <a href="#home" class="group flex items-center gap-2" @click="onNavClick($event, '#home')">
          <span class="block h-9 w-9 overflow-hidden rounded-xl shadow-md shadow-accent-600/20 ring-1 ring-accent-500/40">
            <img src="/me-logo.jpg" alt="Shukhrat" class="h-full w-full object-cover object-center" />
          </span>
          <span class="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Shukhrat
          </span>
        </a>

        <!-- Desktop nav -->
        <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <a
            v-for="item in nav"
            :key="item.href"
            :href="item.href"
            @click="onNavClick($event, item.href)"
            class="relative rounded-xl px-4 py-2 text-sm font-medium transition-colors"
            :class="active === item.href.slice(1)
              ? 'text-accent-600 dark:text-accent-300'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'"
          >
            {{ item.label }}
            <span
              v-if="active === item.href.slice(1)"
              class="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent-500 to-accent-600"
            ></span>
          </a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <ThemeToggle />
          <a v-magnetic="16" href="#contact" class="btn-primary hidden text-sm sm:inline-flex" @click="onNavClick($event, '#contact')">
            Hire Me
          </a>

          <!-- Mobile hamburger -->
          <button
            class="grid h-10 w-10 place-items-center rounded-xl glass lg:hidden"
            :aria-expanded="mobileOpen"
            aria-label="Toggle navigation menu"
            @click="mobileOpen = !mobileOpen"
          >
            <span class="relative block h-4 w-5">
              <span class="absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300" :class="mobileOpen ? 'top-1.5 rotate-45' : 'top-0'"></span>
              <span class="absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-current transition-all duration-300" :class="mobileOpen ? 'opacity-0' : 'opacity-100'"></span>
              <span class="absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300" :class="mobileOpen ? 'top-1.5 -rotate-45' : 'top-3'"></span>
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <nav
          v-if="mobileOpen"
          class="glass mt-3 flex flex-col gap-1 rounded-2xl p-3 shadow-xl lg:hidden"
          aria-label="Mobile"
        >
          <a
            v-for="item in nav"
            :key="item.href"
            :href="item.href"
            @click="onNavClick($event, item.href)"
            class="rounded-xl px-4 py-3 text-sm font-medium transition-colors"
            :class="active === item.href.slice(1)
              ? 'bg-accent-500/10 text-accent-600 dark:text-accent-300'
              : 'text-slate-600 hover:bg-slate-500/5 dark:text-slate-300'"
          >
            {{ item.label }}
          </a>
          <a v-magnetic="14" href="#contact" class="btn-primary mt-2 text-sm" @click="onNavClick($event, '#contact')">
            Hire Me
          </a>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup>
const { nav } = useSite()
const mobileOpen = ref(false)
const { active } = useScrollSpy(nav.map((n) => n.href.slice(1)))

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 20)

const onNavClick = (e, href) => {
  e.preventDefault()
  mobileOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  history.replaceState(null, '', href)
}
</script>
