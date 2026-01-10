import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/precision-automation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/services/precision-automation"!</div>
}
