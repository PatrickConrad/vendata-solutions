import { createServerFn } from "@tanstack/react-start"
import { serverGetPosts } from '../../src/utils/content.server'


export const getPost = createServerFn()
    .inputValidator((data: {postId: string})=> data)
    .handler(async ({data}) => {
        return serverGetPosts(data.postId);
})