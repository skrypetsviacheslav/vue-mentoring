export const getters = {
  findMovie: state => id => state.allMovies.find(movie => movie.id === id),
  moviesFilteredByGenre: state => genre =>
    state.allMovies.filter(movie => movie.genres.includes(genre)),
  searchingMoviesSortedByRating: state =>
    [...state.searchingMovies].sort((a, b) => b.vote_count - a.vote_count), // TODO: replace vote_count to vote_average
  searchingMoviesSortedByReleaseDate: state =>
    [...state.searchingMovies].sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    )
};
