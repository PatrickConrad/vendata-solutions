import { useRouter, Link, createRootRoute, Outlet, Scripts, HeadContent, createFileRoute, lazyRouteComponent, notFound, createRouter } from '@tanstack/react-router';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from '../server.js';

function ScrollLink({ to, hash, children, className, onClick }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    onClick && onClick(false);
    if (router.state.location.pathname === to) {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.navigate({
        to,
        hash
      }).then(() => {
        if (hash) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 50);
        }
      });
    }
  };
  return /* @__PURE__ */ jsx("button", { onClick: handleClick, className: `${className} cursor-pointer`, children });
}

function useModalClose(ref, isOpen, onClose, isNavMenu = false) {
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      if (!ref.current) return;
      const target = event.target;
      const rect = ref.current.getBoundingClientRect();
      if (isNavMenu) {
        if (event.clientY > rect.bottom) {
          onClose();
        }
      } else {
        if (!ref.current.contains(target)) {
          onClose();
        }
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, ref, isNavMenu]);
}

const MobileMenu = ({ open, onClose }) => {
  const menuRef = useRef(null);
  useModalClose(menuRef, open, onClose, true);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: menuRef,
      className: `md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 px-6 py-8 font-bold text-v-navy/80", children: [
        /* @__PURE__ */ jsx(ScrollLink, { to: "/auth", onClick: onClose, className: "hover:text-(--v-gold) transition", children: "Clients" }),
        /* @__PURE__ */ jsx(ScrollLink, { to: "/content", onClick: onClose, className: "hover:text-(--v-gold) transition", children: "Content" }),
        /* @__PURE__ */ jsx(ScrollLink, { to: "/", hash: "services", onClick: onClose, className: "hover:text-(--v-gold)", children: "Services" }),
        /* @__PURE__ */ jsx(ScrollLink, { to: "/about", onClick: onClose, className: "hover:text-(--v-gold)", children: "About" }),
        /* @__PURE__ */ jsx(
          ScrollLink,
          {
            to: "/consultation",
            onClick: onClose,
            className: "btn-gold px-3 py-3 rounded-lg text-center text-sm",
            children: "Start Working Smarter"
          }
        )
      ] })
    }
  );
};

const DesktopMenu = () => /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8 font-bold text-v-navy/70", children: [
  /* @__PURE__ */ jsx(Link, { to: "/auth", className: "hover:text-(--v-gold) transition", children: "Clients" }),
  /* @__PURE__ */ jsx(Link, { to: "/content", className: "hover:text-(--v-gold) transition", children: "Content" }),
  /* @__PURE__ */ jsx(ScrollLink, { to: "/", hash: "services", className: "hover:text-(--v-gold) transition", children: "Services" }),
  /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-(--v-gold) transition", children: "About" }),
  /* @__PURE__ */ jsx(Link, { to: "/consultation", className: "btn-gold px-6 py-2.5 rounded-lg text-sm", children: "Start Working Smarter" })
] });

const ServiceIcon = ({ icon, color, hover }) => {
  const [isHovered, setIsHovered] = useState(false);
  const defaultColor = color ?? "var(--v-icon)";
  const hoverColor = hover ?? "var(--v-gold)";
  return /* @__PURE__ */ jsx(
    FontAwesomeIcon,
    {
      icon,
      size: "xl",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        color: isHovered ? hoverColor : defaultColor,
        transition: "color 0.2s ease-in-out",
        // Smooth color change
        cursor: isHovered ? "pointer" : "default"
      }
    }
  );
};

const MobileMenuBtn = ({ open, setOpen }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: (e) => {
        e.stopPropagation();
        setOpen();
      },
      className: "md:hidden flex flex-col justify-center items-center gap-1.5",
      "aria-label": "Toggle menu",
      children: /* @__PURE__ */ jsx(ServiceIcon, { icon: open ? faClose : faBars, color: "var(--v-navy)" })
    }
  );
};

function Nav() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("nav", { className: "fixed w-full z-50 bg-white border-b border-gray-100", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 h-20 flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", onClick: () => setOpen(false), children: /* @__PURE__ */ jsx("img", { src: "/nb-logo-w-text.png", alt: "Vendata Solutions Logo", className: "h-15" }) }),
      /* @__PURE__ */ jsx(DesktopMenu, {}),
      /* @__PURE__ */ jsx(MobileMenuBtn, { open, setOpen: () => setOpen((prev) => !prev) })
    ] }),
    /* @__PURE__ */ jsx(MobileMenu, { open, onClose: () => setOpen(false) })
  ] });
}

const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "py-12 border-t border-gray-100 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-slate-400 font-medium", children: "© 2026 Vendata Solutions. All rights reserved." }) });
};

const Route$d = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      { title: "VenData Solutions | Custom ERP, API Bridging & Automation" },
      {
        name: "description",
        content: "VenData Solutions unifies business operations through custom ERP/CRM development, API bridging, and precision automation. We eliminate data silos and manual bottlenecks to build a seamless digital infrastructure."
      },
      { property: "og:title", content: "VenData Solutions | Operational Excellence through Data" },
      { property: "og:description", content: "Connect your tools, automate your workflows, and gain actionable insights with custom software solutions from VenData." }
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" },
      { rel: "icon", href: "/nb-logo.png" },
      { rel: "apple-touch-icon", href: "/nb-logo.png" }
    ]
  }),
  component: RootComponent,
  notFoundComponent: () => /* @__PURE__ */ jsx("h1", { children: "404 - Page Not Found" })
});
function RootComponent() {
  return /* @__PURE__ */ jsxs(RootDocument, { children: [
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Scripts, {})
  ] });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "dark text-slate-200", children: [
      /* @__PURE__ */ jsx(Nav, {}),
      /* @__PURE__ */ jsx("main", { className: "pt-20", children }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}

const $$splitComponentImporter$c = () => import('./content-BciGBjZ1.js');
const Route$c = createFileRoute("/content")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});

const $$splitComponentImporter$b = () => import('./contact-CrP5-yXf.js');
const Route$b = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us | VenData Solutions"
    }, {
      name: "description",
      content: "Ready to unify your business data? Contact VenData Solutions for expert consulting on custom ERP/CRM systems, API integrations, and automation. Let's build your solution."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});

const $$splitComponentImporter$a = () => import('./auth-CFnitgqs.js');
const Route$a = createFileRoute("/auth")({
  head: () => ({
    meta: [{
      title: "Sign In | VenData Solutions Portal"
    }, {
      name: "description",
      content: "Secure access to the VenData Solutions client portal. Manage your integrations, view data analytics, and monitor your custom automation workflows."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});

const $$splitComponentImporter$9 = () => import('./app-CQdZ-Stl.js');
const Route$9 = createFileRoute("/app")({
  head: () => ({
    meta: [{
      title: "Dashboard | VenData Solutions App"
    }, {
      name: "description",
      content: "VenData Solutions Operations Dashboard. Centralized control for your custom ERP/CRM integrations and automated business processes."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});

const $$splitComponentImporter$8 = () => import('./about-Dqd3iCi_.js');
const Route$8 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us | The Team Behind VenData Solutions"
    }, {
      name: "description",
      content: "Discover the expertise behind VenData Solutions. We specialize in building custom ERP/CRM systems and API integrations that empower businesses to operate with technical precision."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});

const $$splitComponentImporter$7 = () => import('./_404-Bq9KjWFp.js');
const Route$7 = createFileRoute("/$404")({
  head: () => ({
    meta: [{
      title: "Page Not Found | VenData Solutions"
    }, {
      name: "description",
      content: "The page you are looking for doesn't exist or has been moved. Explore VenData Solutions for custom ERP/CRM, API bridging, and business automation services."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});

const $$splitComponentImporter$6 = () => import('./index-CrXhRv9e.js');
const Route$6 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
  // loader: async () => await getCount()
});

const $$splitComponentImporter$5 = () => import('./content.index-BZ5xhlya.js');
const Route$5 = createFileRoute("/content/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});

const $$splitComponentImporter$4 = () => import('./index-D8q0d7h6.js');
const Route$4 = createFileRoute("/consultation/")({
  head: () => ({
    meta: [{
      title: "Consultation | VenData Solutions"
    }, {
      name: "description",
      content: "Schedule your consultation with VenData Solutions. Discover how our custom data automation and AI-driven software solutions can scale your business operations."
    }],
    scripts: [{
      src: "https://assets.calendly.com/assets/external/widget.js",
      async: true
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});

const createSsrRpc = (functionId, importer) => {
  const url = "/_serverFn/" + functionId;
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    functionId,
    [TSS_SERVER_FUNCTION]: true
  });
};

const getPost = createServerFn().inputValidator((data) => data).handler(createSsrRpc("7d7e857e3252f6ecf0c7eabed1b93b93ea9bc14341b78a5c25ea74735091c89a"));

const $$splitNotFoundComponentImporter = () => import('./content._postId-BMPKn2OL.js');
const $$splitComponentImporter$3 = () => import('./content._postId-rarr7gma.js');
const Route$3 = createFileRoute("/content/$postId")({
  // 1. Fetch data from the API (using JSONPlaceholder for now)
  loader: async ({
    params
  }) => {
    const res = await getPost({
      data: {
        postId: params.postId
      }
    });
    if (!res) throw notFound();
    return res;
  },
  // 2. Inject data into the Head
  head: ({
    loaderData
  }) => {
    if (!loaderData?.title || !loaderData?.body) {
      return {
        title: "Post Not Found | VenData Solutions"
      };
    }
    console.log({
      loaderData
    });
    const {
      title,
      body
    } = loaderData;
    return {
      meta: [{
        title: `${title.length > 50 ? title.slice(0, 50) : title} | VenData Blog`
      }, {
        name: "description",
        content: body.slice(0, 155)
        // Clean excerpt for SEO
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: body.slice(0, 155)
      }, {
        property: "og:type",
        content: "article"
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});

const $$splitComponentImporter$2 = () => import('./book-DW1AoZLK.js');
const Route$2 = createFileRoute("/consultation/book")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});

const $$splitComponentImporter$1 = () => import('./app.dashboard-Stg2JkK-.js');
const Route$1 = createFileRoute("/app/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});

const $$splitComponentImporter = () => import('./app._layout-CsIxCGkn.js');
const Route = createFileRoute("/app/_layout")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});

const ContentRoute = Route$c.update({
  id: "/content",
  path: "/content",
  getParentRoute: () => Route$d
});
const ContactRoute = Route$b.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$d
});
const AuthRoute = Route$a.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$d
});
const AppRoute = Route$9.update({
  id: "/app",
  path: "/app",
  getParentRoute: () => Route$d
});
const AboutRoute = Route$8.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$d
});
const R404Route = Route$7.update({
  id: "/$404",
  path: "/$404",
  getParentRoute: () => Route$d
});
const IndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const ContentIndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => ContentRoute
});
const ConsultationIndexRoute = Route$4.update({
  id: "/consultation/",
  path: "/consultation/",
  getParentRoute: () => Route$d
});
const ContentPostIdRoute = Route$3.update({
  id: "/$postId",
  path: "/$postId",
  getParentRoute: () => ContentRoute
});
const ConsultationBookRoute = Route$2.update({
  id: "/consultation/book",
  path: "/consultation/book",
  getParentRoute: () => Route$d
});
const AppDashboardRoute = Route$1.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AppRoute
});
const AppLayoutRoute = Route.update({
  id: "/_layout",
  getParentRoute: () => AppRoute
});
const AppRouteChildren = {
  AppLayoutRoute,
  AppDashboardRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const ContentRouteChildren = {
  ContentPostIdRoute,
  ContentIndexRoute
};
const ContentRouteWithChildren = ContentRoute._addFileChildren(ContentRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  R404Route,
  AboutRoute,
  AppRoute: AppRouteWithChildren,
  AuthRoute,
  ContactRoute,
  ContentRoute: ContentRouteWithChildren,
  ConsultationBookRoute,
  ConsultationIndexRoute
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();

const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};

const router = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: 'Module' }));

export { Route$3 as R, ServiceIcon as S, createSsrRpc as c, router as r, useModalClose as u };
