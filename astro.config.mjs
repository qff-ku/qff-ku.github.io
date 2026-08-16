import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://qff-ku.github.io",
  trailingSlash: "always",
  redirects: {
    "/": "/2026/ko/",
  },
});
