<template>
  <ClientOnly>
    <div
      v-if="enabled"
      class="cursor-glow"
      :class="{ 'cursor-glow--visible': visible }"
      :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
      aria-hidden="true"
    ></div>
  </ClientOnly>
</template>

<script setup>
// A large, soft radial glow that trails the cursor with subtle easing.
// Desktop + fine-pointer only; disabled for touch and reduced-motion users.
const enabled = ref(false)
const visible = ref(false)
const x = ref(0)
const y = ref(0)

let targetX = 0
let targetY = 0
let raf = 0

const onMove = (e) => {
  targetX = e.clientX
  targetY = e.clientY
  if (!visible.value) visible.value = true
}

const onLeave = () => {
  visible.value = false
}

const loop = () => {
  // Lerp toward the cursor for a smooth trailing feel.
  x.value += (targetX - x.value) * 0.14
  y.value += (targetY - y.value) * 0.14
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  const finePointer = window.matchMedia('(pointer: fine)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!finePointer || reducedMotion) return

  enabled.value = true
  x.value = targetX = window.innerWidth / 2
  y.value = targetY = window.innerHeight / 2

  window.addEventListener('pointermove', onMove, { passive: true })
  document.addEventListener('pointerleave', onLeave)
  raf = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('pointermove', onMove)
  document.removeEventListener('pointerleave', onLeave)
})
</script>
