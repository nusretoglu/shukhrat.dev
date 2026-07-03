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
    { name: 'GitHub', icon: 'github', url: 'https://github.com/nusretoglu' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/nusretoglu/' },
    { name: 'X', icon: 'x', url: 'https://x.com/nusretoglu_' },
    { name: 'Email', icon: 'mail', url: 'mailto:shuhratteshayev2000@gmail.com' },
  ]

  return { nav, socials }
}
