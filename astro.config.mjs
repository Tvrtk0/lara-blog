import { defineConfig, passthroughImageService } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://Tvrtk0.github.io',
  base: 'lara-blog',
  image: {
    service: passthroughImageService(),
  },
})
