import { x as createServerRpc, s as createServerFn } from "./worker-entry-Cp1SBzdi.js";
import "node:events";
import "node:stream";
import "node:async_hooks";
import "node:stream/web";
const tempPosts = [{
  id: "intro-to-automation",
  title: "How Automation Bridges the Operational Gap",
  body: "In today's digital landscape, data silos are the silent killers of productivity. At VenData Solutions, we specialize in building the bridges that allow your tools to talk to each other. By implementing precision automation, businesses can reclaim thousands of hours lost to manual data entry.",
  date: "2024-05-20"
}];
const getPost_createServerFn_handler = createServerRpc("1fdd1544e24fb8c5d6161876b4645b1875249633f40d8a3f2179b16677831153", (opts, signal) => getPost.__executeServer(opts, signal));
const getPost = createServerFn().inputValidator((data) => data).handler(getPost_createServerFn_handler, async ({
  data
}) => {
  const post = tempPosts.find((tp) => tp.id === data.postId);
  if (!post) {
    return null;
  }
  return post;
});
export {
  getPost_createServerFn_handler
};
