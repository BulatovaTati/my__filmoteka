import Pagination from 'tui-pagination';
import Spinner from './spinner';
import { getPopularData, fetchMovieSearcher } from '../api/fetchApi';
import { options } from './options-pagination';
import { renderCollection } from '../dom/create-movie-markup';

const pagination = new Pagination('pagination', options);
const spinner = new Spinner();

pagination.on('afterMove', onPaginationClick);

async function onPaginationClick(e) {
  const selectedPage = e.page;
  const inputValue = localStorage.getItem('input-value');

  spinner.enable();

  if (inputValue !== '') {
    const data = await fetchMovieSearcher(inputValue, selectedPage);

    const render = await renderCollection(data.results);
  } else {
    const data = await getPopularData(selectedPage);

    const render = await renderCollection(data.results);
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

export { pagination };
