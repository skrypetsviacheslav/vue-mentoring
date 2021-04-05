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
              <small>{{ formattedGenres }}</small>
            </p>
          </div>
          <div class="row p-1">
            <div class="pr-3">
              <span class="spec">{{ releaseYear }}</span>
              <span class="card-text small"> year</span>
            </div>
            <div v-if="duration" class="pl-3">
              <span class="spec">{{ duration }} </span>
              <span class="card-text small">min</span>
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
export default {
  name: "FilmDetailCard",
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
    duration: {
      type: Number,
      require: true
    },
    genres: {
      type: Array,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    rate: {
      type: Number,
      require: true
    }
  },
  computed: {
    formattedGenres() {
      return this.genres.join(" & ");
    },
    releaseYear() {
      return this.releaseDate.substring(0, 4);
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
