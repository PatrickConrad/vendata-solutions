import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Hero } from '../components/home/Hero'
import { Services } from '../components/home/Services'
import { CallToAction } from '../components/home/CallToAction'
import { UnifiedSection } from '../components/home/UnifiedSection'


type ModalType = {
    modal?: string
}

export const Route = createFileRoute('/')({
    component: RouteComponent,
    validateSearch: (search: Record<string, unknown>):ModalType => {
        return {
            modal: (search.modal as string) ?? undefined
        }
    }
    // loader: async () => await getCount()
})

function RouteComponent() {
    return (
        <>
            <Hero />
            <Services />
            <UnifiedSection />
            <CallToAction />
        </>
    )
}