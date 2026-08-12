import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm plaster / stone neutrals lifted from the villa photography.
        sand: {
          50: '#FBF9F5',
          100: '#F5F0E7',
          200: '#EAE1D0',
          300: '#DACBAE',
          400: '#C4AF8C',
          500: '#A88F6C',
        },
        stone: {
          800: '#3B362E',
          900: '#26221D',
        },
        // Teal drawn from the VIVRA wordmark.
        vivra: {
          50: '#EAF6F4',
          100: '#CFEBE6',
          300: '#7CC7BC',
          500: '#2E9A8C',
          600: '#217E72',
          700: '#1A6259',
        },
        clay: {
          400: '#C97B54',
          500: '#B6613C',
        },
        olive: {
          500: '#6E7A4F',
          600: '#57603E',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        content: '1440px',
      },
    },
  },
  plugins: [],
}

export default config
