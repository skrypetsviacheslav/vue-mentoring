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
                <a style="cursor: pointer" @click="goToMainPage">
                  <i class="fa fa-search icon-red"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <FilmDetailCard :movie="selectedMovie" />
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
        @film-gallery-load-more-clicked="OnFilmGalleryLoadMoreClicked"
      />
    </BaseLayout>
  </div>
</template>

<script>
import pick from "lodash.pick";

import AppNameLabel from "./components/AppNameLabel";
import Header from "./components/Header";
import FilmDetailCard from "./components/FilmDetailCard";
import FilmCardGallery from "./components/FilmCardGallery";
import BaseLayout from "./components/layout/BaseLayout";

import I18N from "./config/i18n/index";
import {
  MODULE_NAME,
  ACTIONS,
  GETTERS,
  STATES as DETAILS_PAGE_STATES
} from "./store/modules/filmDetailPage/constants";
import { STATES, MUTATIONS } from "./store/constants";
import { publicPath } from "../vue.config";

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
      return pick(this.$store.state[STATES.SELECTED_MOVIE], [
        "id",
        "title",
        "poster_path",
        "vote_average",
        "genres",
        "release_date",
        "runtime",
        "overview"
      ]);
    },
    selectedMovieMainGenre() {
      return this.selectedMovie.genres[0];
    },
    movies() {
      return this.$store.state[MODULE_NAME][DETAILS_PAGE_STATES.GALLERY_MOVIES];
    },
    filmsByMsg() {
      return `${this.filmsByPrefix} ${this.selectedMovieMainGenre} ${this.filmsBySuffix}`;
    }
  },
  methods: {
    onFilmCardClick(movieID) {
      console.log("FilmDetailPage#onFilmCardClick id", movieID);
      const newSelectedMovie = this.$store.getters[
        MODULE_NAME + "/" + GETTERS.FIND_MOVIE
      ](movieID);
      this.$store.commit(MUTATIONS.SET_SELECTED_MOVIE, newSelectedMovie, {
        root: true
      });
      this.$store.dispatch(MODULE_NAME + "/" + ACTIONS.SEARCH_MOVIES_BY_GENRE);
    },
    OnFilmGalleryLoadMoreClicked() {
      console.log("FilmDetailPage#OnFilmGalleryLoadMoreClicked");
      this.$store.dispatch(MODULE_NAME + "/" + ACTIONS.LOAD_MORE_MOVIES);
    },
    goToMainPage() {
      window.location.href = publicPath;
    }
  },

  beforeMount() {
    this.$store.dispatch(MODULE_NAME + "/" + ACTIONS.LOAD_MORE_MOVIES);
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
