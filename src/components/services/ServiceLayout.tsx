import { ReactNode } from "react"

type ServiceLayoutProps = {
  title: string
  subtitle: string|ReactNode
  icon: ReactNode
  body: ReactNode
}

export function ServiceLayout({ title, subtitle, icon, body }: ServiceLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-10 space-y-8">
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h2 className="text-3xl font-bold text-v-navy dark:text-white">{title}</h2>
          <p className="text-lg text-slate-500 dark:text-slate-300">{subtitle}</p>
        </div>
      </div>

      <div className="space-y-6 text-xl text-slate-700 dark:text-slate-200 leading-relaxed">
        {body}
      </div>
    </div>
  )
}
