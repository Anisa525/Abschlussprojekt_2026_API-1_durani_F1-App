import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/Abschlussprojekt_2026_API-1_durani_F1-App/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      useCredentials: true,
      // manifest.json liegt bereits in /public – VitePWA soll kein eigenes erzeugen
      manifest: false,
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"]
      }
    })
  ]
});