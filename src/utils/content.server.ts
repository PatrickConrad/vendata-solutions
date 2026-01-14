import { tempPosts } from "../data/posts";



export const serverGetPosts = (postId: string) =>{
    const post = tempPosts.find(tp=>tp.id===postId);
    // CURRENT: Return null to simulate "Not Found"
    if (!post) {
        return null
    }

    return post
}