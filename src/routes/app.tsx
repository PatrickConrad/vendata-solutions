import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  head: () => ({
    meta: [
      { title: "Dashboard | VenData Solutions App" },
      {
        name: 'description',
        content: "VenData Solutions Operations Dashboard. Centralized control for your custom ERP/CRM integrations and automated business processes."
      }
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app"!</div>
}
