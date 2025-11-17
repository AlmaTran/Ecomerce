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
   {
    path: "/shop",
    component: lazy(() => import("@pages/OurShop/OurShop"))
  },
];


export default routers;
