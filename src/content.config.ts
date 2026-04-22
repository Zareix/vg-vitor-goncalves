import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";

const realisations = defineCollection({
  loader: file("src/content/realisations.json"),
  schema: ({ image }) =>
    z.object({
      images: z.array(image()),
      category: z.string(),
      city: z.string(),
      label: z.string(),
    }),
});

export const collections = {
  realisations,
};
