/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f7ff',
          100: '#b3ecff',
          200: '#80e1ff',
          300: '#4dd5ff',
          400: '#1acaff',
          500: '#00bfff', // Neon Cyan/Electric Blue
          600: '#00a8e6',
          700: '#0091cc',
          800: '#007ab3',
          900: '#006399',
          950: '#004d80',
        },
        accent: {
          50: '#f5e6ff',
          100: '#e6ccff',
          200: '#d6b3ff',
          300: '#c799ff',
          400: '#b780ff',
          500: '#a866ff', // Soft Purple/Violet
          600: '#9453e6',
          700: '#8040cc',
          800: '#6c2db3',
          900: '#581a99',
          950: '#440780',
        },
        dark: {
          50: '#1a1a1a',
          100: '#0d0d0d',
          200: '#0a0a0a',
          300: '#080808',
          400: '#050505',
          500: '#030303',
          600: '#020202',
          700: '#010101',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        space: {
          black: '#000000',
          darkGray: '#0a0a0a',
          starWhite: '#ffffff',
          nebulaPurple: '#a866ff',
          neonCyan: '#00bfff',
          glowBlue: '#1acaff',
          deepPurple: '#8b5cf6',
          electricBlue: '#06b6d4',
          neonPink: '#ec4899',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'neural-pulse': 'neuralPulse 1.5s ease-in-out infinite',
        'data-flow': 'dataFlow 3s linear infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.8)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 191, 255, 0.5), 0 0 40px rgba(0, 191, 255, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 191, 255, 0.8), 0 0 60px rgba(0, 191, 255, 0.5)',
          },
        },
        neuralPulse: {
          '0%, 100%': { 
            opacity: '0.6',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.1)',
          },
        },
        dataFlow: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '50%': { 
            opacity: '1',
          },
          '100%': { 
            transform: 'translateX(100%)',
            opacity: '0',
          },
        },
        scanLine: {
          '0%': { 
            transform: 'translateY(-100%)',
          },
          '100%': { 
            transform: 'translateY(100vh)',
          },
        },
        shimmer: {
          '0%': { 
            backgroundPosition: '-1000px 0',
          },
          '100%': { 
            backgroundPosition: '1000px 0',
          },
        },
        bounceSlow: {
          '0%, 100%': { 
            transform: 'translateY(0)',
          },
          '50%': { 
            transform: 'translateY(-10px)',
          },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
