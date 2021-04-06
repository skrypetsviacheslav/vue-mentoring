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
              {{ movies.length }} {{ movieFoundLabel }}
            </span>
          </div>
          <div class="col">
            <Toogle
              class="float-right"
              :label="sortByLabel"
              :firstOption="sortByFirstOptionText"
              :secondOption="sortBySecondOptionText"
              @value-switched="onSortByToogleValueSwitched"
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
import Toogle from "./components/Toogle";
import BaseLayout from "./components/layout/BaseLayout";

import { publicPath } from "../vue.config";
import MOCK_DATA from "./config/mockData";
import I18N from "./config/i18n/index";

export default {
  name: "MainPage",
  components: {
    BaseLayout,
    AppNameLabel,
    Header,
    SearchBar,
    Toogle,
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
      searchBySecondOptionText: I18N["EN"].SEARCH_BY_SECOND_OPTION_TEXT,

      movies: MOCK_DATA.MOVIES
    };
  },
  computed: {
    sortedMovies() {
      if (this.sortBySelectedOption === this.sortByFirstOptionText) {
        return this.sortedMoviesByReleaseDate;
      } else {
        return this.sortedMoviesByRating;
      }
    },
    sortedMoviesByReleaseDate() {
      const sortedMovies = [...this.movies];
      sortedMovies.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      return sortedMovies;
    },
    sortedMoviesByRating() {
      const sortedMovies = [...this.movies];
      sortedMovies.sort((a, b) => b.vote_count - a.vote_count);
      return sortedMovies;
    }
  },
  methods: {
    onSortByToogleValueSwitched(sortByValue) {
      console.log("onSortByToogleValueSwitched", sortByValue);
      this.sortBySelectedOption = sortByValue;
    },
    onSearchBarButtonClicked(searchText, searchByOption) {
      console.log("onSearchBarButtonClicked", searchText, searchByOption);
    },
    onFilmCardClick(movieID) {
      console.log("onSearchBarButtonClicked id", movieID);
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
