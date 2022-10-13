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
  const searchedValue = localStorage.getItem('input-value');

  spinner.enable();

  if (searchedValue !== '') {
    const dataResponse = await fetchMovieSearcher(searchedValue, selectedPage);
    const renderDataMarkup = renderCollection(dataResponse.results);
  } else {
    const dataResponse = await getPopularData(selectedPage);
    const renderDataMarkup = renderCollection(dataResponse.results);
  }

  setTimeout(() => {
    scrollToTop();
    spinner.disable();
  }, 400);
}

function updateLastPaginationPage({ total_pages }) {
  pagination.setTotalItems(total_pages);
  document.querySelector('.tui-ico-last').innerHTML = total_pages;
}

function scrollToTop() {
  window.scrollTo({
    top: 240,
    behavior: 'smooth',
  });
}

export { pagination };
export { updateLastPaginationPage };
