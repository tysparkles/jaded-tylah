/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Core palette
        charcoal: '#1a1a1a',
        smoky: '#2d2d2d',
        'muted-sage': '#6b7c6b',
        'moss-green': '#4a5a4a',
        'dusty-pink': '#d4a5a5',
        'deep-rose': '#b87878',
        'muted-silver': '#8a8a8a',
        cream: '#f5f2eb',
        'off-white': '#faf9f6',

        // Semantic
        'jaded-bg': '#0f0f0f',
        'jaded-surface': '#1a1a1a',
        'jaded-border': '#2a2a2a',
        'art-bg': '#1a1815',
        'art-surface': '#231f1c',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url('/images/grain.svg')",
      },
    },
  },
  plugins: [],
};