import { createFileRoute, Outlet } from '@tanstack/react-router'
import { ComingSoon } from '../components/reusable/ComingSoon'
import { PostNotFound } from '../components/content/PostNotFound'

export const Route = createFileRoute('/content')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <main className='w-full flex align-middle justify-center py-30'>
      <Outlet />
    </main>
  )
}
