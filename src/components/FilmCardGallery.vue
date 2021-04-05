<template>
  <div class="gallery container-fluid">
    <div class="row min-vh-100 align-items-center">
      <div class="col" v-if="!cards || !cards.length">
        <h1 class="text-white text-center">{{ noFilmFoundMessage }}</h1>
      </div>
      <div class="col-md-4" v-for="card in cards" :key="card.id">
        <FilmCard
          class="mb-4"
          :imageUrl="card.poster_path"
          :title="card.title"
          :releaseDate="card.release_date"
          :genres="card.genres"
          @film-card-clicked="onCardClick(card.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilmCard from "./FilmCard.vue";

import { EVENTS } from "../config/constants";
import I18N from "../config/i18n/index";

export default {
  name: "FilmCardGallery",
  components: { FilmCard },
  data: () => {
    return {
      noFilmFoundMessage: I18N["EN"].NO_FILM_FOUND_MESSAGE
    };
  },
  props: {
    cards: { type: Array }
  },
  methods: {
    onCardClick(cardId) {
      console.log("onCardClick");
      this.$emit(EVENTS.FILM_GALLERY_CARD_CLICKED, cardId);
    }
  }
};
</script>

<style scoped></style>
