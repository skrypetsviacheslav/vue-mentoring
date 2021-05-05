import { mutations } from "./mutations";
import { STATES, SEARCH_BY_OPTIONS, SORT_BY_OPTIONS } from "./constants";

export default {
  namespaced: true,

  state: {
    [STATES.SEARCH_TEXT]: "",
    [STATES.SEARCH_BY_OPTION]: SEARCH_BY_OPTIONS.TITLE,
    [STATES.SORT_BY_OPTION]: SORT_BY_OPTIONS.RELEASE_DATE
  },
  mutations
};
