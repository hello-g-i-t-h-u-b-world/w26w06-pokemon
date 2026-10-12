import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/list.tsx"),    // index는 기본으로 하나, 페이지가 추가될 경우 route 이용
    route("detail", "routes/detail.tsx"),
] satisfies RouteConfig;