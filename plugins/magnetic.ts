// Global `v-magnetic` directive: the element is gently pulled toward the
// cursor while hovered, then springs back on leave. Adds a tactile, premium
// feel to buttons. Desktop + fine-pointer only; a no-op for touch and for
// users who prefer reduced motion.
//
// Usage:  <a v-magnetic>…</a>  or  <a v-magnetic="22">…</a>  (max pull in px)

interface MagneticEl extends HTMLElement {
  _magneticCleanup?: () => void
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('magnetic', {
    getSSRProps() {
      return {}
    },
    mounted(el: MagneticEl, binding) {
      if (!import.meta.client) return

      const finePointer = window.matchMedia('(pointer: fine)').matches
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!finePointer || reducedMotion) return

      const strength = typeof binding.value === 'number' ? binding.value : 18

      el.style.willChange = 'transform'
      el.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'

      const onMove = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect()
        const relX = e.clientX - (rect.left + rect.width / 2)
        const relY = e.clientY - (rect.top + rect.height / 2)
        // Normalise by half-size so the pull scales with the element, then clamp.
        const pullX = Math.max(-1, Math.min(1, relX / (rect.width / 2))) * strength
        const pullY = Math.max(-1, Math.min(1, relY / (rect.height / 2))) * strength
        el.style.transform = `translate(${pullX}px, ${pullY}px)`
      }

      const onEnter = () => {
        // Snappier follow while engaged.
        el.style.transition = 'transform 0.12s ease-out'
      }

      const onLeave = () => {
        el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        el.style.transform = 'translate(0, 0)'
      }

      el.addEventListener('pointerenter', onEnter)
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)

      el._magneticCleanup = () => {
        el.removeEventListener('pointerenter', onEnter)
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
      }
    },
    unmounted(el: MagneticEl) {
      el._magneticCleanup?.()
    },
  })
})
