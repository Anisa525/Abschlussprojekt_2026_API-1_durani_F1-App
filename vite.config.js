import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/Abschlussprojekt_2026_API-1_durani_F1-App/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate"
    })
  ]
});