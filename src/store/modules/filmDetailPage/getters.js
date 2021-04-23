import { GETTERS, STATES } from "./constants";

export const getters = {
  [GETTERS.FIND_MOVIE]: state => id =>
    state[STATES.GALLERY_MOVIES].find(movie => movie.id === id)
};
