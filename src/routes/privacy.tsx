import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-800 dark:text-slate-200">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-6">
        At Vendata Solutions, your privacy is important to us. This policy explains
        what information we collect, how we use it, and how we protect it.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <p>
        We may collect your name, email address, and other contact details when you
        book a consultation, submit a form, or communicate with us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>To respond to inquiries</li>
        <li>To schedule and manage consultations</li>
        <li>To improve our services</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Cookies & Tracking</h2>
      <p>
        We may use cookies or third-party tools (such as Calendly or Cloudflare)
        to improve site performance and user experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
      <p>
        You may request access, correction, or deletion of your personal data at any time.
      </p>

      <p className="mt-10 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}
