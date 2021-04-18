<template>
  <div class="card">
    <div class="row">
      <div class="col-4">
        <img :src="imageUrl" class="card-img" />
      </div>
      <div class="col-8">
        <div class="card-body">
          <div class="row">
            <div class="card-text">
              <h1 class="pr-3">{{ title }}</h1>
            </div>
            <div class="card-text text-center">
              <span class="border rounded-circle p-2 h1">
                {{ rate }}
              </span>
            </div>
          </div>
          <div class="row p-1">
            <p class="card-text">
              <small>{{ genres | joinByComma }}</small>
            </p>
          </div>
          <div class="row p-1">
            <div class="pr-3">
              <span class="spec">{{ releaseYear | extractYear }}</span>
              <span class="card-text small"> {{ year }}</span>
            </div>
            <div v-if="duration" class="pl-3">
              <span class="spec">{{ duration }} </span>
              <span class="card-text small"> {{ min }}</span>
            </div>
          </div>
          <div class="row p-1">
            <p class="card-text">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import I18N from "../config/i18n/index";

export default {
  name: "FilmDetailCard",
  props: {
    movie: {
      type: Object,
      require: true
    }
  },
  data: () => {
    return {
      year: I18N["EN"].YEAR,
      min: I18N["EN"].MIN
    };
  },
  computed: {
    title() {
      return this.movie.title;
    },
    imageUrl() {
      return this.movie.poster_path;
    },
    rate() {
      return this.movie.vote_average;
    },
    genres() {
      return this.movie.genres;
    },
    releaseYear() {
      return this.movie.release_date;
    },
    duration() {
      return this.movie.runtime;
    },
    description() {
      return this.movie.overview;
    }
  }
};
</script>
<style scoped>
.card {
  background-color: rgba(0, 0, 0, 0.5);
}
.card-body {
  color: #ffffff;
}
.card-body .spec {
  color: #f65261;
}
.card-body .card-text {
  color: #ffffff;
}
</style>
