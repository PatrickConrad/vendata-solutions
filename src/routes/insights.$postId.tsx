import { createFileRoute, notFound } from '@tanstack/react-router'
import { PostNotFound } from '../components/content/PostNotFound'
import { getPost } from '../../server/routes/content'
import { ComingSoon } from '../components/reusable/ComingSoon'
import { MarkdownReader } from '../components/reusable/MarkdownViewer'
export const Route = createFileRoute('/insights/$postId')({
 // 1. Fetch data from the API (using JSONPlaceholder for now)
  loader: async ({ params }) => {
    const res = await getPost({data: {postId: params.postId}})
    if (!res ) throw notFound()
    return res
  },
  
  // 2. Inject data into the Head
  head: ({loaderData}) => {
    if (loaderData==null||Array.isArray(loaderData)||!loaderData?.title || !loaderData?.body) {
      return { title: 'Post Not Found | Vendata Solutions' }
    }
    console.log({loaderData})
    const { title, excerpt } = loaderData

    return {
      meta: [
        { title: `${title.length>50?title.slice(0,50):title} | Vendata Blog` },
        { name: 'publish_date', content: loaderData.date },
        { 
          name: 'description', 
          content:  excerpt.length<155?excerpt:excerpt.slice(0, 155) // Clean excerpt for SEO
        },
        { property: 'og:title', content: title },
        { property: 'og:description', content: excerpt.length<155?excerpt:excerpt.slice(0, 155)},
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
        <title>Post Not Found | Vendata Solutions</title>
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
      <MarkdownReader content={data.body!} subHeading={data.subHeading} date={data.date} />
    </>
   
  )
}
    