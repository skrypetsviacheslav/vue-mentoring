<template>
  <div class="card">
    <img class="card-img-top" :src="imageUrl" />
    <div class="card-body">
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
  name: "FilmCard",
  props: {
    imageUrl: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    releaseDate: {
      type: String,
      require: true
    },
    genre: {
      type: String,
      require: true
    }
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
