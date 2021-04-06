<template>
  <div class="search-bar">
    <div class="input-group input-group-lg">
      <input
        type="text"
        v-model="searchText"
        class="form-control text-white bg-dark border-dark"
        placeholder="Search"
        @keydown.enter="searchSubmitted"
      />
      <button
        type="button"
        class="btn input-group-btn "
        @click="searchSubmitted"
      >
        <span class="m-4">
          {{ searchButtonLabel }}
        </span>
      </button>
    </div>
    <Toogle
      label="SEARCH BY"
      :firstOption="firstOption"
      :secondOption="secondOption"
      @value-switched="seachByOptionChanged"
    />
  </div>
</template>

<script>
import Toogle from "./Toogle.vue";

import { EVENTS } from "../config/constants";
import I18N from "../config/i18n/index";

export default {
  name: "SearchBar",
  data() {
    return {
      searchButtonLabel: I18N["EN"].SEARCH_BAR_BUTTON_LABEL,
      selectedOption: this.firstOption,
      searchText: ""
    };
  },
  components: { Toogle },
  props: {
    firstOption: {
      type: String,
      require: true
    },
    secondOption: {
      type: String,
      require: true
    }
  },
  methods: {
    seachByOptionChanged(newValue) {
      this.selectedOption = newValue;
    },
    searchSubmitted() {
      console.log("onSearchSubmitted");
      this.$emit(
        EVENTS.SEARCH_BAR_SEARCH_SUBMITTED,
        this.searchText,
        this.selectedOption
      );
    }
  }
};
</script>
<style scoped>
.btn {
  color: white;
  background-color: #f65261;
}
</style>
