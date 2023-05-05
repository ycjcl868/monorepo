import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 40000,
    forceRerunTriggers: ['text/fixtures/**'],
  },
});
