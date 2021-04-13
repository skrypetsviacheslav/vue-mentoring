import Vue from "vue";
import FilmDetailPage from "./FilmDetailPage.vue";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  store: store,
  render: h => h(FilmDetailPage)
}).$mount("#app");
