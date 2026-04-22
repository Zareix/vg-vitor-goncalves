// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Domine",
      cssVariable: "--font-serif",
    },
    {
      provider: fontProviders.google(),
      name: "Archivo",
      cssVariable: "--font-sans",
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
