import { ACTIONS, MUTATIONS } from "./constants";
import MovieApiService from "../core/movieApiService";

export const actions = {
  [ACTIONS.FETCH_SELECTED_MOVIE]: ({ commit }, movieId) => {
    return MovieApiService.getById(movieId)
      .then(response => commit(MUTATIONS.SET_SELECTED_MOVIE, response))
      .catch(error => {
        // handle error
        console.log(error);
      });
  }
};
