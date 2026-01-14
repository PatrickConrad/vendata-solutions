import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/robots.txt')({
  loader: async () => {
    return `
User-agent: *
Allow: /

Sitemap: https://vendata.solutions/sitemap.xml
`.trim()
  },

  headers: () => ({
    'Content-Type': 'text/plain',
  }),

  component: () => null,
})
