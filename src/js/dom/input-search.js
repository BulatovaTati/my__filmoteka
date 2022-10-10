import { refs } from '../common/refs';
import { fetchMovieSearcher, getGenres } from '../api/fetchApi';
import { renderCollection } from './create-movie-markup';
import { addToStorage } from '../other/localeStorageServices';
import Spinner from '../common/spinner';
// refs.search_form.addEventListener('submit', e => {
//   e.preventDefault();
//   const value = e.currentTarget.searchQuery.value.trim();
//   console.log(value);
//   if (value === '') {
//     refs.input_error.classList.remove('visually-hidden');
//     setTimeout(() => {
//       refs.input_error.classList.add('visually-hidden');
//     }, 3000);
//     return;
//   }
//   fetchMovieSearcher(value)
//     .then(data => {
//       renderCollection(data.results);
//       console.log(data.results);
//     })
//     .catch(console.log);
// });

// getGenres().then(data => {
//   addToStorage('allGenres', data.genres);
// });
const spinner = new Spinner();

refs.search_form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  const value = e.currentTarget.searchQuery.value.trim();
  spinner.enable();
  console.log(value);
  if (!value) {
    refs.input.value = '';
    refs.input_error.classList.add('visually-show-error');
    setTimeout(() => {
      refs.input_error.classList.remove('visually-show-error');
    }, 3000);
    spinner.disable();
    return;
  }

  try {
    const response = await fetchMovieSearcher(value);
    const movieArr = response.results;

    if (movieArr.length === 0) {
      refs.input.value = '';
      refs.input_error.classList.add('visually-show-error');
      setTimeout(() => {
        refs.input_error.classList.remove('visually-show-error');
      }, 3000);
      spinner.disable();
      return;
    }
    addToStorage('input-value', value);
    spinner.disable();
    renderCollection(movieArr);
    refs.input.value = '';
  } catch (error) {
    console.log(error);
  }
}

getGenres()
  .then(data => {
    addToStorage('allGenres', data.genres);
  })
  .catch(console.log);
