import Vue from "vue";
import VueRouter from "vue-router";
import { Top } from "../components/";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Top", component: Top },
    // { path: "/create", name: "Create", component: Create },
    // { path: "/edit/:id", name: "Edit", component: Edit }
  ]
});

export default router;
