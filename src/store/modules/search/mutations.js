import { MUTATIONS, STATES } from "./constants";

export const mutations = {
  [MUTATIONS.SET_SEARCH_TEXT]: (state, searchText) => {
    state[STATES.SEARCH_TEXT] = searchText;
  },
  [MUTATIONS.SET_SEARCH_BY_OPTION]: (state, searchByOption) => {
    state[STATES.SEARCH_BY_OPTION] = searchByOption;
  },
  [MUTATIONS.SET_SORT_BY_OPTION]: (state, sortByOption) => {
    state[STATES.SORT_BY_OPTION] = sortByOption;
  }
};
