import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    component: () => import("@/pages/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("vue3-portfolio"),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return {
        top: 0,
        behavior: "smooth",
      };
    }
  },
  routes,
});

export default router;
