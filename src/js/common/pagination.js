import Pagination from 'tui-pagination';
import { getPopularData } from '../api/fetchApi';
import { options } from './options-pagination';
import Spinner from './spinner';
import { renderCollection } from '../dom/create-movie-markup';

export {
  getPopularData,
  fetchMovieSearcher,
  fetchMovieForId,
  getGenres,
} from '../api/fetchApi';

const pagination = new Pagination('pagination', options);
const spinner = new Spinner();

pagination.on('afterMove', onPaginationClick);

async function onPaginationClick(e) {
  const selectedPage = e.page;

  spinner.enable();
  const data = await getPopularData(selectedPage);

  const render = await renderCollection(data.results);
  setTimeout(() => {
    onTopScroll();
  }, 400);

  setTimeout(() => {
    spinner.disable();
  }, 400);
}

function onTopScroll() {
  window.scrollTo({
    top: 240,
    behavior: 'smooth',
  });
}
