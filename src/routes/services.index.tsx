import { createFileRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router"
import { ServiceIcon } from "../components/reusable/ServiceIcon"
import { 
  faStethoscope, 
  faGear, 
  faBridge, 
  faClock, 
  faLocationDot, 
  faCircleCheck,
  faPlaneDeparture
} from "@fortawesome/free-solid-svg-icons"
import ServicesPage from '../components/services/ServicesPage'

export const Route = createFileRoute('/services/')({
  component: RouteComponent,
})



export default function RouteComponent() {
  return (
    <ServicesPage />
  )
}