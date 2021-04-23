import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

import { STATES } from "./constants";

export default {
  namespaced: true,

  state: {
    [STATES.GALLERY_MOVIES]: []
  },
  getters,
  mutations,
  actions
};
