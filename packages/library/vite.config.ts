import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import glob from "glob";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");



const OUTPUT_COMMON_PROPS = {
  globals: {
    react: "React",
    "react-dom": "ReactDOM",
    "react/jsx-runtime": "jsxRuntime",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      entryRoot: path.resolve(__dirname, "src/components"),
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies || {}), "react/jsx-runtime"],
      output: [
        {
          ...OUTPUT_COMMON_PROPS,
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src/components",
          exports: "auto",
          entryFileNames: "[name].js",
        },
        {
          ...OUTPUT_COMMON_PROPS,
          format: "umd",
          name: "kyro",
          entryFileNames: "[name].umd.js",
        },
      ],
    },
  },
});
