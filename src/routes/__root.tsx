import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import Nav from '../components/Nav';
import '../app.css'
import { Footer } from '../components/Footer';

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
            {
                title: "VenData Solutions"
            },
            {
                name: 'description',
                content: "This is VenData Solutions"
            }
        ],
        links: [
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" },
            { rel: "icon", href: "/nb-logo.png" },
            { rel: "apple-touch-icon", href: "/nb-logo.png" }

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

