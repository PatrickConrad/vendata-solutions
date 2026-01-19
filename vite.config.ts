import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin"
import viteReact from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({
      projects: ['./tsconfig.json']
    }),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart(
      {
        prerender: {
          enabled: true,
          crawlLinks: true
        },
        sitemap: {
          enabled: true,
          host: 'https://vendata.solutions'
        }
      }
    ),
    // react's vite plugin must come after start's vite plugin
    viteReact(),
    
  ],
  build: {
    target: 'esnext',       // Modern JS output
    outDir: 'dist',         // Output folder for Cloudflare Pages
    rollupOptions: {
      output: {
        entryFileNames: '[name].js', // Keeps file names predictable
      },
    },
  },
}) 