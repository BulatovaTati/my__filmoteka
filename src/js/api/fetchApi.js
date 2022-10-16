import axios from 'axios';

const API_KEY = 'f3b7458c34b3a95455ce5f7edb53b2eb';
const BASE_URL = 'https://api.themoviedb.org/3';

// Отримую популярні фільми
async function getPopularData(page) {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    const data = await response.data;
    return response.data;
  } catch (error) {
    console.error('Smth wrong with api get full trends' + error);
  }
}

// Запит по назві фільму
async function fetchMovieSearcher(text, page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}&page=${page}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Smth wrong with api search fetch' + error);
  }
}

// Запит по id
async function fetchMovieForId(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Smth wrong with api search fetch' + error);
  }
}

// Запит на трейлер фільму
async function fetchMovieVideoForId(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Smth wrong with api search fetch' + error);
  }
}

// Запит до жанрыв фільму
async function getGenres() {
  try {
    const response = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error('Smth wrong with api search fetch' + error);
  }
}

export {
  getPopularData,
  fetchMovieSearcher,
  fetchMovieForId,
  getGenres,
  fetchMovieVideoForId,
};
