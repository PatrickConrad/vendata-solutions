import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/intel')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <main className='w-full flex align-middle justify-center'>
      <Outlet />
    </main>
  )
}
