import Vue from "vue";
import Vuex from "vuex";

import { getters } from "./getters";
import { mutations } from "./mutations";
import MOCK_DATA from "../config/mockData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allMovies: MOCK_DATA.MOVIES,
    searchingMovies: MOCK_DATA.MOVIES,
    selectedMovie: MOCK_DATA.MOVIES[0]
  },
  getters,
  mutations,
  actions: {}
});
