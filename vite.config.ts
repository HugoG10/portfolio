import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Project site: https://hugog10.github.io/portfolio/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});
