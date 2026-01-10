import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/$404')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='p-59'>Hello "/services/$404"!</div>
}
