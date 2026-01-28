import { createFileRoute } from '@tanstack/react-router'
import { CardBack, CardFront } from '../components/BusinessCards'

export const Route = createFileRoute('/business-card')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="businessCard">
      <CardFront />
      <br/>
      <CardBack />
    </div>
  )
}
