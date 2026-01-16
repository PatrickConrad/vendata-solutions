import { x as createServerRpc, s as createServerFn } from "./worker-entry-DY3GHevn.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
const tempPosts = [
  {
    id: "intro-to-automation",
    title: "How Automation Bridges the Operational Gap",
    body: "In today's digital landscape, data silos are the silent killers of productivity. At VenData Solutions, we specialize in building the bridges that allow your tools to talk to each other. By implementing precision automation, businesses can reclaim thousands of hours lost to manual data entry.",
    date: "2024-05-20"
  }
];
const serverGetPosts = (postId) => {
  const post = tempPosts.find((tp) => tp.id === postId);
  if (!post) {
    return null;
  }
  return post;
};
const getPost_createServerFn_handler = createServerRpc("7d7e857e3252f6ecf0c7eabed1b93b93ea9bc14341b78a5c25ea74735091c89a", (opts, signal) => getPost.__executeServer(opts, signal));
const getPost = createServerFn().inputValidator((data) => data).handler(getPost_createServerFn_handler, async ({
  data
}) => {
  return serverGetPosts(data.postId);
});
export {
  getPost_createServerFn_handler
};
