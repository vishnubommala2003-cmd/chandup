import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        properties: resolve(__dirname, 'properties.html'),
        developments: resolve(__dirname, 'developments.html'),
        locations: resolve(__dirname, 'locations.html'),
        journal: resolve(__dirname, 'journal.html'),
        projects: resolve(__dirname, 'projects.html'),
        invesmart: resolve(__dirname, 'invesmart.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        blog: resolve(__dirname, 'blog.html'),
        careers: resolve(__dirname, 'careers.html'),
        contact: resolve(__dirname, 'contact.html'),
        palmValley: resolve(__dirname, 'palm-valley.html'),
        teakVillage: resolve(__dirname, 'teak-village.html'),
        vistaraValley: resolve(__dirname, 'vistara-valley.html'),
        nriDesk: resolve(__dirname, 'nri-desk.html'),
        landing: resolve(__dirname, 'landing.html'),
        termsDisclaimer: resolve(__dirname, 'terms-disclaimer.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        thankYou: resolve(__dirname, 'thank-you.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
});
