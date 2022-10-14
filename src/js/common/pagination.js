import Pagination from 'tui-pagination';
import Spinner from './spinner';
import { getPopularData, fetchMovieSearcher } from '../api/fetchApi';
import { options } from './options-pagination';
import { renderCollection } from '../dom/create-movie-markup';

const pagination = new Pagination('pagination', options);
const spinner = new Spinner();
// const refs = {
//   lastPageBtnText: document.querySelector('.tui-ico-last'),
// };

pagination.on('afterMove', onPaginationClick);

async function onPaginationClick(e) {
  const lastPageNumber = Number(
    document.querySelector('.tui-ico-last').textContent
  );
  const selectedPage = e.page;
  const searchedValue = localStorage.getItem('input-value');

  spinner.enable();

  if ((selectedPage > 1) & (selectedPage < lastPageNumber)) {
    hideBtn(selectedPage);
  }

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

function hideBtn(selectedPage) {
  const firstPageBtnRef = document.querySelector('.custom-class-first');
  const lastPageBtnRef = document.querySelector('.custom-class-last');
  const lastPageNumber = Number(
    document.querySelector('.tui-ico-last').textContent
  );

  if (selectedPage < 4) {
    firstPageBtnRef.classList.add('btn-hidden');
    return;
  }
  if (lastPageNumber - selectedPage < 3) {
    lastPageBtnRef.classList.add('btn-hidden');
    return;
  }

  lastPageBtnRef.classList.remove('btn-hidden');
  firstPageBtnRef.classList.remove('btn-hidden');
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
