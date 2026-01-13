import { createFileRoute } from '@tanstack/react-router'
import { ContactForm } from '../components/ContactForm'
import { Divider } from '../components/reusable/Divider'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: "Contact Us | VenData Solutions" },
      {
        name: 'description',
        content: "Ready to unify your business data? Contact VenData Solutions for expert consulting on custom ERP/CRM systems, API integrations, and automation. Let's build your solution."
      }
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="py-35 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      <section className="pt-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-(--v-navy) dark:text-white">
          Contact Us
        </h1>
        <Divider className='w-20 h-1 mb-4 bg-v-gold'/>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Have questions or want to get started? <br/> Send us a message and we’ll get back to you.
        </p>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          {/* <ContactForm /> */}
        </div>
      </section>
    </main>
  )
}
