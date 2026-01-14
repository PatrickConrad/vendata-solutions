import { createServerFn } from "@tanstack/react-start"
import { serverGetPosts } from './blog.server'


export const getPost = createServerFn()
    .inputValidator((data: {postId: string})=> data)
    .handler(async ({data}) => {
        return serverGetPosts(data.postId);
    })