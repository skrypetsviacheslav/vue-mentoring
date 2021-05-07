import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/router";
import MovieApiService from "./core/movieApiService";
import { install } from "./plugins/movieHelperPlugin";

MovieApiService.init();

Vue.config.productionTip = false;
Vue.use(install);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
