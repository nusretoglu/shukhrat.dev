// Global `v-reveal` directive: fades + lifts elements into view on scroll.
// Usage: <div v-reveal>…</div>  or  <div v-reveal="150"> (delay in ms)
// Registered universally so SSR can render it; the IntersectionObserver only
// runs on the client.
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null
  let prefersReducedMotion = false

  if (import.meta.client) {
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              ;(entry.target as HTMLElement).classList.add('is-visible')
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      )
    }
  }

  nuxtApp.vueApp.directive('reveal', {
    // Render nothing special on the server, but keep the directive defined so
    // SSR doesn't choke on a missing `getSSRProps`.
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding) {
      if (prefersReducedMotion || !observer) return
      el.classList.add('reveal')
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`
      observer.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
  })
})
