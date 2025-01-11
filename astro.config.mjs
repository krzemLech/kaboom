import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

import icon from "astro-icon";

import db from "@astrojs/db";

export default defineConfig({
  integrations: [tailwind(), react(), icon(), db()],
  adapter: netlify(),
});
