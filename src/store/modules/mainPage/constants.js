const MODULE_NAME = "mainPage";

const STATES = {
  GALLERY_MOVIES: "galleryMovies"
};

const GETTERS = {
  FIND_MOVIE: "findMovie",
  GALLERY_MOVIES_SORTED_BY_RATING: "galleryMoviesSortedByRating",
  GALLERY_MOVIES_SORTED_BY_RELEASE_DATE: "galleryMoviesSortedByReleaseDate"
};

const MUTATIONS = {
  SET_GALLERY_MOVIES: "setGalleryMovies",
  ADD_MOVIES_TO_GALLERY: "addMoviesToGallery"
};

const ACTIONS = {
  LOAD_MORE_MOVIES: "loadMoreMovies",
  SEARCH_MOVIES: "searchMovies"
};

export { MODULE_NAME, STATES, GETTERS, MUTATIONS, ACTIONS };
