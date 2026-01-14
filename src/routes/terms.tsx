import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
})

function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-800 dark:text-slate-200">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-6">
        By using Vendata Solutions’ website and services, you agree to the following terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Services</h2>
      <p>
        Our services are provided for informational and business purposes only.
        You agree not to misuse or attempt to disrupt our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">No Guarantees</h2>
      <p>
        While we strive to deliver high-quality results, we do not guarantee
        specific business outcomes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p>
        Vendata Solutions is not liable for indirect or consequential damages
        arising from the use of our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to Terms</h2>
      <p>
        We may update these terms at any time. Continued use of the site means
        you accept the updated terms.
      </p>

      <p className="mt-10 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}
