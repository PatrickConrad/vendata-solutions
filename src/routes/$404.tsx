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
  return (
    <main className='min-h-[80vh] w-full flex text-center justify-center align-middle p-50'>
      <h2>404 - Page Not Found</h2>
    </main>
  )
}
