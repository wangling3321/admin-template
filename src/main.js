import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import "normalize.css/normalize.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//import env from "../env";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

//axios.defaults.baseURL = env.baseURL;
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

//mock开关
const mock = false;
if (mock) {
  require("../mock/mock");
}

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
