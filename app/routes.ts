import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  // Language redirect
  index("routes/index.tsx"),

  // Home page
  ...prefix("/:lang", [
    layout("layouts/MainLayout.tsx", [index("routes/home.tsx")]),
  ]),
] satisfies RouteConfig;
