import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      'hero':"url('/assets/hero1.jpg')",
      'about':"url('/assets/hand.jpg')",
      'experience':"url('/assets/tractor.jpg')"
    
        },
      colors:{
        'deep-green':'#334b35',
        'mid-green':'#6d8c54',
        'light-green':'#ccd7c2',
        'about-green':'#263c28',
        'yellow':'#f7c35f'
      }
    },
  },
  plugins: [],
}
export default config
