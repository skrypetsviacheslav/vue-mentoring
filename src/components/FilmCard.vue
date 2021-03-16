<template>
  <div class="card">
    <img class="card-img-top" :src="imageUrl" :alt="title" />
    <div class="card-body ">
      <div class="row">
        <div class="col-9">
          <h6 class="card-title">{{ title }}</h6>
        </div>
        <p class="col card-title border rounded">{{ releaseDate }}</p>
      </div>
      <div class="row">
        <div class="col-9">
          <p class="card-text">{{ genre }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "film-card",
  props: {
    imageUrl: String,
    title: String,
    releaseDate: String,
    genre: String
  }
};
</script>

<style scoped>
.card {
  width: 18rem;
  background-color: #232323;
}
.card-body .card-text {
  color: #555555;
}
.card-body .card-title {
  color: #ffffff;
}
</style>
