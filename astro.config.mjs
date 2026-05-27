import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://xiaomihub-id.github.io",
  base: "/crowdfunding",
  vite: {
    plugins: [tailwindcss()],
  },
});
