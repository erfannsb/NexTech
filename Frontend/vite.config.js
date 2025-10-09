import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": "http://localhost:8000",
      "/products": "http://localhost:8000",
      "/users": "http://localhost:8000",
      "/orders": "http://localhost:8000",
      "/shops": "http://localhost:8000",
      "/payments": "http://localhost:8000",
      // WebSocket proxy
      "/ws": {
        target: "http://localhost:8000",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
