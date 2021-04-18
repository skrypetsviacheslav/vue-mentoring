<template>
  <div class="gallery container-fluid">
    <div class="row min-vh-100 align-items-center">
      <div class="col" v-if="!hasContent">
        <h1 class="text-white text-center">{{ noFilmFoundMessage }}</h1>
      </div>
      <div class="col-md-4" v-for="card in cards" :key="card.id">
        <FilmCard
          class="mb-4"
          :movie="convertMovieData(card)"
          @film-card-clicked="onCardClick(card.id)"
        />
      </div>
    </div>
    <div class="row justify-content-center" v-if="hasContent">
      <button type="button" class="btn btn-lg" @click="loadMoreMovies">
        <span class="m-4">
          {{ loadMoreLabel }}
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import pick from "lodash.pick";

import FilmCard from "./FilmCard.vue";

import { EVENTS } from "../config/constants";
import I18N from "../config/i18n/index";

export default {
  name: "FilmCardGallery",
  components: { FilmCard },
  data: () => {
    return {
      noFilmFoundMessage: I18N["EN"].NO_FILM_FOUND_MESSAGE,
      loadMoreLabel: I18N["EN"].LOAD_MORE_LABEL
    };
  },
  props: {
    cards: { type: Array }
  },
  computed: {
    hasContent() {
      return this.cards && this.cards.length;
    }
  },
  methods: {
    convertMovieData(movieCard) {
      return pick(movieCard, [
        "title",
        "release_date",
        "poster_path",
        "genres"
      ]);
    },
    onCardClick(cardId) {
      console.log("FilmCardGallery#onCardClick");
      this.$emit(EVENTS.FILM_GALLERY_CARD_CLICKED, cardId);
    },
    loadMoreMovies() {
      console.log("FilmCardGallery#loadMoreMovies");
      this.$emit(EVENTS.FILM_GALLERY_LOAD_MORE_CLICKED);
    }
  }
};
</script>

<style scoped>
.btn {
  color: white;
  background-color: #f65261;
}
</style>
