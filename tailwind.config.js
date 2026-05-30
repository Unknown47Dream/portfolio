/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Geist', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#0F0F0F',
        },
        soft: {
          50: '#FAFAF8',
          100: '#F5F5F3',
          200: '#E8E8E4',
          300: '#D4D4D0',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          secondary: '#6B6B6B',
          muted: '#A3A3A3',
          dark: '#F5F5F5',
          'dark-secondary': '#888888',
        },
      },
      borderRadius: {
        'squircle': '2rem',
        'squircle-sm': 'calc(2rem - 0.375rem)',
        'pill': '9999px',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.02)',
        'soft-lg': '0 8px 40px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.02)',
        'soft-xl': '0 20px 60px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.02)',
        'inner-light': 'inset 0 1px 1px rgba(255,255,255,0.15)',
        'dark-soft': '0 4px 24px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.15)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.32,0.72,0,1)',
        'spring-out': 'cubic-bezier(0.22,1,0.36,1)',
        'smooth': 'cubic-bezier(0.65,0,0.35,1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.32,0.72,0,1) forwards',
        'noise': 'noise 0.5s steps(4) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(4rem) blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0) blur(0)' },
        },
        noise: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 0)' },
          '90%': { transform: 'translate(10%, 5%)' },
        },
      },
    },
  },
  plugins: [],
}
