//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const routes = [
  {
    path: "/",
    name: "post.index",
    component: () => import("@/view/index.vue"),
  },
  {
    path: "/create",
    name: "post.create",
    component: () => import("@/view/create.vue"),
  },
  {
    path: "/edit/:id",
    name: "post.edit",
    component: () => import("@/view/edit.vue"),
  },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // config routes
});

export default router;
