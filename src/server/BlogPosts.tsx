import { createServerFn } from "@tanstack/react-start"

const tempPosts = [
    {
        id: 'intro-to-automation',
        title: "How Automation Bridges the Operational Gap",
        body: "In today's digital landscape, data silos are the silent killers of productivity. At VenData Solutions, we specialize in building the bridges that allow your tools to talk to each other. By implementing precision automation, businesses can reclaim thousands of hours lost to manual data entry.",
        date: "2024-05-20"
    }
]

export const getPost = createServerFn()
    .inputValidator((data: {postId: string})=> data)
    .handler(async ({data }) => {
        // FUTURE: const post = await db.post.findUnique({ where: { id: postId } })
        const post = tempPosts.find(tp=>tp.id===data.postId);

        // CURRENT: Return null to simulate "Not Found"

        if (!post) {
        return null
        }

        return post
    })