<template>
  <div class="gallery container-fluid">
    <div class="row min-vh-100 align-items-center">
      <div class="col" v-if="!cards || !cards.length">
        <h1 class="text-white text-center">No films found</h1>
      </div>
      <div class="col-md-4" v-for="card in cards" :key="card.id">
        <FilmCard
          class="mb-4"
          :imageUrl="card.poster_path"
          :title="card.title"
          :releaseDate="card.release_date.substring(0, 4)"
          :genres="card.genres"
          @card-clicked="$emit('card-clicked', card.id)"
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
