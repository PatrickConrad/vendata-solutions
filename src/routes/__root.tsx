import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import Nav from '../components/layouts/main/Nav';
import { Footer } from '../components/layouts/main/Footer';
import '../app.css'
import { AnalyticsTracker } from '../components/reusable/AnalyticsTracker';
import { AppProvider } from '../context/AppContext';

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
            { property: 'og:image', content: "https://www.vendatasolutions.com/vendata-ven-logo-full-text.png" },

        ],
        links: [
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" },
            { rel: "icon", href: "/vendata-venn-logo.png" },
            { rel: "apple-touch-icon", href: "/vendata-venn-logo.png" },
        ],
        scripts: [
            {
                src:'https://www.googletagmanager.com/gtag/js?id=G-9PXEB6HMVC',
                async: true
            },
            {
                children: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-9PXEB6HMVC');
                `
            }
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
        <html suppressHydrationWarning>
            <AppProvider>
                <head>
                    <HeadContent />
                </head>
                <body className='dark text-slate-200'>
                    <AnalyticsTracker />
                    <Nav />
                    <main className='pt-20'>{children}</main>
                    <Footer/>
                </body>
            </AppProvider>
        </html>
    )
}

