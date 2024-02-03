import react from "@vitejs/plugin-react";
import { defineConfig } from 'vitest/config';

/** @type {import('vite').UserConfig} */
export default defineConfig ({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./setup-tests.js"],
  },
});
