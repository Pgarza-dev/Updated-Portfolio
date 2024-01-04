import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  plugins: [],
  server: {
    hot: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        about: path.resolve(__dirname, "src/about/about.html"),
        projects: path.resolve(__dirname, "src/projects/projects.html"),
      },
    },
  },
});
