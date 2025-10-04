import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("Layouts/sidemenu.tsx", [
    index("routes/home.tsx"),
    route("popular", "routes/popular.tsx"),
    route("search", "routes/search.tsx"),
  ]),
] satisfies RouteConfig;
