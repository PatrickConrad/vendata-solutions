import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Divider } from "../components/reusable/Divider";
import { getPost, getPosts } from "../../server/routes/content";
import { ComingSoon } from "../components/reusable/ComingSoon";
import { LatestPost } from "../components/content/LatestPost";
import { Post } from "../components/content/Post";
import { useMemo } from "react";

export const Route = createFileRoute("/insights/")({
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
  const sortedPosts = useMemo(()=>posts.sort((post1, post2) => {
    return new Date(post2.date).getTime() - new Date(post1.date).getTime();
  }), []);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-900 px-6 py-10">
      <div className="w-full lg:max-w-[50%] mx-auto">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-5xl font-extrabold text-(--v-navy) dark:text-(--v-gold) mb-4">
            Vendata Insights
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
        </div>
      </div>
    </div>
  );
}
