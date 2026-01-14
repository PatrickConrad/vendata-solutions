import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h2>Hello from layout</h2>
      <Outlet />
    </div>
  )
}
