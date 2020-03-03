const axios = require('axios');

module.exports = class MovieApi {
  constructor() {
    this.favorites = {};
    this.tvmazeApi = new axios.create({
      baseURL: "http://api.tvmaze.com"
    });
  }

  getFavorites() {
    return Object.values(this.favorites);
  }

  searchMovies(query) {
    return this.tvmazeApi.get(`/search/shows?q=${query}`)
      .then(results => results.data.map(result => result.show));
  }

  addFavoriteMovie(movie) {
    this.favorites[movie.id] = movie;
  }

  deleteFavoriteMovie(movieId) {
    delete this.favorites[movieId];
  }
}
