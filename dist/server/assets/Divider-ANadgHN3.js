import { jsx } from 'react/jsx-runtime';

const Divider = (props) => {
  return /* @__PURE__ */ jsx("div", { className: `flex justify-center`, children: /* @__PURE__ */ jsx("div", { className: `rounded-full ${props.className ?? ""}` }) });
};

export { Divider as D };
