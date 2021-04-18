import { ACTIONS, MUTATIONS } from "./constants";
import {
  MODULE_NAME as SEARCH_MODULE_NAME,
  STATES as SEARCH_STATES,
  SEARCH_BY_OPTIONS
} from "../search/constants";
import { APP_CONFIG } from "../../../config/constants";
import MOCK_DATA from "../../../config/mockData";

export const actions = {
  [ACTIONS.SEARCH_MOVIES]: ({ rootState, commit }) => {
    const searchByOption =
      rootState[SEARCH_MODULE_NAME][SEARCH_STATES.SEARCH_BY_OPTION];
    const searchText = rootState[SEARCH_MODULE_NAME][SEARCH_STATES.SEARCH_TEXT];

    const limit = APP_CONFIG.UPLOADING_MOVIES_CHUNK_SIZE;
    if (searchByOption === SEARCH_BY_OPTIONS.TITLE) {
      const response = MOCK_DATA.MOVIES.filter(movie =>
        movie.title.includes(searchText)
      ).slice(0, limit);

      commit(MUTATIONS.SET_GALLERY_MOVIES, response);
    } else {
      const response = MOCK_DATA.MOVIES.filter(movie =>
        movie.genres.find(genre => genre.includes(searchText))
      ).slice(0, limit);

      commit(MUTATIONS.SET_GALLERY_MOVIES, response);
    }
  },
  [ACTIONS.LOAD_MORE_MOVIES]: ({ state, rootState, commit }) => {
    const offSet = state.galleryMovies.length;
    const limit =
      offSet + APP_CONFIG.UPLOADING_MOVIES_CHUNK_SIZE < MOCK_DATA.MOVIES.length
        ? offSet + APP_CONFIG.UPLOADING_MOVIES_CHUNK_SIZE
        : MOCK_DATA.MOVIES.length;

    const searchByOption =
      rootState[SEARCH_MODULE_NAME][SEARCH_STATES.SEARCH_BY_OPTION];
    const searchText = rootState[SEARCH_MODULE_NAME][SEARCH_STATES.SEARCH_TEXT];

    if (searchByOption === SEARCH_BY_OPTIONS.TITLE) {
      const response = MOCK_DATA.MOVIES.filter(movie =>
        movie.title.includes(searchText)
      ).slice(offSet, limit);

      commit(MUTATIONS.ADD_MOVIES_TO_GALLERY, response);
    } else {
      const response = MOCK_DATA.MOVIES.filter(movie =>
        movie.genres.find(genre => genre.includes(searchText))
      ).slice(offSet, limit);

      commit(MUTATIONS.ADD_MOVIES_TO_GALLERY, response);
    }
  }
};
