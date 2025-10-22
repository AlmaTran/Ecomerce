import { lazy } from "react";


const routers = [
  {
    path: "/",
    component: lazy(() => import("@components/HomePage/Homepage"))
  },
  {
    path: "/banner",
    component: lazy(() => import("@components/Banner/Banner"))
  },
];


export default routers;
