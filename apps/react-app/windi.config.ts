import windiConfig from '@infras/shared/configs/windi.config'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  presets: [windiConfig],
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git']
  }
})
