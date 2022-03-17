import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/utils/index.ts', "src/types/index.ts"],
  clean: true,
  dts: true,
  outDir: "dist",
  format: ['cjs', 'esm']
});
