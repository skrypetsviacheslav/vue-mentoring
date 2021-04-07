import Vue from "vue";
import Vuex from "vuex";

import MOCK_DATA from "../config/mockData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: MOCK_DATA.MOVIES
  },
  getters: {
    findMovie: state => id => state.movies.find(movie => movie.id === id),
    moviesSortedByRating: state =>
      [...state.movies].sort((a, b) => b.vote_count - a.vote_count), // TODO: replace vote_count to vote_average
    moviesSortedByReleaseDate: state =>
      [...state.movies].sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      )
  },
  mutations: {},
  actions: {}
});
