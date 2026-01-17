import { Link } from "@tanstack/react-router"
import { ContentPost } from "../../types/content"

type PostProps = {
    post: ContentPost
}

export const Post = ({post}: PostProps) => {
    return (
        <Link
            key={post.slug}
            to={`/content/$postId`}
            params={{ postId: post.slug }}
            className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6  transition shadow-sm hover:shadow-lg dark:hover:border dark:hover:border-(--v-gold)"
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
    )
  
}
