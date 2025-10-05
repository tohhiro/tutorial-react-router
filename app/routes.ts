import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("Layouts/sidemenu.tsx", [
    index("routes/home.tsx"),
    route("popular", "routes/popular.tsx"),
    route("search", "routes/search.tsx"),
  ]),
  ...prefix("v1", [...prefix("systems", [route("ping", "routes/ping.tsx")])]),
] satisfies RouteConfig;
