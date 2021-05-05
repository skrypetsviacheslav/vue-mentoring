const EVENTS = {
  FILM_CARD_CLICKED: "film-card-clicked",
  FILM_GALLERY_CARD_CLICKED: "film-gallery-card-clicked",
  FILM_GALLERY_LOAD_MORE_CLICKED: "film-gallery-load-more-clicked",
  SEARCH_BAR_SEARCH_SUBMITTED: "search-submitted",
  TOGGLE_VALUE_SWITCHED: "value-switched"
};

const MUTATIONS = {
  SET_SELECTED_MOVIE: "setSelectedMovie"
};

const APP_CONFIG = {
  UPLOADING_MOVIES_CHUNK_SIZE: 6,
  DEFAULT_IMAGE_PATH: "assets/300x450.png"
};

export { EVENTS, MUTATIONS, APP_CONFIG };
