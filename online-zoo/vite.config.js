import { defineConfig } from "vite";

export default defineConfig({
  root: "pages/landing",
  publicDir: "../../assets",
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
  },
});
