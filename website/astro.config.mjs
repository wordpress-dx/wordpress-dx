import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://loopress.dev",
  integrations: [react(), sitemap()],
  adapter: vercel(),
  output: "server",
  vite: {
    plugins: [tailwindcss(), tsConfigPaths({ projects: ["./tsconfig.json"] })],
    server: {
      fs: {
        allow: [".."],
      },
    },
  },
});
