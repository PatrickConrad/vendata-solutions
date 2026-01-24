import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function MarkdownReader({ content, subHeading, date }: { content: string, subHeading: string, date: string }) {
  console.log({subHeading})
  return (
    //prose is used to set themeing for all but custom images
    <article className="prose px-5 w-xl md:w-3xl py-15">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <div className="mb-8">
              <h1 className="mb-1 text-v-navy">{children}</h1>
              {subHeading && (
                <p className="text-sm italic text-slate-400 dark:text-slate-500 font-medium m-0">
                  {subHeading}
                </p>
              )}
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
          img: ({ src, alt, title }) => (
            <div className="my-12 flex flex-col items-center">
              <img 
                src={src} 
                alt={alt} 
                className="rounded-3xl shadow-2xl border-2 border-slate-100 dark:border-slate-800 max-h-90" 
              />
              {title && <span className="mt-4 text-sm text-slate-400 font-medium">{title}</span>}
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}