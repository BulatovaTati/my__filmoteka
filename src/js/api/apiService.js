import axios from 'axios';
export { API_KEY, BASE_URL } from './api-vars';

// Посилання на документацію для запиту на список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці:
async function fetchGetTrending(pageValue) {
  const { data } = await axios.get(
    `/trending/movie/week?api_key=${API_KEY}&page=${pageValue}`
  );
  const { results, total_pages, page, total_results } = data;
  return { results, total_pages, page, total_results };
}
// Посилання на документацію для запиту фільму за ключовим словом на головній сторінці:
async function fetchGetSearchMovie(valueInput, pageValue) {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&page=${pageValue}&query=${valueInput}`
  );
  const { results, total_pages, page, total_results } = data;
  return { results, total_pages, page, total_results };
}

// async function fetchGetMovieById(id) {
//   const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

//   return data;
// }

// ! Посилання на документацію для запиту повної інформації про кінофільм для сторінки кінофільму: https://developers.themoviedb.org/3/movies/get-movie-details

// export { fetchGetSearchMovie, fetchGetSearchMovie };
