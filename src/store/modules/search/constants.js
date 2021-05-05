const MODULE_NAME = "search";

const STATES = {
  SEARCH_TEXT: "searchText",
  SEARCH_BY_OPTION: "searchByOption",
  SORT_BY_OPTION: "sortByOption"
};

const MUTATIONS = {
  SET_SEARCH_TEXT: "setSearchText",
  SET_SEARCH_BY_OPTION: "setSearchByOption",
  SET_SORT_BY_OPTION: "setSortByOptionn"
};

const SEARCH_BY_OPTIONS = {
  GENRE: "genres",
  TITLE: "title"
};

const SORT_BY_OPTIONS = {
  RELEASE_DATE: "release_date",
  RATING: "vote_average"
};

export { MODULE_NAME, STATES, MUTATIONS, SEARCH_BY_OPTIONS, SORT_BY_OPTIONS };
