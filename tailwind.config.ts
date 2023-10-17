import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      colors: {
        'primary-one': 'hsl(213, 96%, 18%)',
        'primary-two': 'hsl(243, 100%, 62%)',
        'primary-three': 'hsl(228, 100%, 84%)',
        'primary-four': 'hsl(206, 94%, 87%)',
        'primary-five': 'hsl(354, 84%, 57%)',
        'neutral-one': 'hsl(231, 11%, 63%)',
        'neutral-two': 'hsl(229, 24%, 87%)',
        'neutral-three': 'hsl(217, 100%, 97%)',
        'neutral-four': 'hsl(231, 100%, 99%)',
        specific: '#F0F0F0',
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      light: {},
    }],
    darkTheme: 'light',
    logs: false,
  },
}

export default config
