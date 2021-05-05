const MODULE_NAME = "mainPage";

const STATES = {
  GALLERY_MOVIES: "galleryMovies",
  FOUND_MOVIES_SIZE: "foundMoviesSize"
};

const MUTATIONS = {
  SET_GALLERY_MOVIES: "setGalleryMovies",
  ADD_MOVIES_TO_GALLERY: "addMoviesToGallery",
  SET_FOUND_MOVIES_SIZE: "setFoundMoviesSize"
};

const ACTIONS = {
  LOAD_MORE_MOVIES: "loadMoreMovies",
  SEARCH_MOVIES: "searchMovies"
};

export { MODULE_NAME, STATES, MUTATIONS, ACTIONS };
