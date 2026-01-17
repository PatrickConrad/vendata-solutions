import { Link } from "@tanstack/react-router"
import { ContentPost } from "../../types/content"

type LatestPostProps = {
    post: ContentPost
}
export const LatestPost = ({post}: LatestPostProps) => {
  return (
<div className="lg:col-span-2">
        <Link
            to="/content/$postId"
            params={{ postId: post.slug }}
            className="group block bg-v-navy rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition  hover:border hover:border-(--v-gold)"
        >
            <div className="p-10">
                <span className="inline-block mb-4 text-v-gold font-bold uppercase tracking-wide">
                Featured
                </span>
                <h2 className="text-xl md:text-4xl font-extrabold text-white mb-4 group-hover:text-v-gold transition">
                {post.title}
                </h2>
                <p className="text-slate-200 text-md md:text-lg mb-6 leading-relaxed">
                {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-slate-300 text-sm">
                <span>{post.date}</span>
                <span className="font-bold text-v-gold">
                    Read Article →
                </span>
                </div>
            </div>
        </Link>
    </div>
  )
}
