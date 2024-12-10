import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // ... Specify options here.
    exclude: ["**/node_modules/**", "e2e-tests/**"],
  },
});
