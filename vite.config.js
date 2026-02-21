import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // this is for the custom domain (shakib.design)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})