import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Divider } from "../components/reusable/Divider";
import { getPost, getPosts } from "../../server/routes/content";
import { ComingSoon } from "../components/reusable/ComingSoon";

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
  if(!Array.isArray(posts)) return null
  const featured = posts.find(p=>p.featured);
  const nonFeatured = posts.filter(p=>p.featured==null);
  return <ComingSoon />
  // return (
  //   <div className="min-h-screen bg-white dark:bg-slate-900 px-6 py-20">
  //     <div className="max-w-7xl mx-auto">

  //       {/* Header */}
  //       <div className="mb-16 text-center">
  //         <h1 className="text-5xl font-extrabold text-(--v-navy) dark:text-(--v-gold) mb-4">
  //           VenData Insights
  //         </h1>
  //         <Divider className="h-1 w-20 bg-v-gold mb-5 "/>
  //         <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
  //           Strategy, technology, and automation insights to help your business work smarter.
  //         </p>
  //       </div>

  //       {/* Layout */}
  //       <div className="grid lg:grid-cols-3 gap-12  max-h-[60vh] ">

  //         {/* Featured Preview */}
  //         {featured && (
  //           <div className="lg:col-span-2 min-h-[60vh]">
  //             <Link
  //               to="/content/$postId"
  //               params={{ postId: featured.slug }}
  //               className="group block bg-v-navy rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition min-h-[60vh]"
  //             >
  //               <div className="p-10">
  //                 <span className="inline-block mb-4 text-v-gold font-bold uppercase tracking-wide">
  //                   Featured
  //                 </span>
  //                 <h2 className="text-4xl font-extrabold text-white mb-4 group-hover:text-v-gold transition">
  //                   {featured.title}
  //                 </h2>
  //                 <p className="text-slate-200 text-lg mb-6 leading-relaxed">
  //                   {featured.excerpt}
  //                 </p>
  //                 <div className="flex items-center justify-between text-slate-300 text-sm">
  //                   <span>{featured.date}</span>
  //                   <span className="font-bold text-v-gold">
  //                     Read Article →
  //                   </span>
  //                 </div>
  //               </div>
  //             </Link>
  //           </div>
  //         )}

  //         {/* Post List */}
  //         <div className="flex flex-col gap-6 max-h-[60vh] overflow-y-scroll">
  //           {nonFeatured.map(post => (
  //             <Link
  //               key={post.slug}
  //               to={`/content/$postId`}
  //               params={{ postId: post.slug }}
  //               className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:bg-v-navy transition shadow-sm hover:shadow-lg"
  //             >
  //               <h3 className="text-xl font-bold text-v-navy dark:text-white group-hover:text-v-gold transition mb-2">
  //                 {post.title}
  //               </h3>
  //               <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
  //                 {post.excerpt}
  //               </p>
  //               <span className="text-xs text-slate-500 dark:text-slate-400">
  //                 {post.date}
  //               </span>
  //             </Link>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
