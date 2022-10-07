import axios from 'axios';
export { API_KEY, BASE_URL } from './api-vars';

export default class MoviesApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.lang = '';
    this.genre = '';
    this.year = '';
    this.originalLanguage = '';
    this.vote = '';
  }

  async getPopularFilms() {
    try {
      const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=${this.lang}&page=${this.page}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getTrendFilms() {
    try {
      const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=${this.lang}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilmsByName() {
    try {
      const searchParams = new URLSearchParams({
        api_key: '7c47f39dc565b202f275767eff95366e',
        query: this.searchQuery,
        language: 'en-US',
        page: this.page,
        include_adult: false,
      });
      const url = `${BASE_URL}search/movie?${searchParams}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getFilmDetails(id) {
    try {
      const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${this.lang}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilmVideo(id) {
    try {
      const url = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&language=${this.lang}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilteredMovies() {
    try {
      const searchParams = new URLSearchParams({
        api_key: '7c47f39dc565b202f275767eff95366e',
        language: this.lang,
        sort_by: 'popularity.desc',
        page: this.page,
        include_adult: false,
        with_genres: this.genre,
        primary_release_year: this.year,
        with_original_language: this.originalLanguage,
      });
      const url = `${BASE_URL}discover/movie?${searchParams}&vote_average.gte=${this.vote}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get query() {
    return this.searchQuery;
  }

  setLang(newLang) {
    this.lang = newLang;
  }

  getLang() {
    return this.lang;
  }

  incrementPage() {
    this.page += 1;
  }
  decrementPage() {
    this.page -= 1;
  }
  resetPage() {
    this.page = 1;
  }
}
