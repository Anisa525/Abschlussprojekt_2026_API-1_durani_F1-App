import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/Abschlussprojekt_2026_API-1_durani_F1-App/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "F1 App Abschlussprojekt",
        short_name: "F1 App",
        description: "Formel 1 App für das Abschlussprojekt 2026",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        // Hier sagen wir dem Handy, wo der Einstiegspunkt ist:
        scope: "/Abschlussprojekt_2026_API-1_durani_F1-App/",
        start_url: "/Abschlussprojekt_2026_API-1_durani_F1-App/",
        icons: [
          {
            src: "f1-icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "f1-icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});