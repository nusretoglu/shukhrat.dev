import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Brand red, anchored on #c8011a (accent-600).
        accent: {
          50: '#fff1f2',
          100: '#ffe1e3',
          200: '#ffc8cc',
          300: '#ffa0a8',
          400: '#fb6873',
          500: '#ef3346',
          600: '#c8011a',
          700: '#a80417',
          800: '#8b0916',
          900: '#730f18',
          950: '#400308',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        // Larger, slower, more organic drift for the aurora mesh blobs.
        'aurora-a': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '25%': { transform: 'translate(8%, -6%) scale(1.15) rotate(8deg)' },
          '50%': { transform: 'translate(-4%, 10%) scale(0.92) rotate(-6deg)' },
          '75%': { transform: 'translate(-9%, -4%) scale(1.08) rotate(4deg)' },
        },
        'aurora-b': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(-10%, 8%) scale(1.12) rotate(-10deg)' },
          '66%': { transform: 'translate(6%, -10%) scale(0.9) rotate(8deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        // Slow hue/position shift for the conic mesh layer.
        'mesh-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%, 100% 50%, 50% 0%' },
          '50%': { backgroundPosition: '100% 50%, 0% 50%, 50% 100%' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        blob: 'blob 18s ease-in-out infinite',
        'aurora-a': 'aurora-a 26s ease-in-out infinite',
        'aurora-b': 'aurora-b 32s ease-in-out infinite',
        'mesh-pan': 'mesh-pan 24s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
    },
  },
}
