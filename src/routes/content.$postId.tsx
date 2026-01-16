import { createFileRoute, notFound } from '@tanstack/react-router'
import { PostNotFound } from '../components/content/PostNotFound'
import { getPost } from '../../server/routes/content'
export const Route = createFileRoute('/content/$postId')({
 // 1. Fetch data from the API (using JSONPlaceholder for now)
  loader: async ({ params }) => {
    const res = await getPost({data: {postId: params.postId}})
    if (!res ) throw notFound()
    return res
  },
  
  // 2. Inject data into the Head
  head: ({loaderData}) => {
    if (loaderData==null||Array.isArray(loaderData)||!loaderData?.title || !loaderData?.body) {
      return { title: 'Post Not Found | VenData Solutions' }
    }
    console.log({loaderData})
    const { title, body } = loaderData

    return {
      meta: [
        { title: `${title.length>50?title.slice(0,50):title} | VenData Blog` },
        { 
          name: 'description', 
          content: body.slice(0, 155) // Clean excerpt for SEO
        },
        { property: 'og:title', content: title },
        { property: 'og:description', content: body.slice(0, 155) },
        { property: 'og:type', content: 'article' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
 
  component: RouteComponent,
  notFoundComponent: () => {
    return (
      <>
        {/* You can inject a custom head for 404s here! */}
        <title>Post Not Found | VenData Solutions</title>
        <meta name="robots" content="noindex" />
        <PostNotFound />
      </>
    )
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()
  if(Array.isArray(data)){
    return null
  }

  return (
    <>
    {
      !data || !data.title
      ?
      <p>Loading...</p>
      :
      <article className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-v-navy mb-4 capitalize">
          {data.title}
        </h1>
        <div className="h-1 w-20 bg-v-gold mb-8" />
        <p className="text-lg text-slate-700 leading-relaxed first-letter:text-3xl">
          {data.body==null?data.excerpt:data.body}
        </p>
      </article>
    }
    </>
   
  )
}
  