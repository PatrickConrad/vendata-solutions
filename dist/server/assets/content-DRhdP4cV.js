import { a as createServerRpc, c as createServerFn } from '../server.js';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import 'node:async_hooks';
import '@tanstack/router-core/ssr/server';
import 'h3-v2';
import 'tiny-invariant';
import 'seroval';
import 'react/jsx-runtime';
import '@tanstack/react-router/ssr/server';
import '@tanstack/react-router';

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

export { getPost_createServerFn_handler };
