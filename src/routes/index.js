import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    component: () => import("@/pages/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("vue3-portfolio"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
