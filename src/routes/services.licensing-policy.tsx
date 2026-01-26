import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/licensing-policy')({
  component: LicensingPolicyPage,
})

function LicensingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-800 dark:text-slate-200 font-plus-jakarta">
      <h1 className="text-4xl font-black uppercase italic mb-6">Licensing Policy</h1>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase tracking-tight">Access & Control</h2>
      <p className="mb-4">
        All optimization and customization clients are granted licensed access and control over the tools required for their specific workflow. 
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase tracking-tight">The Right to Fork</h2>
      <p className="mb-4">
        Licensed clients receive access to the source code. You retain the right to use, fork, and modify that source code for your own internal business use. 
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase tracking-tight">IP Restrictions</h2>
      <p className="mb-4">
        Unless a specific <strong>IP Assignment Agreement</strong> is signed (typically reserved for full custom applications), Vendata Solutions retains the Intellectual Property of the underlying logic. 
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-6  pl-4 italic">
        <li>Clients may NOT clone, fork, or repackage our work to sell as a standalone product.</li>
        <li>Usage is restricted to the internal operations of the licensed entity.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase tracking-tight">Updates & Maintenance</h2>
      <p className="mb-4">
        Non-retainer clients receive lifetime access to the version of the source code delivered at the time of project completion. 
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Active updates and monitoring are exclusive to Retainer clients.</li>
        <li>Non-retainer clients must pay a minimum of <strong>$130</strong> to receive the latest updates to an application, unless the update is required to fix a logic error on our part (see Error Policy).</li>
      </ul>

      <p className="mt-10 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}