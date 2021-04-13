import { getters } from "../../../src/store/getters";

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

describe("getters", () => {
  let state;

  beforeEach(() => {
    state = {
      allMovies: MOVIES,
      searchingMovies: MOVIES
    };
  });

  it('"findMovie" return movie with by', () => {
    const movieId = 1;

    expect(getters.findMovie(state)(movieId)).toBe(FIRST_MOVIE);
  });

  it('"moviesFilteredByGenre" returns movie filtred by genre', () => {
    const genre = "GENRE_1";

    expect(getters.moviesFilteredByGenre(state)(genre)).toEqual(
      expect.arrayContaining([FIRST_MOVIE])
    );
  });

  it('"searchingMoviesSortedByRating" returns movie sorted by rating', () => {
    expect(getters.searchingMoviesSortedByRating(state)).toEqual(
      expect.arrayContaining([
        expect.objectContaining(FIRST_MOVIE),
        expect.objectContaining(SECOND_MOVIE)
      ])
    );
  });

  it('"searchingMoviesSortedByReleaseDate" returns movie sorted by release_date', () => {
    expect(getters.searchingMoviesSortedByRating(state)).toEqual(
      expect.arrayContaining([
        expect.objectContaining(SECOND_MOVIE),
        expect.objectContaining(FIRST_MOVIE)
      ])
    );
  });
});
