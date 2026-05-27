import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const repoName = "crowdfunding";
const isGitHubPages = process.env.GITHUB_REPOSITORY?.endsWith(`/${repoName}`);

export default defineConfig({
  base: isGitHubPages ? `/${repoName}` : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
