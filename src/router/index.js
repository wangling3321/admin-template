import Vue from "vue";
import VueRouter from "vue-router";
import index from "../components/index.vue";
import loginSign from "../components/loginSign/loginSign.vue";
Vue.use(VueRouter);
import store from "../store/index";
const routes = [
  {
    path: "/loginSign",
    name: "loginSign",
    component: loginSign,
  },
  {
    path: "/index",
    component: index,
    name: "index",
    //component: () => import("../components/index.vue"),
    children: [
      {
        path: "waitLoginTable",
        name: "waitLoginTable",
        component: () => import("../components/waitLoginTable.vue"),
      },
      {
        path: "accessLevel",
        name: "accessLevel",
        component: () => import("../components/accessLevel.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "loginSign") {
    if (store.state.accesslevel === 10) {
      next({ name: "loginSign" });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
