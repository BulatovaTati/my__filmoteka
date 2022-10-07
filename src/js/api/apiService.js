// import axios from 'axios';
// const API_KEY = '7c47f39dc565b202f275767eff95366e';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// async function fetchGetTrending(pageValue) {
//   const { data } = await axios.get(
//     `/trending/movie/week?api_key=${API_KEY}&page=${pageValue}`
//   );
//   const { results, total_pages, page, total_results } = data;
//   return { results, total_pages, page, total_results };
// }

// async function fetchGetSearchMovie(valueSearch, pageValue) {
//   const { data } = await axios.get(
//     `/search/movie?api_key=${API_KEY}&page=${pageValue}&query=${valueSearch}`
//   );
//   const { results, total_pages, page, total_results } = data;
//   return { results, total_pages, page, total_results };
// }

// async function fetchGetMovieById(id) {
//   const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

//   return data;
// }

// async function fetchGetMovieGenres() {
//   const { data } = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
//   const { genres } = data;
//   return genres;
// }
