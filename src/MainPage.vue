<template>
  <div id="app">
    <h1>TEST WORKFLOW v.2.0.1</h1>
    <BaseLayout>
      <template v-slot:header>
        <Header>
          <div class="row">
            <div class="col">
              <AppNameLabel />
            </div>
          </div>
          <div class="row">
            <div class="col text-white">
              <h1>{{ findYourMovieHeader }}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <SearchBar
                :firstOption="searchByFirstOptionText"
                :secondOption="searchBySecondOptionText"
                @search-submitted="onSearchBarButtonClicked"
              />
            </div>
          </div>
        </Header>
      </template>

      <template v-slot:toolbar>
        <div class="row align-items-center h-100">
          <div class="col">
            <span class="text-white pl-5">
              {{ sortedMovies.length }} {{ movieFoundLabel }}
            </span>
          </div>
          <div class="col">
            <Toggle
              class="float-right"
              :label="sortByLabel"
              :firstOption="sortByFirstOptionText"
              :secondOption="sortBySecondOptionText"
              @value-switched="onSortByToggleValueSwitched"
            />
          </div>
        </div>
      </template>

      <FilmCardGallery
        class="gallery__bg-dark p-4"
        :cards="sortedMovies"
        @film-gallery-card-clicked="onFilmCardClick"
        @film-gallery-load-more-clicked="OnFilmGalleryLoadMoreClicked"
      />
    </BaseLayout>
  </div>
</template>

<script>
import AppNameLabel from "./components/AppNameLabel";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilmCardGallery from "./components/FilmCardGallery";
import Toggle from "./components/Toggle";
import BaseLayout from "./components/layout/BaseLayout";

import { publicPath } from "../vue.config";
import I18N from "./config/i18n/index";
import {
  MODULE_NAME,
  ACTIONS,
  GETTERS
} from "./store/modules/mainPage/constants";
import {
  MODULE_NAME as SEARCH_MODULE_NAME,
  MUTATIONS as SEARCH_MUTATIONS,
  SEARCH_BY_OPTIONS
} from "./store/modules/search/constants";
import { MUTATIONS } from "./store/constants";

export default {
  name: "MainPage",
  components: {
    BaseLayout,
    AppNameLabel,
    Header,
    SearchBar,
    Toggle,
    FilmCardGallery
  },
  data: () => {
    return {
      findYourMovieHeader: I18N["EN"].MAIN_PAGE_FIND_YOUR_MOVIE_HEADER,
      movieFoundLabel: I18N["EN"].MAIN_PAGE_MOVIE_FOUND_LABEL,
      sortByLabel: I18N["EN"].SORT_BY_LABEL,
      sortByFirstOptionText: I18N["EN"].SORT_BY_FIRST_OPTION_TEXT,
      sortBySecondOptionText: I18N["EN"].SORT_BY_SECOND_OPTION_TEXT,
      sortBySelectedOption: I18N["EN"].SORT_BY_FIRST_OPTION_TEXT,

      searchByFirstOptionText: I18N["EN"].SEARCH_BY_FIRST_OPTION_TEXT,
      searchBySecondOptionText: I18N["EN"].SEARCH_BY_SECOND_OPTION_TEXT
    };
  },
  computed: {
    sortedMovies() {
      if (this.sortBySelectedOption === this.sortByFirstOptionText) {
        return this.$store.getters[
          MODULE_NAME + "/" + GETTERS.GALLERY_MOVIES_SORTED_BY_RATING
        ];
      } else {
        return this.$store.getters[
          MODULE_NAME + "/" + GETTERS.GALLERY_MOVIES_SORTED_BY_RELEASE_DATE
        ];
      }
    }
  },
  methods: {
    onSortByToggleValueSwitched(sortByValue) {
      console.log("MainPage#onSortByToggleValueSwitched", sortByValue);
      this.sortBySelectedOption = sortByValue;
    },
    onSearchBarButtonClicked(searchText, searchByOption) {
      console.log(
        "MainPage#onSearchBarButtonClicked",
        searchText,
        searchByOption
      );

      this.$store.commit(
        SEARCH_MODULE_NAME + "/" + SEARCH_MUTATIONS.SET_SEARCH_TEXT,
        searchText
      );
      if (searchByOption === I18N["EN"].SEARCH_BY_FIRST_OPTION_TEXT) {
        this.$store.commit(
          SEARCH_MODULE_NAME + "/" + SEARCH_MUTATIONS.SET_SEARCH_BY_OPTION,
          SEARCH_BY_OPTIONS.TITLE
        );
      } else {
        this.$store.commit(
          SEARCH_MODULE_NAME + "/" + SEARCH_MUTATIONS.SET_SEARCH_BY_OPTION,
          SEARCH_BY_OPTIONS.GENRE
        );
      }
      this.$store.dispatch(MODULE_NAME + "/" + ACTIONS.SEARCH_MOVIES);
    },
    onFilmCardClick(movieID) {
      console.log("MainPage#onFilmCardClick id", movieID);
      const newSelectedMovie = this.$store.getters[
        MODULE_NAME + "/" + GETTERS.FIND_MOVIE
      ](movieID);
      this.$store.commit(MUTATIONS.SET_SELECTED_MOVIE, newSelectedMovie, {
        root: true
      });
      window.location.href = publicPath + "details";
    },
    OnFilmGalleryLoadMoreClicked() {
      console.log("FilmDetailPage#OnFilmGalleryLoadMoreClicked");
      this.$store.dispatch(MODULE_NAME + "/" + ACTIONS.LOAD_MORE_MOVIES);
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
</style>
