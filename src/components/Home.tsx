'use client'

import { useRouter } from "@tanstack/react-router";
import { Route, updateCount } from "../routes";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Convergence } from "./Convergence";
import { CallToAction } from "./CallToAction";
import { ConvergeBtn } from "./ConvergeBtn";

export function Home() {
    const router = useRouter();
    const state = Route.useLoaderData()
    return (
        <>
           <Hero />
           <Services />
           <Convergence />
           <CallToAction />
           {/* <ConvergeBtn /> */}
        </>
    )
}