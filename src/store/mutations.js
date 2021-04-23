import { MUTATIONS } from "./constants";

export const mutations = {
  [MUTATIONS.SET_SELECTED_MOVIE]: (state, movie) => {
    state.selectedMovie = movie;
  }
};
