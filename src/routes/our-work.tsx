import { createFileRoute } from '@tanstack/react-router'
import CaseStudiesPage from '../components/CaseStudies'

export const Route = createFileRoute('/our-work')({
  component: RouteComponent,
})

function RouteComponent() {
    return <CaseStudiesPage />
}
