import Pagination from 'tui-pagination';
import { getPopularData } from '../api/fetchApi';
import { options } from './options-pagination';
import Spinner from './spinner';

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
  onTopScroll();

  setTimeout(() => {
    spinner.disable();
  }, 400);

  // console.log(data);
  // options.totalItems = 100;
  // console.log(options.totalItems);
}

function onTopScroll() {
  window.scrollTo({
    top: 240,
    behavior: 'smooth',
  });
}
