import { mutations } from "../../../src/store/mutations";

const FIRST_MOVIE = {
  id: 1,
  title: "FIRST_MOVIE_TITLE",
  release_date: "2000-01-01",
  genres: ["GENRE_1", "GENRE_3"],
  vote_average: 9,
  vote_count: 9
};
const SECOND_MOVIE = {
  id: 2,
  title: "SECOND_MOVIE_TITLE",
  genres: ["GENRE_2", "GENRE_3"],
  release_date: "2020-01-01",
  vote_average: 1,
  vote_count: 1
};
const MOVIES = [FIRST_MOVIE, SECOND_MOVIE];

describe("mutations", () => {
  let state;

  beforeEach(() => {
    state = {
      allMovies: MOVIES,
      searchingMovies: MOVIES,
      selectedMovie: FIRST_MOVIE
    };
  });

  it('"setSelectedMovie"', () => {
    mutations.setSelectedMovie(state, SECOND_MOVIE);

    expect(state.selectedMovie).toBe(SECOND_MOVIE);
  });

  it('"filterMoviesByTitle"', () => {
    const searchText = "SECOND";

    mutations.filterMoviesByTitle(state, searchText);

    expect(state.searchingMovies).toEqual([SECOND_MOVIE]);
  });

  it('"filterMoviesByGenre"', () => {
    const searchText = "GENRE_1";

    mutations.filterMoviesByGenre(state, searchText);

    expect(state.searchingMovies).toEqual([FIRST_MOVIE]);
  });
});
