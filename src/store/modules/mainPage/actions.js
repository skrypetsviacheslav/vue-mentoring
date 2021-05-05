import { ACTIONS, MUTATIONS, STATES } from "./constants";
import {
  MODULE_NAME as SEARCH_MODULE_NAME,
  STATES as SEARCH_STATES
} from "@/store/modules/search/constants";
import { APP_CONFIG } from "@/config/constants";
import MovieApiService from "@/core/movieApiService";

export const actions = {
  [ACTIONS.SEARCH_MOVIES]: ({ rootState, commit }) => {
    MovieApiService.getMovies({
      sortBy: rootState[SEARCH_MODULE_NAME][SEARCH_STATES.SORT_BY_OPTION],
      search: rootState[SEARCH_MODULE_NAME][SEARCH_STATES.SEARCH_TEXT],
      searchBy: rootState[SEARCH_MODULE_NAME][SEARCH_STATES.SEARCH_BY_OPTION],
      limit: APP_CONFIG.UPLOADING_MOVIES_CHUNK_SIZE
    })
      .then(({ data, total }) => {
        commit(MUTATIONS.SET_FOUND_MOVIES_SIZE, total);
        commit(MUTATIONS.SET_GALLERY_MOVIES, data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  },
  [ACTIONS.LOAD_MORE_MOVIES]: ({ state, rootState, commit }) => {
    const offset = state[STATES.GALLERY_MOVIES].length;
    const limit = APP_CONFIG.UPLOADING_MOVIES_CHUNK_SIZE;

    MovieApiService.getMovies({
      sortBy: rootState[SEARCH_MODULE_NAME][SEARCH_STATES.SORT_BY_OPTION],
      search: rootState[SEARCH_MODULE_NAME][SEARCH_STATES.SEARCH_TEXT],
      searchBy: rootState[SEARCH_MODULE_NAME][SEARCH_STATES.SEARCH_BY_OPTION],
      limit,
      offset
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
