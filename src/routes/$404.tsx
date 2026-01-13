import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$404')({
  head: () => ({
    meta: [
      { title: "Page Not Found | VenData Solutions" },
      {
        name: 'description',
        content: "The page you are looking for doesn't exist or has been moved. Explore VenData Solutions for custom ERP/CRM, API bridging, and business automation services."
      }
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='p-50'>Hello "/$404"!</div>
}
