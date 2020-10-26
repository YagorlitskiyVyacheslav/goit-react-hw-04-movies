import axios from "axios";

export function fetchTrendingMovies() {
    return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=ba27eec4fa05f11f3642daa5bd4dd776`)
    .then(response => response.data.results)
}

export function fetchCurrentMovies(id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ba27eec4fa05f11f3642daa5bd4dd776&language=en-US`
    ).then(response => {
        const popularity = Math.round(response.data.popularity);
        return {
          popularity,
          title: response.data.title || response.data.name,
          overview: response.data.overview,
          genres: response.data.genres,
          image: `https://image.tmdb.org/t/p/w500${response.data.poster_path}`,
        };
    })
    
};
export function fetchMoviesByQuery(query) {
    return axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ba27eec4fa05f11f3642daa5bd4dd776&language=en-US&query=${query}&page=1&include_adult=false`
    ).then(response => response.data.results)
} 
export function fetchMoviesCast(id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ba27eec4fa05f11f3642daa5bd4dd776`
    ).then(response => response.data.cast)
}
export function fetchMoviesReviews(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ba27eec4fa05f11f3642daa5bd4dd776&language=en-US&page=1`
    )
    .then((response) => response.data.results);
}