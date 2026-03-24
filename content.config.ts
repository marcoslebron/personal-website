import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**',
      schema: z.object({
        stack: z.array(z.string()).optional()
      })
    }),
    caseStudies: defineCollection({
      type: 'page',
      source: 'case-studies/**',
      schema: z.object({
        bullets: z.array(z.string()).optional()
      })
    }),
    writing: defineCollection({
      type: 'page',
      source: 'writing/**',
    })
  },
})
