import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';  // Correct plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // Use Vite's Tailwind CSS plugin, not as PostCSS plugin
  ],
});
