import { refs } from '../common/refs';
import { fetchMovieSearcher, getGenres } from '../api/fetchApi';
import { renderCollection } from './create-movie-markup';
import { addToStorage } from '../other/localeStorageServices';

refs.search_form.addEventListener('submit', e => {
  e.preventDefault();
  const value = e.currentTarget.searchQuery.value.trim();
  console.log(value);
  if (value === '') {
    // class add
    return;
  }
  fetchMovieSearcher(value)
    .then(data => {
      renderCollection(data.results);
      console.log(data.results);
    })
    .catch(console.log);
});

getGenres().then(data => {
  addToStorage('allGenres', data.genres);
});
