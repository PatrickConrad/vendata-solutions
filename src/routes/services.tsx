import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: RouteComponent,
})


export default function RouteComponent() {
  return (
   <Outlet/>
  )
}