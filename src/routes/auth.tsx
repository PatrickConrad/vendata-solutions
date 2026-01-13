import { createFileRoute, Outlet } from '@tanstack/react-router'
import { ComingSoon } from '../components/reusable/ComingSoon'

export const Route = createFileRoute('/auth')({
  head: () => ({
    meta: [
      { title: "Sign In | VenData Solutions Portal" },
      {
        name: 'description',
        content: "Secure access to the VenData Solutions client portal. Manage your integrations, view data analytics, and monitor your custom automation workflows."
      }
    ],
  }),
  component: RouteComponent,
  
})

function RouteComponent() {
  return (
    <div className='w-full flex align-middle justify-center py-30'>
      <ComingSoon />
    </div>
  )
}
