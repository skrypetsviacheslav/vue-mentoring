import { MUTATIONS, STATES } from "./constants";

export const mutations = {
  [MUTATIONS.SET_SEARCH_TEXT]: (state, searchText) => {
    state[STATES.SEARCH_TEXT] = searchText;
  },
  [MUTATIONS.SET_SEARCH_BY_OPTION]: (state, searchByOption) => {
    state[STATES.SEARCH_BY_OPTION] = searchByOption;
  }
};
