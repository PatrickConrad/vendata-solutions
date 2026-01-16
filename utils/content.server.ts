import { tempPosts } from "../src/data/posts";



export const serverGetPosts = (postId?: string) =>{
    if(!postId){
        return tempPosts;
    }
    const post = tempPosts.find(tp=>tp.slug===postId);
    // CURRENT: Return null to simulate "Not Found"
    if (!post) {
        return null
    }

    return post
}