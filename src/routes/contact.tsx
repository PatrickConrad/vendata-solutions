import { createFileRoute } from '@tanstack/react-router'
import { Divider } from '../components/reusable/Divider'
import ContactForm from '../components/ContactForm'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: "Contact Us | Vendata Solutions" },
      {
        name: 'description',
        content: "Ready to unify your business data? Contact Vendata Solutions for expert consulting on custom ERP/CRM systems, API integrations, and automation. Let's build your solution."
      }
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>     
          <ContactForm />
      
    </main>
  )
}
