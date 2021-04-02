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
              <h1>FIND YOUR MOVIE</h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <SearchBar
                :firstOption="searchByFirstOption"
                :secondOption="searchBySecondOption"
                @button-clicked="onSearchBarButtonClicked"
              />
            </div>
          </div>
        </Header>
      </template>

      <template v-slot:toolbar>
        <div class="row align-items-center h-100">
          <div class="col">
            <span class="text-white pl-5">
              {{ movies.length }} movie found
            </span>
          </div>
          <div class="col">
            <Toogle
              class="float-right"
              :label="sortByLabel"
              :firstOption="sortByFirstOption"
              :secondOption="sortBySecondOption"
              @value-switched="onSortByToogleValueSwitched"
            />
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
import SearchBar from "./components/SearchBar";
import FilmCardGallery from "./components/FilmCardGallery";
import Toogle from "./components/Toogle";
import BaseLayout from "./components/layout/BaseLayout";

import { publicPath } from "../vue.config";
import { appConfig } from "./config/appConfig";
import { mockData } from "./config/mockData";

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
      sortByLabel: appConfig.sortConfig.label,
      sortByFirstOption: appConfig.sortConfig.firstOption,
      sortBySecondOption: appConfig.sortConfig.secondOption,

      searchByFirstOption: appConfig.searchConfig.firstOption,
      searchBySecondOption: appConfig.searchConfig.secondOption,

      movies: mockData.movies
    };
  },
  methods: {
    onSortByToogleValueSwitched(sortByValue) {
      console.log("onSortByToogleValueSwitched", sortByValue);
      if (this.sortByFirstOption === sortByValue) {
        this.movies.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
      } else {
        this.movies.sort((a, b) => b.vote_count - a.vote_count);
      }
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
