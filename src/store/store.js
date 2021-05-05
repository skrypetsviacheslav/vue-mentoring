import Vue from "vue";
import Vuex from "vuex";

import mainPage from "./modules/mainPage/mainPageModule";
import search from "./modules/search/searchModule";
import detailPage from "./modules/filmDetailPage/filmDetaiPagelModule";
import { MODULE_NAME as MAIN_PAGE_MODULE } from "./modules/mainPage/constants";
import { MODULE_NAME as SEARCH_MODULE } from "./modules/search/constants";
import { MODULE_NAME as DETAIL_PAGE_MODULE } from "./modules/filmDetailPage/constants";

import { STATES } from "./constants";
import { mutations } from "./mutations";
import { actions } from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    [STATES.SELECTED_MOVIE]: {}
  },
  mutations,
  actions,
  modules: {
    [MAIN_PAGE_MODULE]: mainPage,
    [SEARCH_MODULE]: search,
    [DETAIL_PAGE_MODULE]: detailPage
  }
});
