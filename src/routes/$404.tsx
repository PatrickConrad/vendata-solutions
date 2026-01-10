import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$404')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='p-50'>Hello "/$404"!</div>
}
