import { createFileRoute } from '@tanstack/react-router'
import { ComingSoon } from '../components/reusable/ComingSoon'

export const Route = createFileRoute('/content/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ComingSoon />

}
