import { STATES, ACTIONS, MUTATIONS } from "./constants";
import { STATES as ROOT_STATES } from "../../constants";
import { APP_CONFIG } from "../../../config/constants";
import MOCK_DATA from "../../../config/mockData";

export const actions = {
  [ACTIONS.SEARCH_MOVIES_BY_GENRE]: ({ rootState, commit }) => {
    const selectedMovie = rootState[ROOT_STATES.SELECTED_MOVIE];
    const genre = selectedMovie.genres[0];
    const limit = APP_CONFIG.UPLOADING_MOVIES_CHUNK_SIZE;

    const response = MOCK_DATA.MOVIES.filter(movie =>
      movie.genres.includes(genre)
    )
      .filter(movie => movie.id !== selectedMovie.id)
      .slice(0, limit);

    commit(MUTATIONS.SET_GALLERY_MOVIES, response);
  },
  [ACTIONS.LOAD_MORE_MOVIES]: ({ state, rootState, commit }) => {
    const selectedMovie = rootState[ROOT_STATES.SELECTED_MOVIE];
    const genre = selectedMovie.genres[0];
    const offSet = state[STATES.GALLERY_MOVIES].length;
    const limit =
      offSet + APP_CONFIG.UPLOADING_MOVIES_CHUNK_SIZE < MOCK_DATA.MOVIES.length
        ? offSet + APP_CONFIG.UPLOADING_MOVIES_CHUNK_SIZE
        : MOCK_DATA.MOVIES.length;

    const response = MOCK_DATA.MOVIES.filter(movie =>
      movie.genres.includes(genre)
    )
      .filter(movie => movie.id !== selectedMovie.id)
      .slice(offSet, limit);

    commit(MUTATIONS.ADD_MOVIES_TO_GALLERY, response);
  }
};
