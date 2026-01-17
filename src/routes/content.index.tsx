import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Divider } from "../components/reusable/Divider";
import { getPost, getPosts } from "../../server/routes/content";
import { ComingSoon } from "../components/reusable/ComingSoon";
import { LatestPost } from "../components/content/LatestPost";
import { Post } from "../components/content/Post";

export const Route = createFileRoute("/content/")({
  loader: async ({ params }) => {
    const res = await getPosts()
    if (!res ) throw notFound()
    return res
  },
  component: BlogIndex,
});

function BlogIndex() {
   
  const posts = Route.useLoaderData();
 
  if(!Array.isArray(posts)) return null;
  const sortedPosts = posts.sort((post1, post2) => {
    return new Date(post2.date).getTime() - new Date(post1.date).getTime();
  });
  console.log({sortedPosts})
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-5xl font-extrabold text-(--v-navy) dark:text-(--v-gold) mb-4">
            VenData Insights
          </h1>
          <Divider className="h-1 w-20 bg-v-gold mb-5 "/>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Strategy, technology, and automation insights to help your business work smarter.
          </p>
        </div>

        {/* Layout */}
        <div className="w-full flex flex-col gap-12">
          {
            sortedPosts.map((post, ind) => {
              if(ind===0){
                return <LatestPost post={post} key={post.slug}/>
              }
              return <Post post={post} key={post.slug}/>
            })
          }
          {/* Post List */}
          {/* <div className="flex flex-col gap-6 max-h-[60vh] overflow-y-scroll">
            {nonFeatured.map(post => (
              <Link
                key={post.slug}
                to={`/content/$postId`}
                params={{ postId: post.slug }}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:bg-v-navy transition shadow-sm hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-v-navy dark:text-white group-hover:text-v-gold transition mb-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                  {post.excerpt}
                </p>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {post.date}
                </span>
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
