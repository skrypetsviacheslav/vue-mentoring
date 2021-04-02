<template>
  <div id="app">
    <BaseLayout>
      <template v-slot:header>
        <Header>
          <div class="row">
            <div class="col">
              <AppNameLabel />
            </div>
            <div class="col">
              <div class="float-right">
                <a href="/">
                  <i class="fa fa-search icon-red"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <FilmDetailCard
                :imageUrl="selectedMovie.poster_path"
                :title="selectedMovie.title"
                :releaseDate="selectedMovie.release_date.substring(0, 4)"
                :duration="selectedMovie.runtime"
                :genres="selectedMovie.genres"
                :description="selectedMovie.overview"
                :rate="selectedMovie.vote_average"
              />
            </div>
          </div>
        </Header>
      </template>

      <template v-slot:toolbar>
        <div class="row">
          <div class="col pl-5">
            <span class="text-white pl-5">
              Films by {{ selectedMovie.genres[0] }} genre
            </span>
          </div>
        </div>
      </template>

      <FilmCardGallery
        class="gallery__bg-dark p-4"
        :cards="movies"
        @card-clicked="onFilmCardClick"
      />
    </BaseLayout>
  </div>
</template>

<script>
import AppNameLabel from "./components/AppNameLabel";
import Header from "./components/Header";
import FilmDetailCard from "./components/FilmDetailCard";
import FilmCardGallery from "./components/FilmCardGallery";
import BaseLayout from "./components/layout/BaseLayout";

import { mockData } from "./config/mockData";

export default {
  name: "FilmDetailPage",
  components: {
    BaseLayout,
    AppNameLabel,
    Header,
    FilmDetailCard,
    FilmCardGallery
  },
  data: () => {
    return {
      movies: mockData.movies,
      selectedMovie:
        mockData.movies[Math.floor(Math.random() * mockData.movies.length)]
    };
  },
  methods: {
    onFilmCardClick(movieID) {
      console.log("onSearchBarButtonClicked id", movieID);
      this.selectedMovie = this.movies.find(movie => movie.id === movieID);
    }
  }
};
</script>

<style scoped>
.gallery__bg-dark {
  background-color: #232323;
}
.icon-red {
  color: #f65261;
}
</style>
