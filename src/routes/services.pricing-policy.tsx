import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/pricing-policy')({
  component: PricingPolicyPage,
})

function PricingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-800 dark:text-slate-200 font-plus-jakarta">
      <h1 className="text-4xl font-black uppercase italic mb-6 text-v-navy dark:text-v-green">Pricing Policy</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <h3 className="font-black uppercase text-xs tracking-widest mb-2 text-v-gold">Standard Rates</h3>
          <ul className="space-y-2 text-sm">
            <li>Optimization / Design: <strong>$100/hr</strong></li>
            <li>Custom Code: <strong>$130/hr</strong></li>
            <li>Strategic Investigation: <strong>$150 Flat</strong></li>
            <li>Process Audit: <strong>$800 Flat</strong></li>
          </ul>
        </div>
        <div className="p-6 bg-v-navy text-white rounded-xl">
          <h3 className="font-black uppercase text-xs tracking-widest mb-2 text-v-green">The Sentry (Retainer)</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Monthly Coverage: <strong>$600/mo</strong></li>
            <li>Initial Deposit: <strong>$1,200 (First 2 Months)</strong></li>
            <li>Investigation Fees: <strong>Waived</strong></li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase tracking-tight">Payment Protocol</h2>
      <p className="mb-4">
        Transparency is our core logic. All fees for non-retainer clients are to be paid prior to the commencement of work. Project-based rates are billed weekly.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase tracking-tight">Retainer Terms</h2>
      <p className="mb-4">
        Retainer clients are expected to pay the full $600 prior to each month of coverage. 
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li><strong>Cancellation:</strong> A <strong>$600 cancellation fee</strong> applies if service is terminated without at least 31 days' notice.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase tracking-tight">Custom Application Design</h2>
      <p className="mb-4">
        A <strong>$500 Design Fee</strong> is due prior to the start of any custom application architecture. This is separate from implementation hours and the initial investigation.
      </p>

      <div className="mt-12 p-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg text-center">
        <p className="text-sm italic">Email contact and initial inquiries are always free of charge.</p>
      </div>

      <p className="mt-10 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}