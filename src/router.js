import { createRouter, createWebHistory } from "vue-router"


import Home from "./pages/home/home.vue";
import listMarketPlace from "./pages/marketplace/marketplace.vue";
import NotFound from "./pages/404";
// import listMarketPlaceDetail from "./components/itemDetail.vue";

const routes = [
  {
    path: "/",
    name: "home-route",
    component: Home,
  },
  {
    path: "/marketplace",
    name: "marketplace-route",
    component: listMarketPlace,
  },
  // {
  //   path: "/marketplace/:id",
  //   component: listMarketPlaceDetail,
  // },
  {
    path: "/ts",
    redirect: "/marketplace",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;