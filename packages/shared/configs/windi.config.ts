import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      }
    }
  }
})
