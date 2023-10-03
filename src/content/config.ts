import { defineCollection, z } from 'astro:content'

const hikeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string().optional(),
    postDate: z.string().transform((str) => new Date(str)),
    video: z.string(),
    colors: z.object({
      text: z.string(),
      background: z.string(),
    }),
    user: z.object({
      name: z.string(),
      avatar: z.string(),
    }),
    metadata: z
      .object({
        distance: z.string().optional(),
        altitude: z.string().optional(),
        location: z.string().optional(),
      })
      .optional(),
  }),
})

export const collections = {
  hikes: hikeCollection,
}
