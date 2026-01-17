import { tempPosts } from "../src/data/posts";
import { ContentPost } from "../src/types/content";



export const serverGetPosts = (postId?: string): ContentPost|ContentPost[]|null =>{
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