<template>
  <div class="container-fluid p-1">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.container-fluid {
  background-color: #424242;
}
</style>
