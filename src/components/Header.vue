<template>
  <div class="container-fluid bg-image">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.bg-image {
  background-image: url("~@/assets/posters.jpg");

  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
