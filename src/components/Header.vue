<template>
  <div class="navbar navbar-dark bg-dark ">
    <div class="container d-flex justify-content-between">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
