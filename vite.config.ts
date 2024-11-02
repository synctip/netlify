import { defineConfig } from "vite";
import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    svgr({
      exportType: "named",
      ref: true,
      svgo: false,
      titleProp: true,
      include: "src/**/*.svg",
    }),
    react(),
  ],
  base: process.env.BASE_URL || "/",
  build: {
    outDir: "dist",
    sourcemap: true,
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
