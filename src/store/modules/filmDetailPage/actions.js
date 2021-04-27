import { STATES, ACTIONS, MUTATIONS } from "./constants";
import { STATES as ROOT_STATES } from "@/store/constants";
import { APP_CONFIG } from "@/config/constants";
import { SEARCH_BY_OPTIONS } from "@/store/modules/search/constants";
import MovieApiService from "@/core/movieApiService";

export const actions = {
  [ACTIONS.SEARCH_MOVIES_BY_GENRE]: ({ rootState, commit }) => {
    const selectedMovie = rootState[ROOT_STATES.SELECTED_MOVIE];
    const genre = selectedMovie.genres[0];
    const limit = APP_CONFIG.UPLOADING_MOVIES_CHUNK_SIZE;

    MovieApiService.getMovies({
      search: genre,
      searchBy: SEARCH_BY_OPTIONS.GENRE,
      limit
    })
      .then(({ data }) => {
        commit(MUTATIONS.SET_GALLERY_MOVIES, data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  },
  [ACTIONS.LOAD_MORE_MOVIES]: ({ state, rootState, commit }) => {
    const selectedMovie = rootState[ROOT_STATES.SELECTED_MOVIE];
    const genre = selectedMovie.genres[0];
    const offset = state[STATES.GALLERY_MOVIES].length;
    const limit = APP_CONFIG.UPLOADING_MOVIES_CHUNK_SIZE;

    MovieApiService.getMovies({
      search: genre,
      searchBy: SEARCH_BY_OPTIONS.GENRE,
      offset,
      limit
    })
      .then(({ data }) => {
        commit(MUTATIONS.ADD_MOVIES_TO_GALLERY, data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }
};
