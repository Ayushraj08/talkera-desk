/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-green': '#0E4D3A',
        'ink-deep': '#06261C',
        'brand-green': '#1C7C5B',
        'light-blue': '#E6F2FA',
        'sky-blue': '#BFE0F5',
        'ink': '#101A16',
        'slate': '#52625B',
        'paper': '#F4F2EC',
        'lime-accent': '#D9F25C',
        'warning': '#B45309',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'panel': '28px',
        'outer': '32px',
      },
      boxShadow: {
        'mercury': '0 20px 40px -15px rgba(6, 38, 28, 0.12), 0 0 0 1px rgba(191, 224, 245, 0.4)',
        'mercury-dark': '0 24px 48px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.12)',
        'tactile': '0 2px 4px rgba(16, 26, 22, 0.04), 0 12px 24px -6px rgba(16, 26, 22, 0.08)',
        'elevated': '0 16px 32px -8px rgba(14, 77, 58, 0.15)',
      },
      animation: {
        'slide-slow': 'slide 80s linear infinite',
        'slide-reverse': 'slide 95s linear infinite reverse',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
