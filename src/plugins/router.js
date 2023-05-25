import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "", name: "home", component: () => import("@/views/Home.vue") },
  {
    path: "/landing_1",
    name: "landing_1",
    component: () => import("@/views/landing/Landing_1.vue"),
  },
  {
    path: "/landing_2",
    name: "landing_2",
    component: () => import("@/views/landing/Landing_2.vue"),
  },
  {
    path: "/landing_3",
    name: "landing_3",
    component: () => import("@/views/landing/Landing_3.vue"),
  },
  {
    path: "/landing_4",
    name: "landing_4",
    component: () => import("@/views/landing/Landing_4.vue"),
  },
  {
    path: "/landing_5",
    name: "landing_5",
    component: () => import("@/views/landing/Landing_5.vue"),
  },
  {
    path: "/landing_6",
    name: "landing_6",
    component: () => import("@/views/landing/Landing_6.vue"),
  },
  {
    path: "/landing_7",
    name: "landing_7",
    component: () => import("@/views/landing/Landing_7.vue"),
  },
  {
    path: "/landing_8",
    name: "landing_8",
    component: () => import("@/views/landing/Landing_8.vue"),
  },
  {
    path: "/landing_9",
    name: "landing_9",
    component: () => import("@/views/landing/Landing_9.vue"),
  },
  {
    path: "/landing_10",
    name: "landing_10",
    component: () => import("@/views/landing/Landing_10.vue"),
  },
  {
    path: "/landing_11",
    name: "landing_11",
    component: () => import("@/views/landing/Landing_11.vue"),
  },
  {
    path: "/landing_12",
    name: "landing_12",
    component: () => import("@/views/landing/Landing_12.vue"),
  },
  {
    path: "/landing_13",
    name: "landing_13",
    component: () => import("@/views/landing/Landing_13.vue"),
  },
  {
    path: "/landing_14",
    name: "landing_14",
    component: () => import("@/views/landing/Landing_14.vue"),
  },
  {
    path: "/landing_15",
    name: "landing_15",
    component: () => import("@/views/landing/Landing_15.vue"),
  },
  {
    path: "/landing_16",
    name: "landing_16",
    component: () => import("@/views/landing/Landing_16.vue"),
  },
  {
    path: "/landing_17",
    name: "landing_17",
    component: () => import("@/views/landing/Landing_17.vue"),
  },
  {
    path: "/landing_18",
    name: "landing_18",
    component: () => import("@/views/landing/Landing_18.vue"),
  },
  {
    path: "/landing_19",
    name: "landing_19",
    component: () => import("@/views/landing/Landing_19.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
