import { createFileRoute } from '@tanstack/react-router'
import { ContactForm } from '../components/ContactForm'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      <section className="pt-24 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-(--v-navy) dark:text-white">
          Contact Us
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Have questions or want to get started? <br/> Send us a message and we’ll get back to you.
        </p>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
