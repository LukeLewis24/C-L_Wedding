import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { routerPlugin } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    routerPlugin(),
  ],
});