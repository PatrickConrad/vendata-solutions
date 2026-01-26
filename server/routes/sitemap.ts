// import { createAPIFileRoute } from '@tanstack/start/api'
// import { services } from '../../src/data/services'

// export const APIRoute = createAPIFileRoute('/api/sitemap')({
//   GET: async ({ request }) => {
//     const baseUrl = 'https://vendata.solutions'
    
//     // 1. Define your static pages
//     const staticPages = ['', '/', '/about', '/consultation', '/intel']
    
//     // 2. Map your dynamic services from your existing data object
//     const servicePages = Object.values(services).map(s => `/services/${s.slug}`)

//     const allPages = [...staticPages, ...servicePages]

//     // 3. Construct the XML
//     const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   ${allPages
//     .map((path) => {
//       return `
//     <url>
//       <loc>${baseUrl}${path}</loc>
//       <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
//       <changefreq>${path === '' ? 'daily' : 'monthly'}</changefreq>
//       <priority>${path === '' ? '1.0' : '0.8'}</priority>
//     </url>`
//     })
//     .join('')}
// </urlset>`

//     return new Response(sitemap, {
//       headers: {
//         'Content-Type': 'application/xml',
//         'Cache-Control': 'public, max-age=3600, s-maxage=3600',
//       },
//     })
//   },
// })