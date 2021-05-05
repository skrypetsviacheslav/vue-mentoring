import Vue from "vue";
import MainPage from "./MainPage.vue";
import store from "./store/store";
import MovieApiService from "./core/movieApiService";
import { install } from "./plugins/movieHelperPlugin";

MovieApiService.init();

Vue.config.productionTip = false;
Vue.use(install);

new Vue({
  store: store,
  render: h => h(MainPage)
}).$mount("#app");
