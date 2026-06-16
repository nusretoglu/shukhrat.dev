<template>
  <button
    class="grid h-10 w-10 place-items-center rounded-xl glass text-slate-700 transition-colors hover:text-accent-600 dark:text-slate-200 dark:hover:text-accent-300"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggle"
  >
    <ClientOnly>
      <!-- Sun in dark mode (click → light), moon in light mode (click → dark) -->
      <Icon :name="isDark ? 'lucide:sun' : 'lucide:moon'" class="h-5 w-5" />
      <template #fallback>
        <span class="h-5 w-5"></span>
      </template>
    </ClientOnly>
  </button>
</template>

<script setup>
const { isDark, toggle } = useTheme()
</script>
