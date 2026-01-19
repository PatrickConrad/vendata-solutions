import { x as createServerRpc, s as createServerFn } from "./worker-entry-BQ0GI98r.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
const tempPosts = [
  {
    slug: "intro-to-automation",
    title: "How Automation Bridges the Operational Gap",
    excerpt: "In today's digital landscape, data silos are the silent killers of productivity",
    body: "In today's digital landscape, data silos are the silent killers of productivity. At VenData Solutions, we specialize in building the bridges that allow your tools to talk to each other. By implementing precision automation, businesses can reclaim thousands of hours lost to manual data entry.",
    date: "May 20, 2025"
  },
  {
    slug: "automation-for-growth",
    title: "How Automation Fuels Business Growth",
    excerpt: "Discover how smart automation can save time and scale operations.",
    date: "Jan 5, 2026"
  },
  {
    slug: "data-clarity",
    title: "Turning Data Into Clear Business Decisions",
    excerpt: "Transform raw data into actionable insights.",
    date: "Dec 28, 2025"
  },
  {
    slug: "why-custom-software-wins",
    title: "Why Custom Software Beats Off-the-Shelf Tools",
    excerpt: "Learn how tailored software solutions give businesses a competitive edge.",
    date: "Jan 12, 2026"
  }
];
const serverGetPosts = (postId) => {
  if (!postId) {
    return tempPosts;
  }
  const post = tempPosts.find((tp) => tp.slug === postId);
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
const getPosts_createServerFn_handler = createServerRpc("d272144f1318d10ea310ced5cd7027f8a2446e3e606218ceac770b3c3bd059fc", (opts, signal) => getPosts.__executeServer(opts, signal));
const getPosts = createServerFn().handler(getPosts_createServerFn_handler, async () => {
  return serverGetPosts();
});
export {
  getPost_createServerFn_handler,
  getPosts_createServerFn_handler
};
