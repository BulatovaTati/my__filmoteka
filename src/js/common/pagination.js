import Pagination from 'tui-pagination';
import Spinner from './spinner';
import { getPopularData, fetchMovieSearcher } from '../api/fetchApi';
import { options } from './options-pagination';
import { renderCollection } from '../dom/create-movie-markup';

const pagination = new Pagination('pagination', options);
const spinner = new Spinner();

const refs = {
  firstPageBtn: document.querySelector('.tui-first'),
  lastPageBtn: document.querySelector('.tui-last'),
  lastPageBtnText: document.querySelector('.tui-ico-last'),
};

pagination.on('afterMove', onPaginationClick);

async function onPaginationClick(e) {
  // let lastPage = refs.lastPageBtnText.textContent;
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
  refs.lastPageBtnText.innerHTML = total_pages;
}

function scrollToTop() {
  window.scrollTo({
    top: 240,
    behavior: 'smooth',
  });
}

export { pagination };
export { updateLastPaginationPage };
