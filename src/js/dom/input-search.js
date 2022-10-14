import { refs } from '../common/refs';
import { fetchMovieSearcher, getGenres } from '../api/fetchApi';
import { renderCollection } from './create-movie-markup';
import { addToStorage } from '../other/localeStorageServices';
import Spinner from '../common/spinner';
import { pagination } from '../common/pagination';
import { updateLastPaginationPage } from '../common/pagination';

const spinner = new Spinner();

refs.search_form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  const value = e.currentTarget.searchQuery.value.trim();
  spinner.enable();
  if (!value) {
    refs.input.value = '';
    refs.input_error.classList.add('visually-show-error');
    refs.input_error.textContent = 'Please enter a movie name to search';

    setTimeout(() => {
      refs.input_error.classList.remove('visually-show-error');
      refs.input_error.textContent = '';
    }, 3000);
    spinner.disable();
    return;
  }

  try {
    const response = await fetchMovieSearcher(value);
    const movieArr = response.results;

    if (movieArr.length === 0) {
      refs.input.value = '';
      refs.input_error.textContent = 'Please enter a movie name to search';

      refs.input_error.classList.add('visually-show-error');
      setTimeout(() => {
        refs.input_error.textContent = '';

        refs.input_error.classList.remove('visually-show-error');
      }, 3000);
      spinner.disable();
      return;
    }
    addToStorage('input-value', value);
    spinner.disable();
    renderCollection(movieArr);
    updateLastPaginationPage(response);
    pagination.reset(response.total_pages);
    updateLastPaginationPage(response);
    refs.input.value = '';
  } catch (error) {
    console.log(error);
  }
}

getGenres()
  .then(({ genres }) => {
    const genresObj = {};
    genres.forEach(({ id, name }) => {
      genresObj[id] = name;
    });
    addToStorage('allGenres', genresObj);
  })
  .catch(console.log);
