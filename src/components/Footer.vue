<template>
  <div class="navbar">
    <div class="container d-flex justify-content-between">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.navbar {
  background-color: #424242;
}
</style>
