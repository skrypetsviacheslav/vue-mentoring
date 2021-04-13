import Vue from "vue";
import MainPage from "./MainPage.vue";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  store: store,
  render: h => h(MainPage)
}).$mount("#app");
