<template>
  <div id="app">
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
import { MUTATIONS } from "./config/constants";

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
        return this.$store.getters.searchingMoviesSortedByReleaseDate;
      } else {
        return this.$store.getters.searchingMoviesSortedByRating;
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

      if (searchByOption === I18N["EN"].SEARCH_BY_FIRST_OPTION_TEXT) {
        this.$store.commit(MUTATIONS.FILTER_MOVIES_BY_TITLE, searchText.trim());
      } else {
        this.$store.commit(MUTATIONS.FILTER_MOVIES_BY_GENRE, searchText.trim());
      }
    },
    onFilmCardClick(movieID) {
      console.log("MainPage#onFilmCardClick id", movieID);
      const newSelectedMovie = this.$store.getters.findMovie(movieID);
      this.$store.commit(MUTATIONS.SET_SELECTED_MOVIE, newSelectedMovie);
      window.location.href = publicPath + "details";
    }
  }
};
</script>

<style scoped>
.gallery__bg-dark {
  background-color: #232323;
}
</style>
