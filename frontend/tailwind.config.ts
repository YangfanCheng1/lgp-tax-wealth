import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2B5E',
          dark: '#111d3f',
          light: '#2a3f7e',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#dfc078',
          dark: '#a8832a',
        },
        'light-gray': '#F8F9FA',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(27,43,94,0.10)',
        'card-hover': '0 8px 36px rgba(27,43,94,0.20)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #111d3f 0%, #1B2B5E 40%, #2a3f7e 70%, #1B2B5E 100%)',
        'gold-gradient':
          'linear-gradient(90deg, #C9A84C 0%, #dfc078 50%, #C9A84C 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
