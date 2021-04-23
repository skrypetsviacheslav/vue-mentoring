import { GETTERS, STATES } from "./constants";

export const getters = {
  [GETTERS.FIND_MOVIE]: state => id =>
    state[STATES.GALLERY_MOVIES].find(movie => movie.id === id),
  [GETTERS.GALLERY_MOVIES_SORTED_BY_RATING]: state =>
    [...state[STATES.GALLERY_MOVIES]].sort(
      (a, b) => b.vote_count - a.vote_count // TODO: replace vote_count to vote_average
    ),
  [GETTERS.GALLERY_MOVIES_SORTED_BY_RELEASE_DATE]: state =>
    [...state[STATES.GALLERY_MOVIES]].sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    )
};
