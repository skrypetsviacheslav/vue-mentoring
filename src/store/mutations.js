export const mutations = {
  setSelectedMovie: (state, movie) => {
    state.selectedMovie = movie;
  },
  filterMoviesByTitle: (state, searchText) => {
    state.searchingMovies = state.allMovies.filter(movie =>
      movie.title.includes(searchText)
    );
  },
  filterMoviesByGenre: (state, searchText) => {
    state.searchingMovies = state.allMovies.filter(movie =>
      movie.genres.find(genre => genre.includes(searchText))
    );
  }
};
