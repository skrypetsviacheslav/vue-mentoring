<template>
  <div class="toogle">
    <label class="label">
      {{ label }}
    </label>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn active">
        <input
          type="radio"
          name="options"
          @change="onValueSwitched($event.target.value)"
          :value="firstOption"
          checked
        />
        {{ firstOption }}
      </label>
      <label class="btn">
        <input
          type="radio"
          name="options"
          @change="onValueSwitched($event.target.value)"
          :value="secondOption"
        />
        {{ secondOption }}
      </label>
    </div>
  </div>
</template>

<script>
import { EVENTS } from "../config/constants";

export default {
  name: "Toogle",
  props: {
    label: {
      type: String,
      require: true
    },
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
    onValueSwitched(newValue) {
      console.log("onValueSwitched");
      this.$emit(EVENTS.TOOGLE_VALUE_SWITCHED, newValue);
    }
  }
};
</script>
<style scoped>
.label {
  color: white;
  padding: 5px 15px 15px 0px;
}
.btn {
  color: white;
}
.btn:not(:disabled) {
  background-color: #424242;
  border-color: #424242;
}
.btn:not(:disabled).active {
  background-color: #f65261;
  border-color: #f65261;
}
</style>
