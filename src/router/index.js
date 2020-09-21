import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/maps",
    name: "Maps",
    component: () => import("../views/Maps.vue")
  },
  {
    path: "/templates",
    name: "Templates",
    component: () => import("../views/Templates.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
