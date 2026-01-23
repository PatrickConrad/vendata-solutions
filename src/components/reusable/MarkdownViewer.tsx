import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function MarkdownReader({ content, date }: { content: string, date: string }) {
  return (
    //prose is used to set themeing for all but custom images
    <article className="prose w-xl md:w-3xl py-15">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <div className="mb-8">
              <h1 className="mb-1 text-v-navy dark:text-white">{children}</h1>
              {date && (
                <p className="text-sm italic text-slate-400 dark:text-slate-500 font-medium m-0">
                  {date}
                </p>
              )}
            </div>
          ),
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
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