import { getPopularData } from '../api/fetchApi';
import { renderCollection } from './create-movie-markup';

const page = 1;

getPopularData(page)
  .then(data => {
    renderCollection(data.results);
  })
  .catch(console.log);
