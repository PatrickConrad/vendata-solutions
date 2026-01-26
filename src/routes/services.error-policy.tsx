import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/error-policy')({
  component: ErrorPolicyPage,
})

function ErrorPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-800 dark:text-slate-200 font-plus-jakarta">
      <h1 className="text-4xl font-black uppercase italic mb-6">Error Policy</h1>
      
      <p className="mb-6 leading-relaxed">
        Vendata Solutions stands behind the logic we deploy. However, technical ecosystems are fluid. This policy outlines how we handle fractures, bug reports, and third-party system changes.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase tracking-tight">The Investigation Fee</h2>
      <p className="mb-4">
        All client error reports are subject to a <strong>$100 Error Investigation Fee</strong>. 
        This fee is 100% refunded if the investigation reveals the error originated within our own logic or code.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase tracking-tight">Third-Party & Outside Issues</h2>
      <p className="mb-4">
        Issues arising from changes to 3rd party APIs, SaaS platform updates, or environmental factors outside of Vendata's control are billable. 
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-6 text-sm">
        <li><strong>Retainer Clients:</strong> These updates are covered under active monitoring at no extra cost.</li>
        <li><strong>Non-Retainer Clients:</strong> A minimum <strong>$130 maintenance fee</strong> applies to update prebuilt tools or logic following an outside change.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase tracking-tight">Priority & Response</h2>
      <p className="mb-4">
        Errors found in prebuilt tools and issues affecting <strong>The Sentry (Retainer)</strong> clients always receive top-tier priority in our development queue.
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Retainer clients receive a <strong>48-hour response guarantee</strong>.</li>
        <li>Note: Response guarantees refer to communication and diagnostic start times; full recovery/resolution times are not guaranteed due to the complexity of custom logic.</li>
      </ul>

      <p className="mt-10 text-sm text-slate-500 italic">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}