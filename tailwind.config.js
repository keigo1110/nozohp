/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
        japanese: ['Noto Serif JP', 'serif'],
      },
      colors: {
        washi: {
          50: '#f7f6f2',
          100: '#e6e4dd',
          200: '#d5d1c7',
          300: '#c4beb1',
          400: '#b3ab9b',
          500: '#a29885',
          600: '#91856f',
          700: '#807259',
          800: '#6f5f43',
          900: '#5e4c2d',
        },
        asagi: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        momiji: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderWidth: {
        '3': '3px',
      },
      keyframes: {
        heatRise1: {
          '0%': {
            opacity: 0.98,
            transform: 'translateY(0%) scale(3.5) skewY(0deg) skewX(0deg)',
            filter: 'blur(15px)',
          },
          '50%': {
            opacity: 1,
            transform: 'translateY(-50%) scale(4) skewY(-5deg) skewX(3deg)',
            filter: 'blur(25px)',
          },
          '100%': {
            opacity: 0.98,
            transform: 'translateY(-100%) scale(3.5) skewY(0deg) skewX(0deg)',
            filter: 'blur(15px)',
          }
        },
        heatRise2: {
          '0%': {
            opacity: 0.95,
            transform: 'translateY(0%) scale(4) skewY(3deg) skewX(-3deg)',
            filter: 'blur(18px)',
          },
          '50%': {
            opacity: 0.98,
            transform: 'translateY(-50%) scale(4.2) skewY(-4deg) skewX(5deg)',
            filter: 'blur(28px)',
          },
          '100%': {
            opacity: 0.95,
            transform: 'translateY(-100%) scale(4) skewY(3deg) skewX(-3deg)',
            filter: 'blur(18px)',
          }
        },
        heatRise3: {
          '0%': {
            opacity: 0.85,
            transform: 'translateY(0%) scale(3.2) skewY(-2deg) skewX(1deg)',
            filter: 'blur(8px)',
          },
          '50%': {
            opacity: 0.9,
            transform: 'translateY(-50%) scale(3.3) skewY(2deg) skewX(-3deg)',
            filter: 'blur(14px)',
          },
          '100%': {
            opacity: 0.85,
            transform: 'translateY(-100%) scale(3.2) skewY(-2deg) skewX(1deg)',
            filter: 'blur(8px)',
          }
        },
        schlieren1: {
          '0%, 100%': {
            transform: 'translate(0%, 0%)',
            opacity: 0,
            backdropFilter: 'blur(0px)',
          },
          '25%, 75%': {
            transform: 'translate(8%, -5%)',
            opacity: 1,
            backdropFilter: 'blur(15px)',
          },
          '50%': {
            transform: 'translate(-6%, 8%)',
            opacity: 1,
            backdropFilter: 'blur(20px)',
          }
        },
        schlieren2: {
          '0%, 100%': {
            transform: 'translate(0%, 0%)',
            opacity: 0,
            backdropFilter: 'blur(0px)',
          },
          '33%, 66%': {
            transform: 'translate(-7%, 5%)',
            opacity: 1,
            backdropFilter: 'blur(18px)',
          }
        },
        schlieren3: {
          '0%, 100%': {
            transform: 'translate(0%, 0%)',
            opacity: 0,
            backdropFilter: 'blur(0px)',
          },
          '50%': {
            transform: 'translate(5%, -6%)',
            opacity: 1,
            backdropFilter: 'blur(16px)',
          }
        }
      },
      animation: {
        heatRise1: 'heatRise1 8s ease-in-out infinite',
        heatRise2: 'heatRise2 7s ease-in-out infinite',
        heatRise3: 'heatRise3 9s ease-in-out infinite',
        schlieren1: 'schlieren1 20s ease-in-out infinite',
        schlieren2: 'schlieren2 25s ease-in-out infinite',
        schlieren3: 'schlieren3 30s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}