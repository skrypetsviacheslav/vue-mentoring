import axios from "axios";

let movieAxiosInstanse = {};

const MovieApiService = {
  init(options) {
    movieAxiosInstanse = axios.create({
      timeout: 5000,
      ...options,
      baseURL: "https://react-cdp-api.herokuapp.com"
    });

    if (process.env.DEBUG) {
      movieAxiosInstanse.interceptors.request.use(x => {
        console.log(x);
        return x;
      });

      movieAxiosInstanse.interceptors.response.use(x => {
        console.log(x);
        return x;
      });
    }
  },

  getMovies(options) {
    return movieAxiosInstanse
      .get("/movies", {
        params: {
          ...options,
          sortOrder: "desc"
        }
      })
      .then(res => res.data);
  },
  getById(id) {
    return movieAxiosInstanse
      .get(`/movies/${id}`)
      .then(res => res.data)
      .then(data => {
        if (Object.keys(data).length === 0) {
          throw new Error(`No movie foumd with id:${id}`);
        } else {
          return data;
        }
      });
  }
};

export default MovieApiService;
