import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/consultation/book')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/consultation/book"!</div>
}
