import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#00ff9d',
      },
      boxShadow: { 'xl-soft': '0 24px 80px rgba(0,0,0,.35)' }
    }
  },
  plugins: []
}
export default config
