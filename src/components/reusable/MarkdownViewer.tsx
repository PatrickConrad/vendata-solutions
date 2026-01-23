import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function MarkdownReader({ content }: { content: string }) {
  return (
    <article className="
      prose prose-slate lg:prose-xl dark:prose-invert max-w-none
      /* Any one-off overrides can still go here */
    ">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          // We only keep the IMG mapping because it has complex 
          // layout requirements that CSS alone can't handle.
          img: ({ src, alt }) => (
            <div className="my-12 flex flex-col items-center">
              <img 
                src={src} 
                alt={alt} 
                className="rounded-3xl shadow-2xl border-2 border-slate-100 dark:border-slate-800" 
              />
              {alt && <span className="mt-4 text-sm text-slate-400 font-medium">{alt}</span>}
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}