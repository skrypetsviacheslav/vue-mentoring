<template>
  <div class="gallery container">
    <div class="row">
      <p v-if="!cards || !cards.length">No films availiable</p>
      <div class="col-md-4" v-for="card in cards" :key="card.title">
        <FilmCard
          class="mb-4"
          :imageUrl="card.imageUrl"
          :title="card.title"
          :releaseDate="card.releaseDate"
          :genre="card.genre"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilmCard from "./FilmCard.vue";

export default {
  name: "FilmCardGallery",
  components: { FilmCard },
  props: {
    cards: { type: Array }
  }
};
</script>

<style scoped></style>
