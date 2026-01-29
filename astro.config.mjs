// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    // Optimize dev server performance
    optimizeDeps: {
      // Pre-bundle these dependencies for faster dev startup
      include: ['axios', 'gsap'],
      // Exclude heavy dependencies that don't need pre-bundling
      exclude: []
    },
    server: {
      // Warm up frequently used files
      warmup: {
        clientFiles: [
          './src/components/**/*.astro',
          './src/layouts/**/*.astro'
        ]
      }
    },
    // Reduce CSS processing overhead in dev
    css: {
      devSourcemap: false
    },
    // Reduce console noise
    logLevel: 'warn'
  }
});
