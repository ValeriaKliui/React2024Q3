import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: resolve(__dirname, "./src/components"),
      },
      {
        find: "@store",
        replacement: resolve(__dirname, "./src/store"),
      },
      {
        find: "@pages",
        replacement: resolve(__dirname, "./src/pages"),
      },
      {
        find: "@hooks",
        replacement: resolve(__dirname, "./src/hooks"),
      },
      {
        find: "@constants",
        replacement: resolve(__dirname, "./src/constants"),
      },
      {
        find: "@utils",
        replacement: resolve(__dirname, "./src/utils"),
      },
      {
        find: "@assets",
        replacement: resolve(__dirname, "./src/assets"),
      },
    ],
  },
});
