<template>
  <div class="search-bar">
    <div class="form-group form-inline">
      <input
        type="text"
        v-model="searchText"
        class="form-control text-white bg-dark border-dark"
        placeholder="Search"
      />
      <button
        type="button"
        class="m-3 btn"
        @click="$emit('button-clicked', searchText, selectedOption)"
      >
        Search
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

export default {
  name: "SearchBar",
  data() {
    return {
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
