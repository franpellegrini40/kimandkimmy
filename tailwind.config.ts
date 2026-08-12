import type { Config } from 'tailwindcss'

// Values copied verbatim from the VIVRA design system export (tokens/colors.css).
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#000E21',
        ivory: '#F7F4EE',
        paper: '#FFFFFF',
        inset: '#EFEBE3',
        copper: {
          DEFAULT: '#C57A3C',
          deep: '#935927',
        },
        turquoise: '#41C9D3',
        aqua: {
          900: '#004753',
          700: '#008190',
          500: '#37C8D9',
          300: '#A9E6EC',
          100: '#E0F6F8',
        },
        prestige: {
          raised: '#071527',
          inset: '#06121F',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Optima', '"Optima Nova"', '"Gill Sans"', 'sans-serif'],
        body: ['var(--font-body)', '"Neue Haas Grotesk Display"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        mark: '.34em',
        display: '.16em',
        caps: '.24em',
      },
      maxWidth: {
        content: '1440px',
      },
    },
  },
  plugins: [],
}

export default config
