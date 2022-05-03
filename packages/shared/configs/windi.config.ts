import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      }
    }
  },
  extract: {
    include: ['**/*.{jsx,tsx,css,less}'],
    exclude: ['node_modules', '.git', '.next', '.umi']
  }
})
