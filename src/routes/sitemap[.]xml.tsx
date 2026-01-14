import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sitemap.xml')({
  loader: async () => {
    const urls = [
      '/',
      '/about',
      '/contact',
      '/consultation',
      '/content',
    ]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>https://vendata.solutions${url}</loc>
  </url>
`).join('')}
</urlset>`

    return xml
  },

  headers: ()=>({
    'Content-Type': 'application/xml',
  }),

  component: () => null,
})
