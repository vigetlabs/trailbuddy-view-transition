import { defineCollection, z } from 'astro:content'
// 2. Define your collection(s)
const cardCollection = defineCollection({
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
  }),
})

export const collections = {
  cards: cardCollection,
}
