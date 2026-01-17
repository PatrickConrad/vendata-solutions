import { n as jsxRuntimeExports } from "./worker-entry-B8CgGp0a.js";
import { C as ComingSoon } from "./ComingSoon-B4FwFUVC.js";
import { R as Route } from "./router--fBIoi7A.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./Divider-CnjdnuWb.js";
function BlogIndex() {
  const posts = Route.useLoaderData();
  if (!Array.isArray(posts)) return null;
  posts.find((p) => p.featured);
  posts.filter((p) => p.featured == null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ComingSoon, {});
}
export {
  BlogIndex as component
};
