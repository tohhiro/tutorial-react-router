import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("layouts/sidemenu.tsx", [
    index("feature/home/routes/index.tsx"),
    route("popular", "feature/popular/routes/index.tsx"),
    route("search", "feature/search/routes/index.tsx"),
  ]),
  ...prefix("v1", [
    ...prefix("systems", [route("ping", "feature/ping/routes/index.tsx")]),
  ]),
] satisfies RouteConfig;
