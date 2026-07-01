import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://ielts-student-resources.vercel.app",
  output: "static",

  integrations: [
    tailwind(),
  ],

  adapter: cloudflare()
});