<template>
  <div v-reveal :class="center ? 'text-center' : ''">
    <div class="eyebrow mb-4" :class="center ? 'justify-center' : ''">
      <span class="h-px w-8 bg-gradient-to-r from-accent-500 to-accent-600"></span>
      {{ eyebrow }}
    </div>
    <h2 class="heading text-4xl sm:text-5xl">
      <slot />
    </h2>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  center: { type: Boolean, default: false },
})
</script>
