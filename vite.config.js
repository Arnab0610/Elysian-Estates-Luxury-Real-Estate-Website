import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Niche tomar onno page-gulo add koro
        about: resolve(__dirname, 'about-us.html'),
        property: resolve(__dirname, 'property-listings.html'),
        contact: resolve(__dirname, 'agents.html'), 
        // Joto gulo html file ache, sob ekhane comma diye likhte hobe
      },
    },
  },
})