import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import postcssNested from "postcss-nested";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
  css: {
    postcss: {
      plugins: [postcssNested, autoprefixer],
    },
  },
});
