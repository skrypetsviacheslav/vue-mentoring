import { MUTATIONS, STATES } from "./constants";

export const mutations = {
  [MUTATIONS.ADD_MOVIES_TO_GALLERY]: (state, movies) => {
    movies.forEach(movie => state[STATES.GALLERY_MOVIES].push(movie));
  },
  [MUTATIONS.SET_GALLERY_MOVIES]: (state, movies) => {
    state[STATES.GALLERY_MOVIES] = movies;
  }
};
