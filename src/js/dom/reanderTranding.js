import { getPopularData } from '../api/fetchApi';
import { renderCollection } from './create-movie-markup';
import { refs } from '../common/refs';
import { updateLastPaginationPage } from '../common/pagination';

function renderMovieTr() {
  if (refs.input.value !== '') {
    return;
  }

  const page = 1;

  getPopularData(page)
    .then(data => {
      renderCollection(data.results);
      localStorage.setItem('input-value', '');
      updateLastPaginationPage(data);
    })
    .catch(console.log);
}

renderMovieTr();
