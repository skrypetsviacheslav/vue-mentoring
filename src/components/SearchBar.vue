<template>
  <div class="search-bar">
    <div class="input-group input-group-lg">
      <input
        type="text"
        v-model="searchText"
        class="form-control text-white bg-dark border-dark"
        placeholder="Search"
        @keydown.enter="$emit('button-clicked', searchText, selectedOption)"
      />
      <button
        type="button"
        class="btn input-group-btn "
        @click="$emit('button-clicked', searchText, selectedOption)"
      >
        <span class="m-4">
          Search
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
