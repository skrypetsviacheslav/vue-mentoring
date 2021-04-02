import Vue from "vue";
import FilmDetailPage from "./FilmDetailPage.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(FilmDetailPage)
}).$mount("#app");
