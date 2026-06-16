// Thin wrapper around VueUse's useColorMode so the whole app shares one source
// of truth. Dark is the default; the choice is persisted to localStorage.
export const useTheme = () => {
  const mode = useColorMode({
    initialValue: 'dark',
    storageKey: 'portfolio-theme',
    attribute: 'class',
    modes: { light: 'light', dark: 'dark' },
  })

  const isDark = computed(() => mode.value === 'dark')
  const toggle = () => {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
  }

  return { mode, isDark, toggle }
}
