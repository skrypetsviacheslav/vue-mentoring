import Vue from "vue";
import VueRouter from "vue-router";

import { PATH, NAME } from "./constants";
import MainPage from "@/components/pages/MainPage";
import FilmDetailPage from "@/components/pages/FilmDetailPage";
import NotFound from "@/components/pages/NotFound";
import { ACTIONS } from "@/store/constants";
import store from "@/store/store";

Vue.use(VueRouter);

const routes = [
  { path: PATH.MAIN_PAGE, name: NAME.MAIN_PAGE, component: MainPage },
  {
    path: PATH.DETAIL_PAGE,
    name: NAME.DETAIL_PAGE,
    component: FilmDetailPage,
    beforeEnter: (to, from, next) => {
      const id = to.params.id;
      store
        .dispatch(ACTIONS.FETCH_SELECTED_MOVIE, id)
        .then(next)
        .catch(() => {
          next({ name: NAME.NOT_FOUND, replace: true });
        });
    }
  },
  { path: PATH.NOT_FOUND, name: NAME.NOT_FOUND, component: NotFound }
];

export default new VueRouter({
  mode: "history",
  routes,
  base : process.env.NODE_ENV === "production" ? "/vue-mentoring/" : "/"
});
