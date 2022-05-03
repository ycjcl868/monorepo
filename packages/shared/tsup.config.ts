import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['utils/index.ts', 'types/index.ts', 'configs/*.ts'],
  clean: true,
  dts: true,
  outDir: 'dist',
  format: ['cjs', 'esm']
})
