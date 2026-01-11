import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dearborn: {
          primary: '#1a5f2a',
          secondary: '#f59e0b',
          accent: '#dc2626',
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dearborneats: {
          'primary': '#1a5f2a',
          'secondary': '#f59e0b',
          'accent': '#dc2626',
          'neutral': '#1f2937',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
          'info': '#3b82f6',
          'success': '#22c55e',
          'warning': '#f59e0b',
          'error': '#ef4444',
        },
      },
      'light',
      'dark',
    ],
    defaultTheme: 'dearborneats',
  },
} satisfies Config
