import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import Nav from '../components/layouts/main/Nav';
import { Footer } from '../components/layouts/main/Footer';
import '../app.css'

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { title: "VenData Solutions | Custom ERP, API Bridging & Automation" },
            {
                name: 'description',
                content: "VenData Solutions unifies business operations through custom ERP/CRM development, API bridging, and precision automation. We eliminate data silos and manual bottlenecks to build a seamless digital infrastructure."
            },
            { property: 'og:title', content: "VenData Solutions | Operational Excellence through Data" },
            { property: 'og:description', content: "Connect your tools, automate your workflows, and gain actionable insights with custom software solutions from VenData." },
        ],
        links: [
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" },
            { rel: "icon", href: "/nb-logo.png" },
            { rel: "apple-touch-icon", href: "/nb-logo.png" },
        ] 
    }),
    component: RootComponent,
    notFoundComponent: ()=><h1>404 - Page Not Found</h1>
})

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
            <Scripts />
        </RootDocument>
    )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html>
            <head>
                <HeadContent />
            </head>
            <body className='dark text-slate-200'>
                <Nav />
                <main className='pt-20'>{children}</main>
                <Footer/>
            </body>
        </html>
    )
}

