import Vue from "vue";
import FilmDetailPage from "./FilmDetailPage.vue";
import store from "./store/store";
import { install } from "./plugins/movieHelperPlugin";

Vue.config.productionTip = false;

Vue.use(install);

new Vue({
  store: store,
  render: h => h(FilmDetailPage)
}).$mount("#app");
