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
              {{ foundMoviesSize }} {{ movieFoundLabel }}
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
        :cards="galleryMovies"
        @film-gallery-card-clicked="onFilmCardClick"
        @film-gallery-load-more-clicked="OnFilmGalleryLoadMoreClicked"
      />
    </BaseLayout>
  </div>
</template>

<script>
import AppNameLabel from "@/components/AppNameLabel";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FilmCardGallery from "@/components/FilmCardGallery";
import Toggle from "@/components/Toggle";
import BaseLayout from "@/components/layout/BaseLayout";

import I18N from "@/config/i18n/index";
import {
  MODULE_NAME,
  ACTIONS,
  STATES
} from "@/store/modules/mainPage/constants";
import {
  MODULE_NAME as SEARCH_MODULE_NAME,
  MUTATIONS as SEARCH_MUTATIONS,
  SEARCH_BY_OPTIONS,
  SORT_BY_OPTIONS
} from "@/store/modules/search/constants";
// import { PATH } from "@/router/constants";

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

      searchByFirstOptionText: I18N["EN"].SEARCH_BY_FIRST_OPTION_TEXT,
      searchBySecondOptionText: I18N["EN"].SEARCH_BY_SECOND_OPTION_TEXT
    };
  },
  computed: {
    galleryMovies() {
      return this.$store.state[MODULE_NAME][STATES.GALLERY_MOVIES];
    },
    foundMoviesSize() {
      return this.$store.state[MODULE_NAME][STATES.FOUND_MOVIES_SIZE];
    }
  },
  methods: {
    onSortByToggleValueSwitched(sortByValue) {
      console.log("MainPage#onSortByToggleValueSwitched", sortByValue);
      if (sortByValue === I18N["EN"].SORT_BY_FIRST_OPTION_TEXT) {
        this.$store.commit(
          SEARCH_MODULE_NAME + "/" + SEARCH_MUTATIONS.SET_SORT_BY_OPTION,
          SORT_BY_OPTIONS.RELEASE_DATE
        );
      } else {
        this.$store.commit(
          SEARCH_MODULE_NAME + "/" + SEARCH_MUTATIONS.SET_SORT_BY_OPTION,
          SORT_BY_OPTIONS.RATING
        );
      }
      this.$store.dispatch(MODULE_NAME + "/" + ACTIONS.SEARCH_MOVIES);
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
      this.$router.push({ path: `/movie/${movieID}` });
    },
    OnFilmGalleryLoadMoreClicked() {
      console.log("FilmDetailPage#OnFilmGalleryLoadMoreClicked");
      this.$store.dispatch(MODULE_NAME + "/" + ACTIONS.LOAD_MORE_MOVIES);
    }
  },

  beforeMount() {
    this.$store.dispatch(MODULE_NAME + "/" + ACTIONS.SEARCH_MOVIES);
  }
};
</script>

<style scoped>
.gallery__bg-dark {
  background-color: #232323;
}
</style>
