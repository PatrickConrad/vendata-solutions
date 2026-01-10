import * as fs from 'node:fs'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { lazy } from 'react'

const filePath = 'count.txt'

async function readCount() {
    return parseInt(
        await fs.promises.readFile(filePath, 'utf-8').catch(()=>'0')
    )
}

const getCount = createServerFn({
    method: "GET"
}).handler(()=>{
    return readCount()
})
 
export const updateCount = createServerFn({ method: 'POST'}) 
    .inputValidator((d: number) => d)  
    .handler(async ({ data }) => {
        console.log(`data: ${data}`) 
        const count = await readCount()
        await fs.promises.writeFile(filePath, `${count+data}`);
    })

export const Route = createFileRoute('/')({
    component: lazy(() => import('../components/Home').then(m => ({ default: m.Home }))),
    loader: async () => await getCount()
})

