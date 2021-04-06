import Vue from "vue";
import MainPage from "./MainPage.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(MainPage)
}).$mount("#app");
