import { jsx } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';

function RouteComponent() {
  return /* @__PURE__ */ jsx("main", { className: "w-full flex align-middle justify-center py-30", children: /* @__PURE__ */ jsx(Outlet, {}) });
}

export { RouteComponent as component };
