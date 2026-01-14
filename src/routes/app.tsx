import { createFileRoute, Outlet } from '@tanstack/react-router'

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
  return (
    <>
      <h3>Hello from app</h3>
      <Outlet />
    </>
  )
}
