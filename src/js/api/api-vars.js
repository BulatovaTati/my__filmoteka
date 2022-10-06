const API_KEY = '7c47f39dc565b202f275767eff95366e';
const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_URL = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
const POPULAR_DAY_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;
const ID_URL = `${BASE_URL}/movie/`;
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const VIDEO_URL = `/videos?api_key=${API_KEY}&language=en-US`;

export {
  API_KEY,
  BASE_URL,
  POPULAR_URL,
  POPULAR_DAY_URL,
  SEARCH_URL,
  ID_URL,
  BASE_IMG_URL,
  VIDEO_URL,
};
