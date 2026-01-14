'use client'

import { useRouter } from "@tanstack/react-router";
import { Route } from "../routes";

export function TestApi() {
    const router = useRouter();
    const state = Route.useLoaderData()
    return (
        <>
            <button
                type="button"
                onClick={()=>{
                    console.log('working')
                    // updateCount({data: 1}).then(()=>{
                    //     console.log('running')
                    //     router.invalidate()
                    // })
                }}
            >Add 1 to {state}</button> 
            <button onClick={()=>console.log('testing')}>Testing</button>
        </>
    )
}


