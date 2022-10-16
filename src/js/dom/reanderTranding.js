import { getPopularData } from '../api/fetchApi';
import { renderCollection } from './create-movie-markup';
import { refs } from '../common/refs';
import { updateLastPaginationPage, pagination } from '../common/pagination';
import Spinner from '../common/spinner';
const spinner = new Spinner();

function renderMovieTr() {
  if (refs.input.value !== '') {
    return;
  }

  const page = 1;
  spinner.enable();
  getPopularData(page)
    .then(data => {
      renderCollection(data.results);
      localStorage.setItem('input-value', '');
      pagination.reset(data.total_pages);
      updateLastPaginationPage(data);
      spinner.disable();
    })
    .catch(console.log);
}

renderMovieTr();
