import { Link } from "@tanstack/react-router";

export function PostNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h2 className="text-6xl font-bold text-slate-200 mb-4">404</h2>
      <h1 className="text-3xl font-bold text-v-navy mb-2">Post Not Found</h1>
      <p className="text-slate-600 max-w-md mb-8">
        We couldn't find the article you're looking for. It may have been moved, 
        deleted, or hasn't been published yet.
      </p>
      <Link
        to="/intel" 
        className="px-6 py-3 bg-v-navy text-white rounded-md hover:bg-slate-800 transition-colors"
      >
        Back to Blog
      </Link>
    </div>
  )
}