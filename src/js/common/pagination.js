import Pagination from 'tui-pagination';
import Spinner from './spinner';
import { getPopularData, fetchMovieSearcher } from '../api/fetchApi';
import { options } from './options-pagination';
import { renderCollection } from '../dom/create-movie-markup';

const pagination = new Pagination('pagination', options);
const spinner = new Spinner();

pagination.on('afterMove', onPaginationClick);

function onPaginationClick(e) {
  const selectedPage = e.page;
  const inputValue = localStorage.getItem('input-value');

  spinner.enable();

  if (inputValue) {
    const data = fetchMovieSearcher(inputValue, selectedPage);

    renderCollection(data.results);
  } else {
    const data = getPopularData(selectedPage);

    renderCollection(data.results);
  }

  setTimeout(() => {
    scrollToTop();
    spinner.disable();
  }, 400);
}

function scrollToTop() {
  window.scrollTo({
    top: 240,
    behavior: 'smooth',
  });
}
