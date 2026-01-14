import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';

function RouteComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h3", { children: "Hello from app" }),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}

export { RouteComponent as component };
