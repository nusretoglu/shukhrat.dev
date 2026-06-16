// Central place for site-wide content so links/labels stay consistent across
// the header, hero and footer. Update these in one spot.
export const useSite = () => {
  const nav = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ]

  // `icon` matches a key in components/SocialIcon.vue
  const socials = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/' },
    { name: 'X', icon: 'x', url: 'https://x.com/' },
    { name: 'Email', icon: 'mail', url: 'mailto:shukhrat@example.com' },
  ]

  return { nav, socials }
}
