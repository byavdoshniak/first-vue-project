import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import { routes } from "./routes";

import App from "./App.vue";

Vue.use(VueRouter);
Vue.use(VueCompositionAPI);
const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  vuetify,
  router,
  render: h => h(App)
});
