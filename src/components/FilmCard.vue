<template>
  <div class="card" @click="onCardClick">
    <img class="card-img-top" :src="imageUrl" />
    <div class="card-body">
      <div class="row">
        <div class="col-9">
          <h6 class="card-title">{{ title }}</h6>
        </div>
        <div class="col">
          <span class="card-title border rounded p-1">
            {{ releaseYear | extractYear }}
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="card-text">
            <small>{{ genres | joinByComma }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EVENTS } from "../config/constants";

export default {
  name: "FilmCard",
  props: {
    movie: {
      type: Object,
      require: true
    }
  },
  computed: {
    title() {
      return this.movie.title;
    },
    imageUrl() {
      return this.movie.poster_path;
    },
    genres() {
      return this.movie.genres;
    },
    releaseYear() {
      return this.movie.release_date;
    }
  },
  methods: {
    onCardClick() {
      console.log("FilmCard#onCardClick");
      this.$emit(EVENTS.FILM_CARD_CLICKED);
    }
  }
};
</script>

<style scoped>
.card {
  cursor: pointer;
  max-width: 32rem;
  background-color: #232323;
}
.card-body .card-text {
  color: #555555;
}
.card-body .card-title {
  color: #ffffff;
}
</style>
