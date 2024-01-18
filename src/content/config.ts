import { defineCollection, z, reference } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    authors: z.array(reference('people')).optional(),
  }),
});

const people = defineCollection({
  schema: z.object({
    name: z.string(),
    mugshot: z.string().optional(),
  }),
});

export const collections = { blog };
