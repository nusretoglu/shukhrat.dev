// Tracks which section is currently in view and returns its id, so the nav can
// highlight the active link. Pass the list of section ids to observe.
export const useScrollSpy = (ids: string[]) => {
  const active = ref<string>(ids[0] ?? '')

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry nearest the top that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) active.value = visible[0].target.id
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    onUnmounted(() => observer.disconnect())
  })

  return { active }
}
