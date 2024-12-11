import { defineConfig } from "vitest/config";
import tsconfig from "./tsconfig.app.json";
import path from "path";

// Create an alias object from the paths in tsconfig.json
const alias = Object.fromEntries(
  // For Each Path in tsconfig.json
  Object.entries(tsconfig.compilerOptions.paths).map(([key, [value]]) => [
    // Remove the "/*" from the key and resolve the path
    key.replace("/*", ""),
    // Remove the "/*" from the value Resolve the relative path
    path.resolve(__dirname, value.replace("/*", "")),
  ])
);

export default defineConfig({
  resolve: {
    alias,
  },
  test: {
    exclude: ["**/node_modules/**", "e2e-tests/**"],
  },
});
