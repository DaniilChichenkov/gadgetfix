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
    layout("layouts/MainLayout.tsx", [
      // Home page
      index("routes/home.tsx"),
      // Services page
      route("services", "routes/services.tsx"),
      // Services for device category
      route("services/:deviceCategory", "routes/deviceCategoryService.tsx"),
      // Selected service for certain device category (Ex.: Smartphones - Screen repair)
      route(
        "services/:deviceCategory/:selectedService",
        "routes/selectedServiceForDeviceCategory.tsx",
      ),
    ]),
  ]),
] satisfies RouteConfig;
