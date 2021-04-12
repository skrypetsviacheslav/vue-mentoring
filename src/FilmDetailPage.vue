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
                :releaseDate="selectedMovie.release_date"
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
              {{ filmsByMsg }}
            </span>
          </div>
        </div>
      </template>

      <FilmCardGallery
        class="gallery__bg-dark p-4"
        :cards="movies"
        @film-gallery-card-clicked="onFilmCardClick"
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

import I18N from "./config/i18n/index";
import { MUTATIONS } from "./config/constants";

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
      filmsByPrefix: I18N["EN"].DETAIL_PAGE_FILMS_BY_PREFIX_MSG,
      filmsBySuffix: I18N["EN"].DETAIL_PAGE_FILMS_BY_SUFFIX_MSG
    };
  },
  computed: {
    selectedMovie() {
      return this.$store.state.selectedMovie;
    },
    selectedMovieMainGenre() {
      return this.selectedMovie.genres[0];
    },
    movies() {
      return this.$store.getters
        .moviesFilteredByGenre(this.selectedMovieMainGenre)
        .filter(movie => movie.id !== this.selectedMovie.id);
    },
    filmsByMsg() {
      return `${this.filmsByPrefix} ${this.selectedMovieMainGenre} ${this.filmsBySuffix}`;
    }
  },
  methods: {
    onFilmCardClick(movieID) {
      console.log("FilmDetailPage#onFilmCardClick id", movieID);
      const newSelectedMovie = this.$store.getters.findMovie(movieID);
      this.$store.commit(MUTATIONS.SET_SELECTED_MOVIE, newSelectedMovie);
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
