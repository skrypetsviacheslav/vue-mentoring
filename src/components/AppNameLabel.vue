<template>
  <p class="application-name-label">
    <!-- eslint-disable -->
    <b>{{ companyName }}</b>{{ appName }}
    <!-- eslint-enable -->
  </p>
</template>

<script>
export default {
  name: "AppNameLabel",
  props: {
    companyName: {
      type: String,
      default: "netflix"
    },
    appName: {
      type: String,
      default: "roulette"
    }
  }
};
</script>

<style scoped>
.application-name-label {
  color: #f65261;
}
</style>
