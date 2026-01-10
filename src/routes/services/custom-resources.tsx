import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/custom-resources')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/services/custom-resources"!</div>
}
