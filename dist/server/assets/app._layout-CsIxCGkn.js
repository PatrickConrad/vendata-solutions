import { jsxs, jsx } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';

function RouteComponent() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Hello from layout" }),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}

export { RouteComponent as component };
